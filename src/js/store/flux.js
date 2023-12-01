const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			Planets: [],
			DetallesP: [],
			Characters: [],
			Detalles: [],
			listado: [],
			contador: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {

				try {

					const url = "https://swapi.tech/api"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}

					}
					const respond = await fetch(url + "/people/", options);
					console.log(respond)

					const body = await respond.json();
					//console.log(body);

					for (let valor of body.results) {

						getActions().getDetalles(valor.uid)

					}
					setStore({ Characters: body.results })

				} catch (error) {
					console.log(error);

				}

			},
			getDetalles: async (id) => {

				try {

					const url = "https://swapi.tech/api"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}

					}
					const respond = await fetch(url + "/people/" + id, options);
					console.log(respond)

					const body = await respond.json();
					console.log("funcion getDetalle", body);

					setStore({ Detalles: [...getStore().Detalles, body.result] })

				} catch (error) {
					console.log(error);

				}

			},

			getDetallado: (id) => {
				let store = getStore()
				let a = store.Detalles.filter(item => item.uid == id)[0]
				return a ? a : {}

			},




			getPlanets: async () => {

				try {

					const url = "https://swapi.tech/api"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}

					}
					const respond = await fetch(url + "/planets/", options);
					console.log(respond)

					const body = await respond.json();
					//console.log(body);

					for (let valor of body.results) {

						getActions().getDetallesP(valor.uid)

					}
					setStore({ Planets: body.results })

				} catch (error) {
					console.log(error);

				}

			},
			getDetallesP: async (id) => {

				try {

					const url = "https://swapi.tech/api"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}

					}
					const respond = await fetch(url + "/planets/" + id, options);
					//console.log(respond)

					const body = await respond.json();
					console.log("funcion getDetalle2", body);

					setStore({ DetallesP: [...getStore().DetallesP, body.result] })

				} catch (error) {
					console.log(error);

				}

			},

			getDetalladoP: (id) => {
				let store = getStore()
				let a2 = store.DetallesP.filter(item => item.uid == id)[0]
				return a2 ? a2 : {}

			},

			agregado: (nombre) => {

				

				if (getStore().listado.includes(nombre) == false) {
					setStore({ listado: [...getStore().listado, nombre] })
					getStore().contador++
				}

			},
			eliminado: (nombre) => {

				setStore({ listado: getStore().listado.filter((item) => item != nombre) })
				getStore().contador--
			},

			boton: (nombre) => {

				return getStore().listado.includes(nombre)



			}
		}
	};
};

export default getState;
