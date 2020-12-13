import vueRouter from 'vue-router'
import Clientes from './components/Clientes'
import Productos from './components/Productos'
import Reporte from './components/Reporte'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            // {
            //     path: '/',
            //     name: "root",
            //     component: App
            // },
            {
                path: '/clientes',
                name: "clientes",
                component: Clientes
            },
            {
                path: '/productos',
                name: "productos",
                component: Productos
            },
            {
                path: '/reporte',
                name: "reporte",
                component: Reporte
            }
        ]
    })

export default router

