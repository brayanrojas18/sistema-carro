<template>
	<q-page>
		<q-btn to="/carros" color="green" class="q-pa-sm q-ma-sm">Volver</q-btn>
		<div class="row gutter-md q-pa-xs justify-center ">
			<div class="col-md-6 col-xs-12">
					<q-card class="q-ma-sm bg-red-8" >
					<q-card-title>
						<h3 class=" text-white text-center capitalize text-weight-bolder">
							{{modelo}}
						</h3>
					</q-card-title>
					<q-card-main >
						<div >
							<q-list class="q-pa-sm" >
								<q-item >
									<q-item-main class="capitalize ">
										<q-item-tile color=" text-weight-bolder" sublabel>
											Marca:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{marca}}
										</q-item-tile>
										<q-item-tile color=" text-weight-bolder" sublabel>
											Modelo:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{modelo}}
										</q-item-tile>
										<q-item-tile color=" text-weight-bolder" sublabel>
											Año:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{año}}
										</q-item-tile>
										<q-item-tile color=" text-weight-bolder" sublabel>
											Ubicacion:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{ubicacion}}
										</q-item-tile>
										<q-item-tile color=" text-weight-bolder" sublabel>
											Contacto:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{contacto}}
										</q-item-tile>
										<q-item-tile color=" text-weight-bolder" sublabel>
											Precio:
										</q-item-tile>
										<q-item-tile label class="text-white">
											{{precio}}
										</q-item-tile>
									</q-item-main>
								</q-item>
							</q-list>
						</div>
					</q-card-main>
					<q-card-media class="q-pa-sm">
						<div>
							<div class="justify-center items-center">
								<div class="row">
									<div ref="elegir" @click="abrir(key)"   >
										<img :src="foto" width="100%">
									</div>
								</div>
								<q-modal v-model="modal" maximized  >
									 <q-carousel ref="elegir" class=" bg-black full-height"  >
							 			<q-carousel-slide  class="row justify-center" >

							 				<img :src="foto" width="60%" >

							 				<div class="absolute-top-right" style="padding: 5px" >
							 					<q-btn round icon="close" size="10px"  text-color="white" 
							 					@click="modal=false"></q-btn>
							 				</div>

							 			</q-carousel-slide>
								 	</q-carousel>
								</q-modal>
							</div>
						</div>
					</q-card-media>
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
				modal:null,
				key:null,

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
				abrir(key){
				this.modal=true
				this.$refs.elegir.goToSlide(key)
				},
			}
			
	}
</script>