// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.createElement('video');
//     const canvas = document.createElement('canvas');
//     const resultContainer = document.getElementById('result');
    
//     document.getElementById('scanButton').addEventListener('click', function() {
//         openCameraWindow(video);
//     });

//     function openCameraWindow(video) {
//         const cameraWindow = window.open('', 'Camera Feed', 'width=640, height=480');
//         cameraWindow.document.body.appendChild(video);

//         // Request user interaction before playing the video
//         cameraWindow.document.body.addEventListener('click', function() {
//             navigator.mediaDevices.getUserMedia({ video: true })
//                 .then(function(stream) {
//                     video.srcObject = stream;
//                     video.play();
//                 })
//                 .catch(function(err) {
//                     console.error('Error accessing camera: ', err);
//                 });
//         });

//         video.addEventListener('canplay', function() {
//             if (!window.qrcode) window.qrcode = new Qrcode(video, canvas, resultCallback);
//             window.qrcode.decode();
//         });

//         // Close the camera window when the main window is closed
//         window.addEventListener('beforeunload', function() {
//             cameraWindow.close();
//         });
//     }

//     function resultCallback(result) {
//         resultContainer.innerHTML = `Scanned data: ${result}`;
//     }
// });
