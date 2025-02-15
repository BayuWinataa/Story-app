import '../sass/index.scss';
import * as bootstrap from 'bootstrap';
import Dashboard from './ui/pages/dashboard';
import AddPage from './ui/pages/addpage';
import Page404 from './ui/pages/404page';
import dropdown from './ui/component/dropdown/dropdown';

const routes = {
  '/': Dashboard,
  '/add-page.html': AddPage,
  '/404.html': Page404,
};

const detectRoute = () => {
  const route = routes[window.location.pathname];
  return route ? route : Page404;
};

const initPages = () => {
  document.querySelector('header');
  document.querySelector('main');
  document.querySelector('footer');
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});