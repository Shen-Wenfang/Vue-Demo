import home from './components/home.vue'
import homedetail from './components/homedetail.vue'
import bbs from './components/bbs.vue'
import recruit from './components/recruit.vue'
import jobs from './components/jobs.vue'
import company from './components/company.vue'
import news from './components/news.vue'
import newsdetail from './components/newsdetail.vue'
import bbsdetail from './components/bbsdetail.vue'
import login from './components/login.vue'
import reg from './components/reg.vue'
import error from './components/error.vue'
import slider from './components/slider.vue'
import collect from './components/collect.vue'

let routes=[
    {path:'/home',component:home},
    {path:'/homedetail/:id',component:homedetail},
    {path:'/bbs',component:bbs},
    {path:'/bbsdetail/:id',component:bbsdetail},
    {path:'/recruit',component:recruit},
    {path:'/jobs',component:jobs},
    {path:'/company',component:company},
    {path:'/news',component:news},
    {path:'/newsdetail/:id',component:newsdetail},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/slider',component:slider},
    {path:'/collect',component:collect},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
];

export default {
    routes:routes,
    mode:'history'
}