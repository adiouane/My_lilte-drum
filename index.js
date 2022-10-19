let len = document.querySelectorAll('.drum').length;
console.log(len);

for (let i = 0; i < len; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        if (this.innerHTML == 'a')
        {
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'd')
        {
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'i')
        {
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'o')
        {
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'u')
        {
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'n')
        {
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if (this.innerHTML == 'e')
        {
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
    });
}