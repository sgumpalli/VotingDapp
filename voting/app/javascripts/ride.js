$(document).ready(function(){
    $(".cancel").click(function() {
        //call the API to cancel ride
        $.post('placeholder_url', function( data ) {
            
        }).done(function() {
            $("#rider-cancel").prop('disabled', true);
        }).fail(function() {
            console.log("Try again");
        });
    });
});