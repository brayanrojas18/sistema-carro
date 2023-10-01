
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
       { path: 'registro', component: () => import('pages/Registro.vue') },
      
    ]
  },
   { path: '/home', component: () => import('layouts/layoutHome.vue'),
       children:[
        { path: '/principal', component: () => import('pages/Principal.vue') },
        { path: '/carros', component: () => import('pages/Carros.vue') },
        { path: '/carritos/:id', name:'carritos', component: () => import('pages/Carritos.vue') },
        { path: '/editar/:id', name:'editar', component: () => import('pages/Editar.vue') },
        { path: '/clientes', component: () => import('pages/Clientes.vue') },
        { path: '/crearCarro', component: () => import('pages/CrearCarro.vue') },
        { path: '/resultadoBusqueda', component: () => import('pages/ResultadoBusqueda.vue') },
       ]
     },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
