(function () {
    "use strict";

    // define module
    var module = angular.module('ui.treeDropdown', ['ui.bootstrap']);

    module.directive('uibTreeDropdown', function () {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                selected: '='
            },
            templateUrl: 'angular-uib-tree-dropdown.html',
            controllerAs: 'vm',
            bindToController: true,
            controller: 'UibTreeDropdownController'
        };
    });

    module.controller('UibTreeDropdownController', ["$scope", function ($scope) {
        var vm = this;

        vm.levelsById = {};

        vm.flatData = [];

        vm.childClick = function (obj) {
            if (obj) {
                vm.selected = obj;
            } else {
                vm.selected = null;
            }
        };

        function processData (data, level) {
            angular.forEach(data, function (obj) {
                vm.flatData.push(obj);
                // store levels by id
                vm.levelsById[obj.id] = level;

                if (obj.children) {
                    processData(obj.children, level + 1);
                }
            });
        }

        /**
         * Watch vm.data and process it every time it changes
         */
        $scope.$watch("vm.data", function () {
            vm.levelsById = {};
            vm.flatData = [];
            processData(vm.data, 0);
        });
    }]);

    module.run(["$templateCache", function ($templateCache) {
        // put template into templateCache
        $templateCache.put('angular-uib-tree-dropdown.html', '<div uib-dropdown keyboard-nav>' +
            '    <!-- selected element -->' +
            '    <button class="btn btn-default" role="button" uib-dropdown-toggle>' +
            '        {{ vm.selected.name }}' +
            '        <span class="caret"></span>' +
            '    </button>' +
            '' +
            '    <!-- Dropdown -->' +
            '    <ul class="dropdown-menu dropdown-tree" uib-dropdown-menu role="menu">' +
            '        <li role="menuitem" ng-repeat="obj in vm.flatData">' +
            '            <a tabindex="0" href="#" class="level-{{ vm.levelsById[obj.id] }}"' +
            '               ng-class="{\'selected\': vm.selected.id == obj.id}" ng-click="vm.childClick(obj)">{{ obj.name }}</a>' +
            '        </li>' +
            '    </ul>' +
            '</div>');
    }]);
})();