function showGif() {
    document.getElementById("result").innerHTML = '<iframe src="https://giphy.com/embed/0OgdJVNjbcIifqSb7U" width="480" height="412" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-hug-phone-0OgdJVNjbcIifqSb7U">via GIPHY</a></p>';
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
}

function replaceButton() {
    document.getElementById("no-button").style.display = "none";
    document.getElementById("yes-button").innerHTML = "CHU MUFT SAY YES!!!";
    document.getElementById("result").innerHTML = "<p> MEGA ANGY T^T </p>";
}
