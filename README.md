angular-bootstrap-modal
=======================

create bootsrap modals with ease using this directive


```
<modal-dialog width="400px" name="options-modal">
    <modal-body>
        <span>This is </span>
        <strong>Easy.</strong>
        <span> YAYYY !!</span>
    </modal-body>
    <modal-footer>
        <button class="btn btn-danger" ng-click="doStuff()">Yes</button>
        <button class="btn third_action_button" data-dismiss="modal" aria-hidden="true">No</button>
    </modal-footer>
</modal-dialog>
```

Show the modal

`
$scope.$emit('showModal', 'options-modal'); 	// the 2nd argument is the name attribute of the modal
`

Hide the modal

`
$scope.$emit('hideModal', 'options-modal'); 	// the 2nd argument is the name attribute of the modal
`
