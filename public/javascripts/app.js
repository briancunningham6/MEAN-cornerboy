window.app = angular.module('cornerboy', ['ui.bootstrap','controllers','services']);

// bundling dependencies
//window.angular.module('cornerboy.services', ['cornerboy.services.global']);
window.angular.module('controllers', ['cornerboy.controllers.header']);
window.angular.module('services', ['services.global']);