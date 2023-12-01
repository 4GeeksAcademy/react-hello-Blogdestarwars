
import React from "react";



function Card3({ data, data2 }) {

    return (
        <div className="card mb-3 d-flex justify-content-center w-100" style={{ minWidth: "1000px" }}>
            <div className="row p-5">
                <div className="col-md-4 ">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${data2.uid}.jpg`} className="card-img-top" style={{ width: "300px", height: "400px" }} alt="..."></img>
                </div>
                <div className="col-md-8 text-center">
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. </p>

                    </div>
                </div>
            </div>
            <div className=" w-100 " style={{ borderTop: "2px solid red" }}>
                <div className="row mt-3 text-center d-flex justify-content-around m-0 p-0" style={{ fontSize: "20px" }}>
                    <div className="col-2">
                        <h5 className="text-danger "> Name</h5>
                        <p className="text-danger ">{data.name}</p>
                    </div >
                    <div className="col-md-2">
                        <h5 className="text-danger ">birth Year</h5>
                        <p className="text-danger ">{data.birth_year}</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-danger ">Gender</h5>
                        <p className="text-danger ">{data.gender}</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-danger ">Height</h5>
                        <p className="text-danger ">{data.height}</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-danger ">Skin Color</h5>
                        <p className="text-danger ">{data.skin_color}</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-danger ">Eye Color</h5>
                        <p className="text-danger ">{data.eye_color}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3;
