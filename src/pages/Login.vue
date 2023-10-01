<template>
  <q-page class="flex flex-center"
   style="background-image: url('../statics/login.png');">
    
    <div style="width: 30%">
    
    		<q-icon class="row items-center justify-center"
    		 style="margin-top: 40px" 
    		 size="180px" 
    		 color="white" 
    		 name="account_circle"></q-icon>

	    	<div  style="margin: 10px" >

          <q-field icon="fas fa-user" icon-color="white" >
            <q-input v-model="email" type="email" color="white" dark 
            float-label="username"  />
          </q-field>
	    		
          <q-field icon="fas fa-lock" icon-color="white" > 
            <q-input v-model="password" type="password" color="white" dark 
            float-label="password" />
          </q-field>

	    	<div style="padding: 8px" class="row items-center justify-center">
	    		<q-btn  @click="Login" class="text-blue " color="white">Login</q-btn>
	   		</div>

          <router-link to="/registro" style="color: white">
            Registrarse
          </router-link>
	    	</div>

    </div>
   
    
  </q-page>
</template>

<style>

</style>

<script> 

 import {mapState, mapMutations} from 'vuex';
  
export default {
  name: 'PageLogin',
 	data(){
 		return{
 			username:null,
 			password:null,
      email:null,
 		}
 	},
  methods:{
    Login(){

        const pass = this.password
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(this.email, pass);
        promise.catch(e => this.$q.notify({

          message:' ERROR, esta cuenta no existe :(, o verifica tu conexion',
          type:'negative', color:'negative', position: 'top-right',
          
        }));
        promise.then(() => { 
          this.someMutation(this.email)
          this.$router.push('/principal')
        });
    },
    ...mapMutations('example',['someMutation']),
  },
}


</script>
