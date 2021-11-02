camera = document.getElementById("cam");
Webcam.attach(camera);
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
  });
function capture(){
    Webcam.snap(function (data_uri) {
        document.getElementById("img").innerHTML="<img id='imgOutput' src='"+data_uri+"'>";
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mWxYDj9jq/model.json',modelLoaded);
function modelLoaded() {
    console.log("blablabla model is loaded as you probably know");
}
function identify() {
    img=document.getElementById("imgOutput");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if (error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("Obj").innerHTML=results[0].label;
      document.getElementById("Acc").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }
}