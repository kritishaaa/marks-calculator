const cal = () => {
    let cp = document.getElementById('cp').value;
    let maths = document.getElementById('maths').value;
    let acc = document.getElementById('acc').value;
    let eng = document.getElementById('eng').value;
    let mp = document.getElementById('mp').value;
    let grades = "";
    let fullmarks=500;

    let totalgrades = parseFloat(cp) + parseFloat(maths) + parseFloat(acc) + parseFloat(eng) + parseFloat(mp);
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