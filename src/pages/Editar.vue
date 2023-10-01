<template>
	<q-page>
		<div class="row gutter-md q-pa-xs justify-center ">
					<div class="col-md-6 col-xs-12">
					<q-card class="q-ma-sm bg-green" >
					<q-card-main >
						<div>
							<q-list class="q-pa-sm" >
								<q-item >
									<q-item-main class="capitalize ">
										<q-item-tile color=" text-weight-bolder" sublabel>
											Marca:
										</q-item-tile>
										
										<q-input v-model="marca" type="text" color="white" captalize />
										
										<q-item-tile color=" text-weight-bolder" sublabel>
											Modelo:
										</q-item-tile>

										<q-input v-model="modelo" type="text" color="white" captalize/>

										<q-item-tile color=" text-weight-bolder" sublabel>
											Año:
										</q-item-tile>
										
										<q-input v-model="año" type="text" color="white" captalize/>

										<q-item-tile color=" text-weight-bolder" sublabel>
											Ubicacion:
										</q-item-tile>
										
										<q-input v-model="ubicacion" type="text" color="white" captalize/>

										<q-item-tile color=" text-weight-bolder" sublabel>
											Contacto:
										</q-item-tile>
										
										<q-input v-model="contacto" type="text" color="white" captalize/>

										<q-item-tile color=" text-weight-bolder" sublabel>
											Precio:
										</q-item-tile>
										
										<q-input v-model="precio" type="text" color="white" captalize/>
									</q-item-main>
								</q-item>
							</q-list>
						</div>
					</q-card-main>
					<div class="row justify-center">
						<q-btn @click="guardarCambios" color="orange-10" label="Guardar Cambios" 
						class="text-white"/>
					</div>
				</q-card>
			</div>			
		</div>
	</q-page>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				
				id:null,

				marca:null,
				modelo:null,
				año:null,
				contacto:null,
				precio:null,
				ubicacion:null,
				foto:null,

				// modal:null,
				// key:null,
			}
		},
		created(){

			this.id = this.$route.params.id
			const doc = db.collection("carros").doc(this.id);

				doc.get().then((querySnapshot) => {
			    console.log(querySnapshot.data());	

			    this.marca = querySnapshot.data().marca
			    this.modelo = querySnapshot.data().modelo
			    this.año = querySnapshot.data().año
			    this.ubicacion = querySnapshot.data().ubicacion
			    this.contacto = querySnapshot.data().contacto
			    this.precio = querySnapshot.data().precio
			    this.foto = querySnapshot.data().url		    


			});
		
		},
		methods:{
			guardarCambios(){
				var washingtonRef = db.collection("carros").doc(this.id);

				return washingtonRef.update({
				    marca:this.marca,
					modelo:this.modelo,
					año:this.año,
					contacto:this.contacto,
					precio:this.precio,
					ubicacion:this.ubicacion,
				})
				.then(() => {
					this.$q.notify({
				       	message:'actualizado',
				       	type:'positive',
				      	position:'top'
				    });
				   this.$router.push('/carros')
				    console.log("cambiado");
				})
				.catch((error) => {
				    // The document probably doesn't exist.
				    console.error("Error: ", error);
				});

			}
		},
	}
</script>