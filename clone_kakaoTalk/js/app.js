$(document).ready(function() {
    // whatever
    var $actionBtn = $("#actionBtn"),
        $iconBtn = $("#actionBtn .fa"),
        $lockBtn = $("#lockBtn");

    $actionBtn.click(function() {
    	// $iconBtn.toggleClass("fa-heart fa-comment");
        $iconBtn.toggleClass("fa-times fa-comment");
        $lockBtn.toggleClass("showing-button");
    });
});
