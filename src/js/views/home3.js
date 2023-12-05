import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import  { Card4 } from "../component/card4.js";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Home3 = (props) => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    const [data, setData] = useState()

    let getdato = async () => {

        let valor = actions.getDetalladoP(params.userId)


        if (valor["uid"]) {
            setData(valor)
            return
        }
        await actions.getDetallesP(params.userId)
        valor = actions.getDetalladoP(params.userId)
        setData(valor)
        console.log(valor)


    }
    useEffect(() => {
        getdato()
    }, [params.userId])

    return (
        <div>

            <div className="d-flex m-1">
                <Card4 data2={data ? data : {}} data={data ? data.properties : {}} />

            </div>
        </div>
    )
}
