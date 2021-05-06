const secondhand = document.querySelector('.sec');
const minhand = document.querySelector('.min');
const hourhand = document.querySelector('.hour');
function setDate(){
    const now = new Date;
    console.log(now.getHours());
    const seconds = now.getSeconds();
    const secondDegrees = (seconds/60) * 360;
    secondhand.style.transform = `rotate(${secondDegrees}deg)`
    
    const mins = now.getMinutes();
    const minDegrees = (mins/60) * 360;
    minhand.style.transform = `rotate(${minDegrees}deg)`
    
    let hrs = now.getHours();
    const hrsDegrees = (hrs/12) * 360;
    hourhand.style.transform = `rotate(${hrsDegrees}deg)`
}

setInterval(() => {
    setDate();
}, 1000);