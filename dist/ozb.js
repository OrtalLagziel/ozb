/**
 * ozb
 * @version v0.0.1 - 2016-07-13
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('templates-ozb', ['ozb.html']);

angular.module("ozb.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ozb.html",
    "<span>Hello {{name}}</span>\n" +
    "<span>Hello OZ bluemenfeld you will do the dishas for aweek from now, love u Your wife Ortal Lagziel</span>\n" +
    "");
}]);

angular.module('ozbm', ['templates-ozb', 'pascalprecht.translate' ])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

    $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'ozb': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();
    }])
  .directive('ozb', ["$translate", function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };
    controller.$inject = ["$scope", "$element"];

    return {
      restrict: 'EAC',
      scope: {
        name: '<'
      },
      templateUrl: 'ozb.html',
      controller: controller,

      link: function(scope, element, attr, ctrl) {
      }
    };
  }]);
