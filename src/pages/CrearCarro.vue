<template>
	<q-page class=" flex flex-center">

		<div style="width: 50%">

				<h2 style="margin-bottom: 2px; margin-top: 10px; margin-left: 70px; " 
					class="text-blue text-weight-bolder ">
					Publica tu auto
				</h2>
			

					<q-field class="round-borders q-pa-sm " >

						<q-input v-model="marca" type="text" float-label="Marca" 
							color="blue" captalize/>

						<q-input v-model="modelo" type="text" float-label="Modelo" 
							color="blue" captalize />
					
						<q-input v-model="año" type="number" float-label="Año" 
							color="blue"/>

						<q-input v-model="ubicacion" type="text" float-label="Ubicacion" 
							color="blue"/>
					
						<q-input v-model="contacto" type="email" 
							float-label="Email para Contacto" 	color="blue" />

						<q-input v-model="precio" type="text" float-label="Precio"
							color="blue"  suffix="$"/>

						<q-uploader url="" float-label="añadir fotos" multiple
							 @add="escogerArchivo" />
							
					</q-field>

					<div style="padding: 8px" class=" column fit relative-position">

	    				<q-btn @click="CrearCarro"
	    					class="text-white text-weight-bolder" color="blue-8">
	    					Publicar
	    				</q-btn>

	   				</div>
		</div>
	</q-page>
</template>

<script type="text/javascript">

	import {mapState, mapMutations} from 'vuex';

	export default{
		data(){
			return{

				 marca:null,
				 modelo:null,
				 año:null,
				 contacto:null,
				 precio:null,
				 ubicacion:null,

				 file:null,
				 picture:null,
				 refImg:null,
			}
			
		},
		methods:{
			escogerArchivo(event){
				
				this.file = event[0]

			},
			CrearCarro(){

					db.collection("carros").add({

				   		 marca:this.marca,
				   		 modelo:this.modelo,
						 año:this.año,
						 contacto:this.contacto,
						 precio:this.precio,
						 ubicacion:this.ubicacion,
						 url:this.picture


					})

					.then((doc) => {

						this.refImg = doc.id

				       	this.$q.notify({
				       		message:'Publicando...',
				       		type:'positive',
				       		position:'top',
				       		color:'blue'
				       	});

				       	const storageRef = storage.ref(`/carros/${this.refImg}`);
						const imagesRef = storageRef.child(`fotos.jpg`)
							
						var imgRef = imagesRef.put(this.file).then((snapshot) => { 

							storage.ref().child(`carros/${this.refImg}/fotos.jpg`).getDownloadURL()
							.then((url) => { 

								this.picture = url  
								console.log(this.picture);

								var newCityRef = db.collection("carros").doc(this.refImg).set({

									marca:this.marca,
									modelo:this.modelo,
									año:this.año,
									contacto:this.contacto,
									precio:this.precio,
									ubicacion:this.ubicacion,
									url:this.picture

									}).then(() => {

										this.$router.push('carros'),
										this.$q.notify({

										message:'Publicado exitosamenete :)',
										type:'positive',
										position:'top',
										color:'blue'
										});
									});

							});
							
						});
			
					})
					.catch(e => {
					console.error('no creado');
				});
			}
		},
	}
</script>

