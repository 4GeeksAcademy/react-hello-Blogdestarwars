
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

function Card2({ data3 }) {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${data3.uid}.jpg`}

                    className="card-img-top" alt="..."
                    onError={(e) => { e.target.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" }}
                ></img>
            </div>
            <div className="card-body">
                <h5 className="card-title  m-1 p-1">{data3.properties.name}</h5>
                <p className="card-text m-1 p-1">Population:{data3.properties.population}</p>
                <p className="card-text  m-1 p-1">Terrain:{data3.properties.terrain}</p>
                <div className="d-flex ">
                    <button className="btn border border-primary lernmore" onClick={() => {
                        navigate("/planets/" + data3.uid)
                    }} >Learn More!</button>

                    <button className={`border border-warning m-1 fa-heart heart ${actions.boton(data3.properties.name) ? "fa-solid" : "fa-regular"}`}
                    onClick={() => { actions.agregado(data3.properties.name) }}
                    >  </button>
                    {/* <button className={`border border-warning m-1 fa-heart  heart ${actions.boton(data.properties.name) ? "fa-solid" : "fa-regular"}`}
            onClick={() => { actions.agregado(data.properties.name) }}
          >
          </button> */}
                </div>
            </div>
        </div>
    )
}

export default Card2;
