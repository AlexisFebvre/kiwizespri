const logo = document.getElementById("logo");
const reader = document.getElementById("reader");

// Play/Pause
const play  = document.getElementById("play");
const pause = document.getElementById("pause");

// Audio
const audio = new Audio("../Assets/Music/le_cake.mp3");
document.body.appendChild(audio);



// Aniamtion Handling
let isAnimationStarted = false;
logo.addEventListener("mouseover", StartAnimation);
logo.addEventListener ("mousedown", OnLogoClicked);
pause.addEventListener("mousedown", OnLogoClicked);
play.addEventListener ("mousedown", OnLogoClicked);


function StartAnimation()
{
    isAnimationStarted = false;
    
    // remove starting trigger
    logo.removeEventListener("mouseover", StartAnimation);
    
   
    // TODO - show pause btn
    pause.style.display = 'none';
    play.style.display = 'unset';
    
    // start animations
    reader.id = "reader-animated";
    logo.style.animationName = 'vinyl';
    logo.style.animationPlayState = 'paused';
}


function OnLogoClicked()
{
    // set animations properties
    reader.style.animationDuration = '2s';

    // play
    if (!isAnimationStarted)
    {
        isAnimationStarted = true;
        audio.play();
        return;
    }

    // else, pause
    isAnimationStarted = false;
    audio.pause(); 
}

// Hide btns
pause.style.display = 'none';
play.style.display  = 'none';

// Handle Pause and Play
audio.onpause = ()=>{
    // pause animation
    logo.style.animationPlayState = 'paused';

    reader.style.animationName = 'reader-play';
    reader.style.animationDirection = 'reversed';

    pause.style.display = 'none';
    play.style.display  = 'unset';
};
audio.onplay = ()=>{
    // play animation
    logo.style.animationPlayState = 'running'; 
        
    reader.style.animationName = 'reader-play';
    reader.style.animationDirection = 'normal';

    pause.style.display = 'unset';
    play.style.display  = 'none';
}