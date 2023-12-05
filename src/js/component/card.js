
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Card = ({ data })  => {
  let isfavarite = false
  const navigate = useNavigate()
  const { store, actions } = useContext(Context)
  return (
    <div className="card card-style my-4" style={{ minWidth: "15rem" }}>
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${data.uid}.jpg`} className="card-img-top" alt="..."></img>
      </div>
      <div className="card-body">
        <h5 className="card-title  m-1 ">{data.properties.name}</h5>
        <p className="card-text  m-1 ">Gender: {data.properties.gender} </p>
        <p className="card-text m-1 ">Hair Color: {data.properties.hair_color}</p>
        <p className="card-text  m-1">Eye Color: {data.properties.eye_color}</p>
        <div className="d-flex justify-content-between m-1 ">
          <button className="btn  lernmore" onClick={() => {

            navigate("/character/" + data.uid)
          }} >Learn More!</button>

          <button className={` m-1 p-2  fa-heart heart ${actions.boton(data.properties.name) ? "fa-solid" : "fa-regular"}`}
            onClick={() => { actions.agregado(data.properties.name) }}
          >
          </button>
        </div>
      </div>
    </div >
  );
};
