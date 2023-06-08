function calc() {

    var x = document.getElementById("inp1").value;
    var y = document.getElementById("inp2").value;
    var bmi = x / (y*y);

    document.getElementById("result").innerHTML = Number (x) / Number ((y*y));

    if (bmi <= 18.4) {
        document.getElementsById("noti").innerHTML = "You are underweight.";
    }else if (bmi <= 24.9) {
        document.getElementById("noti").innerHTML = "You are healthy.";
    }else if (bmi <= 29.9) {
        document.getElementById("noti").innerHTML = "You are over weight.";
    }else if (bmi <= 34.9) {
        document.getElementById("noti").innerHTML = "You are severely over weight.";
    }else if (bmi <= 39.9) {
        document.getElementById("noti").innerHTML = "You are obese.";
    }else {
        document.getElementById("noti").innerHTML = "You are severely obese.";
    }

    document.getElementById("myform").reset();

}