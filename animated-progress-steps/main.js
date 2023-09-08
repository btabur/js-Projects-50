const progress =document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


let currentActiveCount =1;
nextBtn.addEventListener('click',()=> {
    currentActiveCount++;
  
    if(currentActiveCount>circles.length){
        currentActiveCount=circles.length;
    }
    updateClass();
})

prevBtn.addEventListener('click', ()=> {
    currentActiveCount--;

    if(currentActiveCount<1) {
        currentActiveCount=1
    }
    updateClass();
})

function updateClass() {
        circles.forEach((circle,index) => {
             if(index<currentActiveCount) {
                circle.classList.add('active');
             }else {
                circle.classList.remove('active');
             }
        })     
        const actives = document.querySelectorAll('.active');

        progress.style.width = (actives.length-1)/(circles.length-1)*100+ "%";

        if(currentActiveCount===1) {
            prevBtn.disabled = true;
        }else if(currentActiveCount === circles.length){
            nextBtn.disabled = true
        }else {
            prevBtn.disabled = false;
            nextBtn.disabled = false
        }


    
}
