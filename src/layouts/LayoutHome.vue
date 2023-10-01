<template>
	<q-layout>
	<q-layout-header>
		<q-toolbar 
		color="blue"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'">

        <q-toolbar-title>
        	TodoCarro.com  	
        </q-toolbar-title>

       <div class="row justify-center">
            <q-btn @click="search" class="q-pa-m" color="red-5" icon="search" />
            
            <q-search  type="text" clearable  color="white" :count="20" inverted-light  
                v-model="buscar" placeholder="Buscar Auto" no-icon/>
           
       </div>
        

        <q-toolbar-title class=" row justify-end q-pa-sm">
        	
        			<router-link class="text-white q-ma-md"
        			 style="text-decoration: none;"  to="/carros">
        				Inicio
        			</router-link>
        			<router-link class="text-white q-ma-md"
        			style="text-decoration: none;" to="/clientes">
        				Cliente
        			</router-link>
                    <router-link class="text-white q-ma-md"
                    style="text-decoration: none;" to="/crearCarro">
                        Publicar
                    </router-link>

        </q-toolbar-title>

         <q-btn-dropdown round icon="fas fa-bars" alaing="center" >
            <q-list>
                <q-item link>
                  <q-item-main @click.native="logout" label="Cerrar Secion">
                  </q-item-main>
                </q-item>
            </q-list>
         </q-btn-dropdown>

		</q-toolbar>	
	</q-layout-header>

	<q-page-container>
		<router-view />
	</q-page-container>
</q-layout>
</template>

<script type="text/javascript">
    import {mapState, mapMutations, mapGetters} from 'vuex';

    export default {
        data(){
            return{

                buscar:null,
            }
        },
        created(){
        },
        methods:{
            logout(){
                const auth = firebase.auth();

                auth.signOut().then( () => {

                    this.$router.push('/login')
                    this.$q.notify({
                        message:'Cerrando secion...',
                        type:'positive',
                        position:'top-right',
                      });

                }).catch(e => {

                    alert(':(')
                });
            },
            search(){
                this.buscarAuto(this.buscar)
                this.$router.push("/resultadoBusqueda")
            },
            ...mapMutations('example',['buscarAuto']),
        },
    }
</script>