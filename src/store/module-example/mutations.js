
export function someMutation (state, email) {

	 state.email = email
};
export function buscarAuto (state, buscar) {

	 state.buscar = buscar
};
export function listaCarros (state, carros) {
 
		 db.collection("carros").get().then((querySnapshot) => {

			state.carros = querySnapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}))

		});
};


