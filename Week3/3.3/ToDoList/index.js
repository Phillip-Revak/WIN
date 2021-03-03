
let list = document.querySelector('ul');
let newItem = document.createElement('li');
let btn = document.getElementById('new');
btn.addEventListener('click', function(clck){
    let put = document.querySelector('input#newToDo').value;
    newItem.innerHTML = put;
    list.appendChild(newItem);
    document.querySelector('input#newToDo').value = "";
})

let done1 = document.querySelector('button.one');
done1.addEventListener('click', function(remove){
    document.querySelector('li.one').remove();
})

let done2 = document.querySelector('button.two');
done2.addEventListener('click', function(remove){
    document.querySelector('li.two').remove();
})

let done3 = document.querySelector('button.three');
done3.addEventListener('click', function(remove){
    document.querySelector('li.three').remove();
})

let done4 = document.querySelector('button.four');
done4.addEventListener('click', function(remove){
    document.querySelector('li.four').remove();
})