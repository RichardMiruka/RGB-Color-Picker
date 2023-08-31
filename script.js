const genColors = () => {
    const red = document.querySelector("#red").value;
    const green = document.querySelector("#green").value;
    const blue = document.querySelector("#blue").value;

    document.body.style.backgroundColor =
        "rgb(" + red + "," + green + "," + blue + ")";
    document.querySelector("#rgbOutput").innerHTML = 
        "rgb(" + red + "," + green + "," + blue + ")";
}