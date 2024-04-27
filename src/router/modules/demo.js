export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('@/views/Landing.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
];
