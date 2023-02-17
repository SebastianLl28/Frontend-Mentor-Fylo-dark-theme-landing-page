const container = document.querySelector('.productivity__link-container');
const image = document.querySelector('.productivity__icon');
const button = document.querySelector('.form__button');

container.addEventListener('mouseover', ()=>{
    image.src = "./images/icon-arrow-hover.svg";
});

container.addEventListener('mouseout', ()=>{
    image.src = "./images/icon-arrow.svg";
})

const email = document.querySelector('.form__input');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    respuesta = (/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(email.value));
    mensaje = e.target.parentElement.querySelector('span');
    mensaje.classList = ['form__mensaje']
    if(!respuesta){
        mensaje.classList.add('form__mensaje--incorrecto');
        mensaje.textContent = "Pelase enter a valid email address"
        return;
    }
    mensaje.classList.add('form__mensaje--correcto');
    mensaje.textContent = "Valid email address"
})

