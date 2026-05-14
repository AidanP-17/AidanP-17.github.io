function buttonClick() {
    document.getElementById("textBox").style.fontSize = "24pt"
}

function fancyChosen() {
    if(document.getElementById("fancy").checked) {
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";
    } 
}

function boringChosen() {
    if(document.getElementById("boring").checked) {
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
}

function mooClick() {
    let textBox = document.getElementById("textBox");
    let text = textBox.value.toUpperCase();

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].split(" ");

        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
            text = sentences.join(".");
        }
    }
    textBox.value = text;
}
