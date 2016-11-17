import Home from './views/home';
import Doc from './views/doc';
import About from './views/about';

import alertView from './previews/alert.view';
import switchView from './previews/switch.view';

export default {
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/doc',
      component: Doc,
      children: [
        {
          path: 'alert',
          component: alertView,
        },
        {
          path: 'switch',
          component: switchView,
        },
      ],
    },
    { path: '/about', component: About },
    { path: '*', redirect: '/' },
  ],
};
