# Angular UIB Tree Dropdown

This is a fork of [angular-tree-dropdown](https://github.com/shri-bhat/angular-tree-dropdown) by [shri-bhat](https://github.com/shri-bhat).
Original work was executed by him.

This repo contains a cleaned-up version, which also requires angular-uib to work.

## Installation

Copy the script and css from the [dist/](dist/) folder into your project and add a script and link tag to your page.

```html
<script src="angular-uib-tree-dropdown/dist/angular-uib-tree-dropdown.min.js"></script>
<link rel="stylesheet" href="angular-uib-tree-dropdown/dist/angular-uib-tree-dropdown.min.css" />
```

Add a dependency to your application module.

```javascript
angular.module('App', ['ui.treeDropdown']);
```

Add a tree-dropdown to your application. See [Usage](#usage).

## Usage

Attributes of the directive ``uib-tree-dropdown`` are as follows:

- uib-tree-dropdown: the tree dropdown directive.
- data : the tree model on $scope.
- selected : selected item.

Here is an example:
```html
<uib-tree-dropdown class="tree-dropdown" data="treeData" selected="selected"></uib-tree-dropdown>
```

Example model:

```javascript
$scope.treeData = 
[
  { "id": 1, "name": "Option 1", "children": [
    { "id": 2, "name": "Option 1.1", "children": [
      { "id": 3, "name": "Option 1.1.1"},
      { "id": 4, "name": "Option 1.1.2"}
    ]}
  ]},
  { "id": 5, "name": "Option 2" },
  { "id": 6, "name": "Option 2.1" }
];
```

## Selection

If tree-dropdown item is selected, then that selected tree-dropdown item is saved to $scope.selected. Also default tree-dropdown item selection can be done from the $scope.selected.

## License

The MIT License.
