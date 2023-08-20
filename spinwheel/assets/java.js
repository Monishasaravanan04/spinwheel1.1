// let topic = document.getElementById('topic')
// let tip = document.getElementById('tip')
// let button = document.getElementById('Add')
// let boxes = document.getElementById('boxes')

// let lists =[];

// button.addEventListener('click',()=>{
//     lists.push(input.value)
//     addlist(input.value)
// })

// function addlist(given){
//  let boo = document.createElement('b')
//  boo.innerText = given;
//  boxes.appendChild(boo)

// }
const Add = document.getElementById('adds');
const topics = document.getElementById('topic');
const boxes = document.getElementById('boxes');
function fun1(){
    boxes.innerHTML = topics.value;
}


Add.addEventListener('click',fun1);