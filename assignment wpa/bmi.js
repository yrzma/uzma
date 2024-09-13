
JavaScript

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (height > 0 && weight > 0) {
        var bmi = weight / ((height / 100) ** 2);
        var category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        document.getElementById("result").innerHTML = `<br><br><b>Gender:</b> ${gender}<br><br><b>Your BMI:</b> ${bmi.toFixed(2)}<br><br><b>Category:</b> ${category}`;
    } 
    else 
    {
        document.getElementById("result").innerHTML = "<br><br>Please enter valid height and weight!";
    }
}