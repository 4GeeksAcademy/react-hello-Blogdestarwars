import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import  { Card } from "../component/card.js"
import  { Card2 } from "../component/card2.js"

export const Home = (props) => {

	const { store, actions } = useContext(Context)



	return (
		<div >
			<h1 className="text">Characters</h1>
			<div className="d-flex  flex-row flex-nowrap overflow-auto m-1 gap-3 barra" >
				{
					store.Detalles.map((Character, index) => (

						<Card data={Character} key={index} />
					))
				}

			</div>
			<h1 className="text">Planets</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto m-1 gap-3 barra2">

				{
					store.DetallesP.map((Planets, index) => (

						<Card2 data3={Planets} key={index} />
					))
				}


			</div>
		</div>
	);
};
