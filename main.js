$(function(){
    var $newItemButton, $newItemForm;
    $newItemButton = $('#newItemButton');
    $newItemForm = $('#newItemForm');

    $newItemButton.show();
    $newItemForm.hide();
    $('#newItemButton').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    })

})