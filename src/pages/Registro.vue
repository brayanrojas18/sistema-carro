<template>
	<q-page class="flex flex-center" style="background-image: url(./statics/login.png);">


			<div  style="width: 55%;">

				<h1 style="margin-bottom: 2px; margin-left: 30px " 
					class="text-white text-weight-bolder ">
					Registrate
				</h1>
			
				<div class="round-borders" style="padding: 10px; " >

					<q-field icon="fas fa-user" icon-color="white" >
						<q-input v-model="nombre"  type="text" value="nombre" float-label="Nombre" color="white" dark  class="capitalize"/>
					</q-field>
					<q-field icon="fas fa-user" icon-color="white">
						<q-input v-model="apellido" type="text" value="apellido" 
						float-label="Apellido" color="white" dark class="capitalize"/>
					</q-field>
					<q-field icon="fas fa-envelope" icon-color="white">
						<q-input v-model="email" type="email" value="email" 
						float-label="Email-@" color="white" dark class="capitalize" />
					</q-field>
					<q-field icon="fas fa-lock" icon-color="white">
						<q-input v-model="password" type="password" value="contraseña"
						float-label="contraseña"color="white" dark  />
					</q-field>

					<div style="padding: 8px" class=" column fit relative-position">
	    				<q-btn @click="Registrar"
	    					class="text-blue text-weight-bolder" color="white">
	    					Registrate
	    				</q-btn>
	   				</div>


				</div>

			</div>
	</q-page>
</template>

<script type="text/javascript">
	 import { required, email } from 'vuelidate/lib/validators';

	export default {
		data(){
			return{
				nombre:null,
				apellido:null,
				email:null,
				password:null,
			}
			
		},
		methods:{
			Registrar(){

				 const nombre = this.nombre;
				 const apellido = this.apellido;
				 const email = this.email;
				 const pass = this.password;
				 const auth = firebase.auth();

				 const promise = auth.createUserWithEmailAndPassword(email, pass);
				 promise.catch(e => 
				 	this.$q.notify({
				 	message:'Algo salio mal, verifica cada campo nuevamente',
				 	type:'negative', position:'top-right',
				 }));
		       	 promise.then(() =>   {
		       	 	db.collection("users").doc(email).set({

				    nombre: this.nombre,
				    apellido: this.apellido,
				    email: this.email,

				}),this.$router.push('login'),
			       	  this.$q.notify({
			       	  	message:'Ya estas registrado',
			       	  	type:'positive',
			       	  	position:'top-right',
			       	  })});
			       	 

			}
		},
				
	}
</script>
