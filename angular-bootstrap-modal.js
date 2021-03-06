/*
 * Use this directive to create bootstrap modals easily
 */
(function (angular) {
    var AngularBootstrapModal = angular.module('AngularBootstrapModal', []);

    var MODAL_DIALOG_TEMPLATE, MODAL_HEADER_TEMPLATE, MODAL_BODY_TEMPLATE, MODAL_FOOTER_TEMPLATE;

    MODAL_DIALOG_TEMPLATE = '<div class="modal fade custom" tabindex="-1" role="dialog" aria-labelledby="message-label" aria-hidden="true">' +
        '<div class="modal-dialog" ng-style="dialogStyle">' +
        '<div class="modal-content" ng-transclude></div>' +
        '</div>' +
        '</div>';

    MODAL_HEADER_TEMPLATE = '<div class="modal-header">' +
        '<div class="modal-sub-header" ng-transclude></div>' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '</div>';

    MODAL_BODY_TEMPLATE = '<div class="modal-body" ng-transclude></div>';

    MODAL_FOOTER_TEMPLATE = '<div class="modal-footer" ng-transclude></div>';

    AngularBootstrapModal.directive('modalDialog', ['$timeout',
        function ($timeout) {
            var linker;

            linker = function ($scope, iElm, iAttrs) {
                $scope.dialogStyle = {};

                if (iAttrs.width) {
                    $scope.dialogStyle.width = iAttrs.width;
                }
                if (iAttrs.height) {
                    $scope.dialogStyle.height = iAttrs.height;
                }

                iElm.find('[data-dismiss=modal]').on('click', function () {
                    iElm.modal('hide');
                    $timeout(function () {
                        $('body .modal-backdrop').remove();
                    });
                });

                $scope.$parent.$on('showModal', function (event, name) {
                    if (iAttrs.name === name) {
                        iElm.modal('show');
                    }
                });

                $scope.$parent.$on('hideModal', function (event, name) {
                    if (iAttrs.name === name) {
                        iElm.modal('hide');
                        $timeout(function () {
                            $('body .modal-backdrop').remove();
                        });
                    }
                });
            };

            return {
                name: 'modalDialog',
                restrict: 'E',
                template: MODAL_DIALOG_TEMPLATE,
                replace: true,
                transclude: true,
                link: linker
            };
        }
    ]);

    AngularBootstrapModal.directive('modalHeader', [

        function () {
            return {
                name: 'modalHeader',
                require: '^modal-dialog',
                restrict: 'E',
                template: MODAL_HEADER_TEMPLATE,
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
                template: MODAL_BODY_TEMPLATE,
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
                template: MODAL_FOOTER_TEMPLATE,
                replace: true,
                transclude: true
            };
        }
    ]);
}(angular));