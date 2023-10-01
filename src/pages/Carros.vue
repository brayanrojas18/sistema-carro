<template>
	<q-page >
		<h4 class="capitalize text-blue text-weight-bolder text-center">Inicio</h4>
		<div class="row gutter-md q-pa-sm ">
			<div class="col-md-4 col-xs-12" v-for="(carro, i) in carros" :key="`${i}-${carro.id}`">
				<div @click="selectCarro(carro.id)">
					<q-card class="q-ma-xs">
					<q-card-media>
						<img :src="carro.url">
					</q-card-media>
					<q-card-title class="capitalize bg-black text-white text-weight-bolder">
						{{carro.marca}} {{carro.modelo}}	
					</q-card-title>
				</q-card>
				</div>
			</div>
		</div>

	</q-page>
</template>

<script type="text/javascript">

	import {mapState, mapMutations} from 'vuex';

	export default {

		data(){
			return{
			
					id:null
				
			}
		},
		created (){

		this.listaCarros(this.carros)

		 },
		methods:{

			selectCarro(id){

				this.$router.push({ name: 'carritos', params: { id: id } })

			},
			...mapMutations ('example',['listaCarros']),
		},

		computed:mapState ('example',['carros']),
		
	}

</script>

<style type="text/css">
	#galeria{
		width: 99%;
		padding: 10px;
		margin: auto;
		
	}

	#galeria img{
		width: 100%;
		height: 100%;
	}
</style>