function setCountdown() {
    var end = new Date('09/04/2016');
    var now = new Date();
    var countdown = Math.floor((end - now) / 86400000);
    if (countdown < 0) {
    	$('.countdown').text("WE ARE WED!");
    } else {
    	$('.countdown').text(countdown + " days");
    }
}

$('.button-collapse').sideNav();
$('.parallax').parallax();
setCountdown();
