const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes()
function checkBoxes() {
    const triggerBottom = (window.innerHeight / 6) * 5
   

    boxes.forEach(box=> {
        const boxTop = box.getBoundingClientRect().top  // kutuların ekranın üsteüne olan uzaklıklarını hesaplar
       
        if(boxTop<triggerBottom) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');   
        }
    })
}