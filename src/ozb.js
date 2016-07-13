angular.module('ozbm', ['templates-ozb', 'pascalprecht.translate' ])
.config(function($translateProvider) {
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
    })
  .directive('ozb', function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };

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
  });
