const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load=0;
let time = setInterval(bluring,30);
function bluring() {
    load++;

    if(load>99) {
        clearInterval(time) //yapılan işlemi durdurması için
    }
    loadText.innerHTML= load+' %';
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }