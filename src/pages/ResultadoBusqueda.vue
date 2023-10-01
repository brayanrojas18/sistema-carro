<template>
	<q-page>
		<h4 class="text-weight-bolder text-center capitalize text-blue">
			Resultado de tu busqueda
		</h4>
		<div class="row gutter-md q-pa-xs ">
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

	import {mapState, mapMutations, mapGetters} from 'vuex';

	export default{
		data(){
			return{

				carros:[]
			}
		},
		created(){
			var citiesRef = db.collection("carros");

                var query = citiesRef.where("modelo", "==", this.buscar ).get()
                .then((querySnapshot) => {
                this.carros = querySnapshot.docs.map(doc  => ({

                    ...doc.data(),
                    id: doc.id

                }));
            }); 
		},
		methods:{
			selectCarro(id){
				this.$router.push({ name: 'carritos', params: { id: id } })
			},
			...mapMutations('example',['buscarAuto']),
		},
		computed:mapState ('example',['buscar']),
	}
</script>