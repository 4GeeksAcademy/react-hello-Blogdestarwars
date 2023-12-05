
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar navbar-dark mb-3 px-5">
			<Link className="navbar-brand" to="/">

				<p className=" m-1">
					<img src={logo} style={{ height: "100px", width: "100px" }} />
				</p>

			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn dropdown-toggle d-flex  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <div className="bg-danger px-1 mx-1 rounded d-flex justify-content-center">{store.contador}</div>
					</button>

					<ul className="dropdown-menu">


						{store.listado.length == 0 ? (

							<li>
								Empty Favorites !

							</li>) : (

							store.listado.map((item, index) => {

								return (

									<li key={index} ><a className="dropdown-item " href="#">
										{item}
										<span className="fa fa-trash fa-fw text-dark " onClick={() => actions.eliminado(item)} ></span>


									</a> </li>
								)
							})
						)}


					</ul>

				</div>

			</div>
		</nav>
	);
};
