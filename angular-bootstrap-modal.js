/*
 * Use this directive to create bootstrap modals easily
 */
(function (angular) {
    var AngularBootstrapModal = angular.module('AngularBootstrapModal', []);

    AngularBootstrapModal.directive('modalDialog', [

        function () {
            return {
                name: 'modalDialog',
                restrict: 'E',
                template: '<div class="modal fade custom" tabindex="-1" role="dialog" aria-labelledby="message-label" aria-hidden="true"><div class="modal-dialog" ng-style="dialogStyle"><div class="modal-content" ng-transclude></div></div></div>',
                replace: true,
                transclude: true,
                link: function ($scope, iElm, iAttrs) {
                    $scope.dialogStyle = {};
                    if (iAttrs.width) {
                        $scope.dialogStyle.width = iAttrs.width;
                    }
                    if (iAttrs.height) {
                        $scope.dialogStyle.height = iAttrs.height;
                    }

                    $scope.$parent.$on('showModal', function (event, name) {
                        if (iAttrs.name === name) {
                            iElm.modal('show');
                        }
                    });

                    $scope.$parent.$on('hideModal', function (event, name) {
                        if (iAttrs.name === name) {
                            iElm.modal('hide');
                        }
                    });
                }
            };
        }
    ]);

    AngularBootstrapModal.directive('modalHeader', [

        function () {
            return {
                name: 'modalHeader',
                require: '^modal-dialog',
                restrict: 'E',
                template: '<div class="modal-header"><div class="modal-sub-header" ng-transclude></div><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button></div>',
                replace: true,
                transclude: true
            };
        }
    ]);

    AngularBootstrapModal.directive('modalBody', [

        function () {
            return {
                name: 'modalBody',
                require: '^modal-dialog',
                restrict: 'E',
                template: '<div class="modal-body" ng-transclude></div>',
                replace: true,
                transclude: true
            };
        }
    ]);

    AngularBootstrapModal.directive('modalFooter', [

        function () {
            return {
                name: 'modalFooter',
                require: '^modal-dialog',
                restrict: 'E',
                template: '<div class="modal-footer" ng-transclude></div>',
                replace: true,
                transclude: true
            };
        }
    ]);
}(angular));