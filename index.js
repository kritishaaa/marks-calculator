const cal = () => {
    let sub1 = document.getElementById('sub1').value;
    let sub2 = document.getElementById('sub2').value;
    let sub3 = document.getElementById('sub3').value;
    let sub4 = document.getElementById('sub4').value;
    let sub5 = document.getElementById('sub5').value;
    let grades = "";
    let fullmarks=500;

    let totalgrades = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
    // alert(totalgrades);

    let percent = (totalgrades / fullmarks) * 100;
    // alert(percent);

    if (percent <=100 && percent >= 80) {
        grades = "A";
    }
    else if(percent <= 79 && percent >= 60){
        grades = "B";
    }
    else if(percent <= 59 && percent >= 40){
        grades = "C";
    }
    else{
    grades = "F";
}
document.querySelector("#data").innerHTML =`Out of 500 your total is ${totalgrades} and percentage is ${percent}%. <br> Your grade is ${grades}.`

}