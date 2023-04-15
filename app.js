var playPause = document.querySelector('.play-pause');
var playBtn = document.querySelector('.play-pause i');
var volumeBtn = document.querySelector('.volume i');
var video = document.querySelector('video');
var progress = document.querySelector('.progress');
var backward = document.querySelector('.backward i');
var forward = document.querySelector('.forward i');
var wrapper = document.querySelector('.wrapper');
var volume = document.querySelector('.volume');
var backwardBtn = document.querySelector('.backward');
var forwardBtn = document.querySelector('.forward');
var timeItem = document.querySelector(".currentTime");
var input = document.querySelector(".controls-left input");
var timeDuration = document.querySelector(".duration");
var timeLineBar = document.querySelector(".timeline-bar span");
var setting = document.querySelector(".setting");
var boxSetting = document.querySelector(".box-setting");
var toggle = document.querySelector(".toggle");
var fullscreen = document.querySelector(".fullscreen i");
var container = document.querySelector(".container");
setting.addEventListener("click",()=>{
    boxSetting.classList.toggle("show");
})
toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
})
fullscreen.addEventListener("click",()=>{
    container.classList.toggle("full");
    if(document.fullscreenElement){
        fullscreen.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullscreen.classList.replace("fa-expand", "fa-compress");
    container.requestFullscreen();
})
document.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;
        case 37:
            video.currentTime -= 5;
            break;
        case 39:
            video.currentTime += 5;
            break;                    
    } 
}) 

playPause.addEventListener("click",()=>{
    video.paused ? video.play() : video.pause();
})
video.addEventListener("play",()=>{
    playBtn.classList.replace("fa-play", "fa-pause");
})
video.addEventListener("pause",()=>{
    playBtn.classList.replace("fa-pause", "fa-play");
})
video.addEventListener('click', ()=>{
    video.paused ? video.play() : video.pause();
})
function timeVideo(time){
    let seconds = Math.floor(time %60);
    let minutes = Math.floor(time / 60);
    seconds = seconds<10 ? `0${seconds}` : seconds;
    minutes = minutes<10 ? `0${minutes}` : minutes;
    return `${minutes}:${seconds}`
}
video.addEventListener("timeupdate",(e)=>{
    let{currentTime, duration} = e.target;
    var current = (currentTime/duration) *100;
    progress.style.width = `${current}%`;
    timeItem.innerHTML = timeVideo(currentTime);
})

video.addEventListener("loadeddata",(e)=>{
    var time = e.target.duration;
    timeDuration.innerHTML = timeVideo(time);
})
backward.addEventListener("click",()=>{
    video.currentTime -= 5;
})
forward.addEventListener("click",()=>{
    video.currentTime += 5;
})
volumeBtn.addEventListener("click",()=>{
    if(!volumeBtn.classList.contains("fa-volume-high")){
        video.volume = 0.5;
        input.value = 0.5;
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
    else{
        video.volume = 0.0;
        input.value = 0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    input.value = video.volume;
})
wrapper.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;
    } 
})     
backwardBtn.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;                  
    } 
    console.log(e.which);
}) 
forwardBtn.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;                             
    } 
    console.log(e.which);
}) 
playBtn.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;                             
    } 
})  
volume.addEventListener("keyup",(e)=>{
    switch(e.which){
        case 32:
            video.paused ? video.play() : video.pause();
            break;                             
    } 
    console.log(e.which)  
})  
// ------------volume-----------

input.addEventListener("input", (e)=>{
    video.volume = e.target.value;
    if(e.target.value == 0 ){
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark")
    }
    else{
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high")
    }
})

// ----------thanh timeLine--------
var timeLine = document.querySelector(".timeline-bar");
timeLine.addEventListener("click", (e)=>{
    let timeLineWidth = timeLine.clientWidth;
    video.currentTime = (e.offsetX / timeLineWidth)* video.duration;
})
timeLine.addEventListener("mousemove",(e)=>{
    var time = e.offsetX;
    var timelineVideo = timeLine.clientWidth;
    var videoTime = (e.offsetX / timelineVideo)* video.duration;
    timeLineBar.innerHTML = timeVideo(videoTime);
    timeLineBar.style.left = time+'px';
})

