<template>
	<q-page>
		<h3 class=" text-blue text-center capitalize text-weight-bolder">tus publicaciones</h3>
		<div class="row gutter-md q-pa-xs ">
			<div class="col-md-4 col-xs-12" v-for="(carro, i) in carros" :key="`${i}-${carro.id}`">
				<div>
					<q-card class="q-ma-xs">
					<q-card-media>
						<img :src="carro.url">
					</q-card-media>
					<q-card-title class="capitalize bg-black text-white text-weight-bolder">
						{{carro.marca}} {{carro.modelo}}	
					</q-card-title>
					</q-card>
					<div class="row justify-center">
						<q-btn @click="eliminarPublicacion(carro.id)" color="red" 
							class="text-white q-mr-lg">Eliminar</q-btn>

						<q-btn @click="editarPublicacion(carro.id)" color="blue" 
							class="text-white q-ml-lg">Editar</q-btn>
					</div>
				</div>
			</div>
		</div>



	</q-page>
</template>

<script type="text/javascript">
	import {mapMutations, mapState} from 'vuex';
	export default {
		data(){
			return{
				carros:[],
				doc:null
			}
		},
		created(){

		 db.collection("carros").where("contacto", "==", this.email).get()
		 .then((querySnapshot) => {
		 	this.carros = querySnapshot.docs.map(doc  => ({

		 		...doc.data(),
		 		id: doc.id

		 	}));
		 }); 

		},
		methods:{
			eliminarPublicacion(id){

				db.collection("carros").doc(id).delete()
				.then(() => {

					this.$q.notify({
				       	message:'Publicacion eliminada',
				       	type:'positive',
				      	position:'top'
				    });
				    console.log('publicacion eliminada')
				    this.$router.push('carros')

				}).catch((error) => {
   				 	this.$q.notify({
				       	message:'No se puede eliminar est Publicacion',
				       	type:'negative',
				       	position:'top',
				    });
				});
			},
			editarPublicacion(id){
				this.$router.push({ name: 'editar', params: { id: id } })
			}
		},
		computed:mapState ('example',['email']),
	}
</script>