// top bar
let body = document.querySelector('body');
let menuIcons = document.querySelector('.nav__menu-icons');
let navList = document.querySelector('.nav__list');

menuIcons.addEventListener('click',function() {
    navList.classList.toggle('menu-open');
    body.classList.toggle('fixed');
    menuIcons.classList.toggle('bars');
})

const buttons = document.querySelectorAll('.btn-group a');
const items = document.querySelectorAll('.portfolio-item');
console.log(items);

console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        this.classList.add('active');

        const target = this.getAttribute('data-target');
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            if (items[k].getAttribute('data-id') == target) {
                items[k].style.display = 'block';
            }
            if (target == 'all') {
                items[k].style.display = 'block';
            }
        }
        
        
    })
    
}


