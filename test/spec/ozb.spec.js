/* globals testUtils */
describe('Directive: ozb', function () {
  'use strict';

  var scope, element, $compile;

  testUtils().testSetup({
    'moduleName': 'ozbm',
    'translations': {
      'ozb': {
        'name': {
          'first': 'Luke'
        }
      }
    }
  });

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope;
    $compile = _$compile_;

    element = angular.element('<div ozb name="myName"></div>');
    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function() {
    element.remove();
    scope.$destroy();
  });

  it('should correctly display hello world', function () {
    scope.myName = 'Luke Skywalker';
    scope.$digest();

    expect(element.text().trim()).toBe('Hello Luke Skywalker');
  });
});
