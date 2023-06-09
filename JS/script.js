function calc() {

    var x = document.getElementById("inp1").value;
    var y = document.getElementById("inp2").value;
    var bmi = x / (y*y);

    document.getElementById("result").innerHTML = Number (x) / Number ((y*y));

    if (bmi <= 18.4) {
        document.getElementById("noti").innerHTML = "You are underweight.";
        document.getElementById("noti").style.color = "#0000C8";
    }else if (bmi <= 24.9) {
        document.getElementById("noti").innerHTML = "You are healthy.";
        document.getElementById("noti").style.color = "#00D200";
    }else if (bmi <= 29.9) {
        document.getElementById("noti").innerHTML = "You are over weight.";
        document.getElementById("noti").style.color = "#B3D200";
    }else if (bmi <= 34.9) {
        document.getElementById("noti").innerHTML = "You are severely over weight.";
        document.getElementById("noti").style.color = "#FFD200";
    }else if (bmi <= 39.9) {
        document.getElementById("noti").innerHTML = "You are obese.";
        document.getElementById("noti").style.color = "#FF8800";
    }else {
        document.getElementById("noti").innerHTML = "You are severely obese.";
        document.getElementById("noti").style.color = "#FF0000";
    }

    document.getElementById("myform").reset();

}