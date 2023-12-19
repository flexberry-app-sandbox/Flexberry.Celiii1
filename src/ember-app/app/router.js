import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-celiii-анкеты-l');
  this.route('i-i-s-celiii-анкеты-e',
  { path: 'i-i-s-celiii-анкеты-e/:id' });
  this.route('i-i-s-celiii-анкеты-e.new',
  { path: 'i-i-s-celiii-анкеты-e/new' });
  this.route('i-i-s-celiii-причин-увольн-l');
  this.route('i-i-s-celiii-причин-увольн-e',
  { path: 'i-i-s-celiii-причин-увольн-e/:id' });
  this.route('i-i-s-celiii-причин-увольн-e.new',
  { path: 'i-i-s-celiii-причин-увольн-e/new' });
  this.route('i-i-s-celiii-специалист-l');
  this.route('i-i-s-celiii-специалист-e',
  { path: 'i-i-s-celiii-специалист-e/:id' });
  this.route('i-i-s-celiii-специалист-e.new',
  { path: 'i-i-s-celiii-специалист-e/new' });
});

export default Router;
