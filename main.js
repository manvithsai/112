prediction_1="";
prediction_2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takeSnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}
console.log('ml5.version-',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7XgTyzk0h/model.json',modelLoded);
function modelLoded(){
    console.log("modelLoded");
}
function speak(){
    synth=window.speechSynthesis;
    speak_data_1="the first pridiction is"+prediction_1;
    speak_data_2="and the second pridiction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }else{
    console.log(result);
    document.getElementById("result_name").innerHTML=result[0].label;
    document.getElementById("result_name_2").innerHTML=result[1].label;
    prediction_1=result[0].label;
    prediction_2=result[1].label;
    speak();
if(result[0].label=="up"){
document.getElementById("update_hand_gesture").innerHTML="&#9754;";
}
if(result[0].label=="down"){
document.getElementById("update_hand_gesture").innerHTML="&#9755;";
}
if(result[0].label=="left"){
document.getElementById("update_hand_gesture").innerHTML="&#9756;";
}
if(result[0].label=="right"){
document.getElementById("update_hand_gesture").innerHTML="&#9757;";
}
if(result[1].label=="up"){
    document.getElementById("update_hand_gesture_2").innerHTML="&#9754;";
    }
    if(result[1].label=="down"){
    document.getElementById("update_hand_gesture_2").innerHTML="&#9755;";
    }
    if(result[1].label=="left"){
    document.getElementById("update_hand_gesture_2").innerHTML="&#9756;";
    }
    if(result[1].label=="right"){
    document.getElementById("update_hand_gesture_2").innerHTML="&#9757;";
    }
    }
}