window.addEventListener('keydown', function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0; //starts from beginning
    audio.play();
    console.log(key);
});