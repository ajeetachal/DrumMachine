const Q = document.getElementById('Q');
const W = document.getElementById('W');
const E = document.getElementById('E');
const A = document.getElementById('A');
const S = document.getElementById('S');
const D = document.getElementById('D');
const Z = document.getElementById('Z');
const X = document.getElementById('X');
const C = document.getElementById('C');

const q = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
const w = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
const e = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
const a = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
const s = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
const d = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
const z = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
const x = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
const c = new Audio(src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");

const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');

//initialize display
const displayBox = document.getElementById('display');
let isSmooth = true;

//toogle function
function band(){
    isSmooth = !isSmooth;
    if(isSmooth){
        document.getElementById('display').textContent="Heater kit";
    }else{
          document.getElementById('display').textContent="Smooth Piano Kit";
    }

}



bt1.addEventListener('click',() =>{

    if(isSmooth){
        Q.play();
        document.getElementById('display').innerHTML ='Heater-1';
    }else{
        q.play();
        document.getElementById('display').innerHTML ='chord-1';
    }
  
});

bt2.addEventListener('click',() =>{

    if(isSmooth){
        W.play();
        document.getElementById('display').innerHTML ='Heater-2';
    }else{
        w.play();
        document.getElementById('display').innerHTML ='chord-2';
    }
  
});
bt3.addEventListener('click',() =>{

    if(isSmooth){
        E.play();
        document.getElementById('display').innerHTML ='Heater-3';
    }else{
        e.play();
        document.getElementById('display').innerHTML ='chord-3';
    }
  
});

bt4.addEventListener('click',() =>{

    if(isSmooth){
        A.play();
        document.getElementById('display').innerHTML ='Heater-4';
    }else{
        a.play();
        document.getElementById('display').innerHTML ='Brk_Snr';
    }
  
});

bt5.addEventListener('click',() =>{

    if(isSmooth){
        S.play();
        document.getElementById('display').innerHTML ='Clap';
    }else{
        s.play();
        document.getElementById('display').innerHTML ='Light';
    }
  
});

bt6.addEventListener('click',() =>{

    if(isSmooth){
        D.play();
        document.getElementById('display').innerHTML ='Open-HH';
    }else{
        d.play();
        document.getElementById('display').innerHTML ='dry ohh';
    }
  
});

bt7.addEventListener('click',() =>{

    if(isSmooth){
        Z.play();
        document.getElementById('display').innerHTML ='Kick-n-Hat ';
    }else{
        z.play();
        document.getElementById('display').innerHTML ='bld h1';
    }
  
});

bt8.addEventListener('click',() =>{

    if(isSmooth){
        X.play();
        document.getElementById('display').innerHTML ='Kick';
    }else{
        x.play();
        document.getElementById('display').innerHTML ='punchy kick';
    }
  
});

bt9.addEventListener('click',() =>{

    if(isSmooth){
        C.play();
        document.getElementById('display').innerHTML =' Closed-HH';
    }else{
        c.play();
        document.getElementById('display').innerHTML ='side stick';
    }
  
});

const volume = document.getElementById("volume");
volume.addEventListener("change", function() {
  const volume = volume.value;
  console.log("Volume:", volume);
  // Set volume level for audio player, video player, etc.
});
function keyPress(evt){ 
    if (evt.keyCode == 81)
    {
      document.getElementById("Q").click();
    }
    else if (evt.keyCode == 87)
    {
      document.getElementById("W").click();
    }
    else if (evt.keyCode == 69)
    {
      document.getElementById("E").click();
    }
    else if (evt.keyCode == 65)
    {
      document.getElementById("A").click();
    }
    else if (evt.keyCode == 83)
    {
      document.getElementById("S").click();
    }
    else if (evt.keyCode == 68)
    {
      document.getElementById("D").click();
    }
    else if (evt.keyCode == 90)
    {
      document.getElementById("Z").click();
    }
    else if (evt.keyCode == 88)
    {
      document.getElementById("X").click();
    }
    else if (evt.keyCode == 67)
    {
      document.getElementById("C").click();
    }
  }
  document.addEventListener("keydown", keyPress);