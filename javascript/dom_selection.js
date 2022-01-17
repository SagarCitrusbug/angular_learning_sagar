////Single element selection
//
//// getElementById method use for get data.
//console.log(document.getElementById('my-form'));
//// querySelector method use for get data.
//console.log(document.querySelector('h1'));
//console.log(document.getElementById('my-form'));
//
////multiple element selection
//console.log(document.querySelectorAll('.item'));
//
//// get element by class name
//console.log(document.getElementsByClassName('item'));
//// get element by Tag name
//console.log(document.getElementsByTagName('div'));
//
//// print all selected element using forEach and querySelectorAll
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));
//
//// remove element  using remove method.
//const ul = document.querySelector('.items');
////ul.remove();
//
//// remove last element using lastElementChild.
//ul.lastElementChild.remove();
//
//// Change first element using firstElementChild and textContent
//ul.firstElementChild.textContent = "hello"
//
//// other changes element using index and innerText
//ul.children[1].innerText = 'World'
//
//// Event manage using dom.
//const btn = document.querySelector('.btn');
//console.log(btn)
//btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//});

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const usersList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all filed.';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        usersList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}