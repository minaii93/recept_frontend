import { createContext, useEffect, useState } from 'react';
import { myAxios } from './Axios';

export const ApiContext = createContext('');

export const ApiProvider = ({ children }) => {
  const [receptek, setReceptek] = useState([]);
  const [kategoriak, setKategoriak] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredReceptek = receptek.filter((recipe) => 
    recipe.cat_id.toString().includes(filterCategory.toString()) 
  );


  

  function getData(endPoint, setter) {
    setLoading(true);
    setError(null);
    return myAxios
      .get(endPoint)
      .then((response) => {
        console.log(response.data);
        setter(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response?.data?.message || 'Ismeretlen hiba történt');
      })
      .finally(function () {});
  }

 
  function postData(endPoint, data) {
    setLoading(true);
    setError(null);
    return myAxios
      .post(endPoint, data)
      .then((response) => {
        console.log('Siker:', response);
        return Promise.all([getData('/recipes', setReceptek), getData('/categories', setKategoriak)]);
      })
      .catch((error) => {
        console.error(error);
       
      })
      .finally(function () {});
  }

  function deleteData(endpoint,data){
    {
      myAxios
        .delete(endpoint, data)
        .then(function (response) {
          console.log(response);
          console.log("törölve")
          getData("/recipes", setReceptek);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    }}

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          getData('/recipes', setReceptek),
          getData('/categories', setKategoriak),
        ]);
      } catch (error) {
        console.error('Kezdeti adatok betöltése sikertelen:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <ApiContext.Provider value={{
      receptek: filteredReceptek,
      kategoriak,
      setFilterCategory, 
      postData,
      loading,
      error,
      deleteData
    }}>
      {children}
    </ApiContext.Provider>
  );
};
