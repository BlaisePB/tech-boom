import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('tech-moving');
  this.route('tech-in-stl');
  this.route('tech-origins');
  this.route('sources');
});

export default Router;
