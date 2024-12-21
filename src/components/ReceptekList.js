import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

function ReceptekList() {
    const { receptek } = useContext(ApiContext);

    return (
        <div>
            {receptek.length > 0 ? (
                <ul>
                    {receptek.map((recipe) => (
                        <li key={recipe.id}>
                            {recipe.name} - {recipe.desc}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nincsenek elérhető receptek a szűrés alapján.</p>
            )}
        </div>
    );
}

export default ReceptekList;
