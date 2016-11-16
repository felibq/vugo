import Home from './views/home';
import Doc from './views/doc';
import About from './views/about';

export default {
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc },
    { path: '/about', component: About },
    { path: '*', redirect: '/' },
  ],
};
