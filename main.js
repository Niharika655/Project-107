prediction = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>";
    })
}
console.log("ml5 version : ", ml5.version);
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WfMJjAhRg/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakData = "The Prediction Is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}