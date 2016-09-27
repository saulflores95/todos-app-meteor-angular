import angular from 'angular';
import angularMeteor from 'angular-meteor';
import soyMelomano from '../imports/components/soyMelomano/soyMelomano';
import '../imports/startup/accounts-config.js';


angular.module('soy-melomano', [
  angularMeteor,
  soyMelomano.name,
  'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['soy-melomano']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
