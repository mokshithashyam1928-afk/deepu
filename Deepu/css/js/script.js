function checkPassword() {
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(pass === "deepu") {
        window.location.href = "memories.html";
    } else {
        error.innerText = "Wrong password 😜 Try again!";
    }
}

function checkAnswer() {
    let ans = document.getElementById("answer").value.toLowerCase();

    if(ans === "chocolate") {
        document.getElementById("surprise").style.display = "block";
    } else {
        alert("Oops wrong answer 😂");
    }
}

function blowCandles() {
    document.getElementById("finalMessage").style.display = "block";
}