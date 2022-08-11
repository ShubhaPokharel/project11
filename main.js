Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
    
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

