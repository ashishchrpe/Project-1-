let play_btn= document.querySelector("#play_btn");
let imgbtn=document.querySelector("#play_btn1");
let btn=document.querySelectorAll("I");
let play_btn2=document.querySelector("#play_btn2");
let play_btn3=document.querySelector("#play_btn3");
console.log(btn[4].id);

let songidx=0;
let range1=document.querySelector(".range1");
let audioElement=new Audio("ringtone1.mp3");
let song_name=document.querySelector(".song_name");
let Previous =document.querySelector(".Previous");
let Next =document.querySelector("#Next");
let songimg=document.querySelector(".songimg");
let song=[
   
    {songName:"ringtone1",filepath:"ringtone1.mp3",coverpath:"C:\Users\ashish charpe\Pictures\Saved Pictures\Project-1-\ringtone1.mp3"},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
    {songName:"",filepath:"",coverpath:""},
] 
let songitem=song.length-1;
function nextsong(element){
  audioElement.pause();
  audioElement=new Audio(`${(song[element].filepath)}`);
  let Song_p=audioElement.src;
  audioElement.play();
  timeChange();
}
play_btn2.addEventListener("click",()=>{
  audioElement.pause();
  audioElement=new Audio("RAM SIYA RAM.mp3");
  let Song_p=audioElement.src;
  audioElement.play();
  song_name.innerText=("RAM SIYA RAM"); 
  songimg.src=("https://tse1.mm.bing.net/th?id=OIP.OwhXfjpPcasspgsK5LHHpwHaEK&pid=Api&P=0&h=180");
  pausedBtn(); 
  play_btn.classList.remove("fa-circle-play");
  play_btn.classList.add("fa-circle-pause");
  play_btn2.classList.remove("fa-circle-play");
  play_btn2.classList.add("fa-circle-pause");
  timeChange();
})
play_btn3.addEventListener("click",()=>{
  audioElement.pause();
  audioElement=new Audio("Ekadantaya Vakratundaya Gauri.mp3");
  let Song_p=audioElement.src;
  audioElement.play();
  song_name.innerText=("Ekadantaya Vakratundaya Gauri"); 
  songimg.src=("https://i.pinimg.com/originals/6b/82/89/6b8289dee10876dce5747293cfd5f5a8.jpg");
  pausedBtn(); 
  play_btn.classList.remove("fa-circle-play");
  play_btn.classList.add("fa-circle-pause");
  play_btn3.classList.remove("fa-circle-play");
  play_btn3.classList.add("fa-circle-pause");
  timeChange();
})
 
play_btn.addEventListener('click',()=>{     
       if(audioElement.paused || audioElement.currentTime<=0){         
          audioElement.play();
          play_btn.classList.remove("fa-circle-play");
          play_btn.classList.add("fa-circle-pause");
          // song_name.innerText=song[songidx].songName; 
          timeChange();
         
      }
    
})
play_btn.addEventListener('dblclick',()=>{
      if(audioElement.played || audioElement.currentTime>0){
        audioElement.pause();
        play_btn.classList.add("fa-circle-play");
        play_btn.classList.remove("fa-circle-pause");
        // play_btn.classList.remove("fa-circle-pause");
        // play_btn.classList.add("fa-circle-play");
        // imgbtn.classList.remove("fa-circle-pause");
        // imgbtn.classList.add("fa-circle-play");
        // play_btn2.classList.add("fa-circle-play");
        // play_btn2.classList.remove("fa-circle-pause");
        // play_btn3.classList.add("fa-circle-play");
        // play_btn3.classList.remove("fa-circle-pause");
       
      }
})

imgbtn.addEventListener('click',()=>{
     audioElement.pause();
     nextsong(songidx);  
      song_name.innerText=song[0].songName; 
      songimg.src=("card1img.jpeg");
      pausedBtn(); 
      imgbtn.classList.remove("fa-circle-play");
      imgbtn.classList.add("fa-circle-pause");  
      play_btn.classList.remove("fa-circle-play");
      play_btn.classList.add("fa-circle-pause");
})
// imgbtn.addEventListener('dblclick',()=>{
//     if(audioElement.played || audioElement.currentTime>0){
//       audioElement.pause();
//       play_btn.classList.remove("fa-circle-pause");
//       play_btn.classList.add("fa-circle-play");
//       imgbtn.classList.remove("fa-circle-pause");
//       imgbtn.classList.add("fa-circle-play");
     
//     }
// })

function timeChange (){
  audioElement.addEventListener('timeupdate',() => {
   
    let time=Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    if( time == 100){
      songidx++;
      nextsong(songidx);
     }
    let currant_time=document.querySelector(".currant_time");
    currant_time.innerText=parseInt(audioElement.currentTime);
    let end_time=document.querySelector(".end_time");
    end_time.innerText=parseInt(audioElement.duration);
    range1.value=Progress;
   
})
range1.addEventListener('change',()=>{
     audioElement.currentTime=parseInt(range1.value * audioElement.duration) / 100;
    
})
}
function  pausedBtn(){
  play_btn.classList.remove("fa-circle-pause");
  play_btn.classList.add("fa-circle-play");
  imgbtn.classList.remove("fa-circle-pause");
  imgbtn.classList.add("fa-circle-play");
  play_btn2.classList.add("fa-circle-play");
  play_btn2.classList.remove("fa-circle-pause");
  play_btn3.classList.add("fa-circle-play");
  play_btn3.classList.remove("fa-circle-pause");
}

Next.addEventListener("click",()=>{
  songidx++;
  nextsong(songidx);
})
Previous.addEventListener("click",()=>{
  songidx--;
  nextsong(songidx);
})

