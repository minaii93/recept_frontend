import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import './ReceptUrlap.css';

function ReceptUrlap() {
    const { postData, kategoriak, setFilterCategory } = useContext(ApiContext); 
    const [receptek, setReceptek] = useState({
        cat_id: '',  
        name: '',
        desc: '',
        url: ''
    });

   
    function filterChangeHandler(event) {
        setFilterCategory(event.target.value); 
    }


    function kuldesKezeles(event) {
        event.preventDefault();
        console.log("submit");
        postData('/recipes', receptek); 
    }


    function valtozasKezeles(event) {
        const slista = { ...receptek };
        slista[event.target.id] = event.target.value;
        setReceptek({ ...slista });
    }

    return (
        <div className = "recepkero">
            <div className="mb-3">
                <label htmlFor="filter" className="form-label">Kategória szűrés:</label>
                <select
                    className="form-control"
                    id="filter"
                    onChange={filterChangeHandler} 
                >
                    <option value="">Válassz egy kategóriát:</option>
                    {kategoriak.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <form onSubmit={kuldesKezeles}>
                <div className="mb-3">
                    <label htmlFor="cat_id" className="form-label">Étel típusa:</label>
                    <select
                        className="form-control"
                        id="cat_id"
                        name="cat_id"
                        value={receptek.cat_id}
                        onChange={valtozasKezeles}
                        required
                    >
                        <option value="">Válassz egy kategóriát:</option>
                        {kategoriak.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Leírás:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        name="desc"
                        value={receptek.desc}
                        onChange={valtozasKezeles}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Név:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={receptek.name}
                        onChange={valtozasKezeles}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Kép link:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="url"
                        name="url"
                        value={receptek.url}
                        onChange={valtozasKezeles}
                        required
                    />
                </div>

                <button type="submit" className="benyujt">Új recept hozzáadása</button>
            </form>
        </div>
    );
}

export default ReceptUrlap;
