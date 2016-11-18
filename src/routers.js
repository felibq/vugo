import Home from './views/home';
import Doc from './views/doc';
import About from './views/about';

// base
import layoutView from './previews/layout';
import fontView from './previews/font';
import iconView from './previews/icon';
import colorView from './previews/color';
import buttonView from './previews/button';

// view
import alertView from './previews/alert';

// form
import switchView from './previews/switch';
import selectView from './previews/select';
import checkboxView from './previews/checkbox';

export default {
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/doc',
      component: Doc,
      children: [
        {
          path: 'layout',
          component: layoutView,
        },
        {
          path: 'font',
          component: fontView,
        },
        {
          path: 'icon',
          component: iconView,
        },
        {
          path: 'color',
          component: colorView,
        },
        {
          path: 'button',
          component: buttonView,
        },
        {
          path: 'alert',
          component: alertView,
        },
        {
          path: 'switch',
          component: switchView,
        },
        {
          path: 'select',
          component: selectView,
        },
        {
          path: 'checkbox',
          component: checkboxView,
        },
      ],
    },
    { path: '/about', component: About },
    { path: '*', redirect: '/' },
  ],
};
