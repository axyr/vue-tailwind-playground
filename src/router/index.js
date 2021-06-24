import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Foo from '../components/Foo.vue';
import Bar from '../components/Bar.vue';
import User from '../components/User.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/foo',
    component: Foo,
    name: 'foo',
  },
  {
    path: '/bar',
    component: Bar,
    name: 'bar',
  },
  {
    path: '/users/:id',
    component: User,
    name: 'users.show',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
