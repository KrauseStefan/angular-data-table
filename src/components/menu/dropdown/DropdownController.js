export class DropdownController {
  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;
  }

  $onInit() {
    this.$scope.open = false;
  }

  toggle(scope) {
    this.$scope.open = !this.$scope.open;
  }
}
