// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
const Vote = () =>  import('../views/Vote.vue');
const HomeView = () =>  import('../views/Home.vue');
const ApplicationView = () => import ('../views/Application.vue');
const TimeTable = () => import ('../views/TimeTable.vue');
const MyPoint = () => import ('../views/MyPoint.vue');
const RegisterPoint = () => import ('../views/RegisterPoint.vue');

//라우트(routes) 정의 : URL 요청에 대해 어떤 페이지(컴포넌트)를 보여줄지에 대한 매핑정보를 정의
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/application',
    name: 'application',
    component: ApplicationView,
  },
  {
    path: '/timetable',
    name: 'timetable',
    component: TimeTable,
  },
  {
    path: '/mypoint',
    name: 'mypoint',
    component: MyPoint,
  },
  {
    path: '/registerpoint',
    name: 'registerpoint',
    component: RegisterPoint,
  },
  {
    path:'/vote',
    component:Vote
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  },
  
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;