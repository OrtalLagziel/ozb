angular.module('templates-ozb', ['ozb.html']);

angular.module("ozb.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ozb.html",
    "<span>Hello {{name}}</span>\n" +
    "<span>Hello OZ bluemenfeld you will do the dishas for aweek from now, love u Your wife Ortal Lagziel</span>\n" +
    "");
}]);
