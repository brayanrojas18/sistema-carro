<template>
	<q-page class="flex flex-center" >

		<div class="bg-blue-7 q-py-xs q-px-lg " style="border-radius: 30px">
			<h1 class="text-white q-display-3 text-weight-bolder">Bienvenido(a): 
				<span class="capitalize">
				{{nombre}} {{apellido}}
				</span> 
			</h1>
		</div>

	</q-page>
</template>

<script type="text/javascript">

	import {mapState, mapMutations} from 'vuex';

	
	export default{
		data(){
			return{ 
				nombre:null,
				apellido:null,
			}
		},
		created(){

				const doc = db.collection("users").doc(this.email);

				doc.get().then((querySnapshot) => {
			    console.log(querySnapshot.data().nombre);
			    console.log(querySnapshot.data().apellido);
			    this.nombre = querySnapshot.data().nombre
			    this.apellido = querySnapshot.data().apellido

			});

			console.log(this.email);
		},
		methods:{
			 ...mapMutations ('example',['someMutation']),

		},
		 computed:mapState ('example',['email']),
		
		
	}
</script>