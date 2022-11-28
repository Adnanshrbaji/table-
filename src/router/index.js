import { createRouter, createWebHistory } from 'vue-router'
import signin from '@/views/signin.vue'
import signup from '@/views/signup.vue'
import table from '@/views/table.vue'
import tableClientDetails from '../components/clientTableDetails'
import tablecompany from '../components/clientTableDetails'


import tableshipment from '../components/Tableclientshipment'







const routes = [{
        path: '/',
        name: 'signin',
        component: signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup

    },
    {
        path: '/table',
        name: 'table',
        component: table

    }
    ,
    {
        path: '/clientTable',
        name: 'clientTable',
        component: tableClientDetails

    }
    ,
    {
        path: '/tablecompany',
        name: 'tablecompany',
        component: tablecompany

    }
    ,
    {
        path: '/clieniShipment',
        name: 'clieniShipment',
        component: tableshipment

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router