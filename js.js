function scrollTheElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'});    
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
    scrollTheElement('.header')
})
//Per Project
// link2.addEventListener('click', () => {
//     scrollTheElement('')
// })
link3.addEventListener('click', () => {
    scrollTheElement('.header', 1)
})
link4.addEventListener('click', () => {
    scrollTheElement('footer')
})