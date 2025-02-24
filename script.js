console.log('Welcome to Spotify');

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from (document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let Me Love You", filePath:"songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Sorry by Justin Bieber", filePath:"songs/2.mp3", coverPath:"/covers/2.jpg"},
    {songName: "Blank Space by Taylor Swift", filePath:"songs/3.mp3", coverPath:"/covers/3.jpg"},
    {songName: "Hello by Adele", filePath:"songs/4.mp3", coverPath:"/covers/4.jpg"},
    {songName: "Sugar by Maroon 5", filePath:"songs/5.mp3", coverPath:"/covers/5.jpg"},
    {songName: "Roar by Kary Perry", filePath:"songs/6.mp3", coverPath:"/covers/6.jpg"},
    {songName: "Chandelier by Sia", filePath:"songs/7.mp3", coverPath:"/covers/7.jpg"},
    {songName: "Let Her Go by Passenger", filePath:"songs/8.mp3", coverPath:"/covers/8.jpg"},
    {songName: "Wake Me Up by Avicii", filePath:"songs/9.mp3", coverPath:"/covers/9.jpg"},
    {songName: "Rude” by Magic!", filePath:"songs/10.mp3", coverPath:"/covers/10.jpg"},
 ]
 
songItems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//Handle play/pause click
masterPlay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
 //listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
 })

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime <= 0){
            
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        }
        else{
           
            audioElement.pause();
            //makeAllPlays();
           // songIndex = parseInt(e.target.id);
        //e.target.classList.remove('fa-pause-circle');
        //e.target.classList.add('fa-play-circle');
        //audioElement.src = `songs/${songIndex+1}.mp3`;
        //masterSongName.innerText = songs[songIndex].songName;
        //audioElement.currentTime = 0;
        //audioElement.play();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        }

    })
    
})

document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src  = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src  = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})