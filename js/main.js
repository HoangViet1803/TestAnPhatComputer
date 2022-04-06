// Set the date we're counting down to
var countDownDate = new Date("Apr 8, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdownHidden"
    document.getElementById("countdownHidden").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    let countdowns = document.getElementsByClassName("countdown");
    [].slice.call(countdowns).forEach(function(countdown) {
        countdown.innerHTML = document.getElementById("countdownHidden").innerHTML;
    });

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownHidden").innerHTML = "TIME OUT!";
    }
}, 1000);

function activeClass(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
    e.target.className = "active";
}