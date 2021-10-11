function send() {
    var num1 = document.getElementById("num1input").value;
    var num2 = document.getElementById("num2input").value;
    var coranswer = parseInt(num1) * parseInt(num2);
    mulquestion = "<h4>" + num1 + " X " + num2 + "</h4>";
    inputbox = "<br>Answer : <input type='text' id='inputcheckbox'><br><br>";
    checkbutton = "<button class='btn btn-info' onclick='check()'>Check</button>";
    row = mulquestion + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1input").value = "";
    document.getElementById("num2input").value = "";  
}