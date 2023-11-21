let node = document.createElement("DIV");
let para = document.createElement("P");
node.appendChild(para);
let text = document.createTextNode("Hellow World");
para.appendChild(text);
console.log(node);


let LI = document.createElement("LI");
let LI1 = document.createElement("LI");
let LI2 = document.createElement("LI");
let UL = document.createElement("UL");
UL.appendChild(LI);
UL.appendChild(LI1);
UL.appendChild(LI2);
LI.appendChild(document.createTextNode('Home'));
LI1.appendChild(document.createTextNode('About'));
LI2.appendChild(document.createTextNode('Contact'));

LI.setAttribute('class', 'li_one');
LI.setAttribute('onclick', 'deleteTodo()');

console.log(UL);

const input = document.querySelector('#todo');
const ul = document.querySelector('ul');
function addTodo(){
    if(input.value.trim() === ''){
        alert("enter value");
    }else{
        const li = document.createElement('li');
        const text2 = document.createTextNode(input.value);
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const delText = document.createTextNode('Delete');
        const editText = document.createTextNode('Edit');
        deleteBtn.setAttribute('onclick' , 'deleteTodo(this)');
        editBtn.setAttribute('onclick' , 'editTodo(this)');
        deleteBtn.setAttribute('class' , 'delete-btn');
        editBtn.setAttribute('class' , 'edit-btn');
        deleteBtn.appendChild(delText);
        editBtn.appendChild(editText);
        li.appendChild(text2);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
       
    }
    input.value = '';
}
function deleteTodo(element){
    console.log('todo deleted');
    console.log(element.parentNode);
    ul.removeChild(element.parentNode);
}
 function editTodo(element) {
        const newText = prompt('Enter updated text');
        if (newText !== null) {
            element.parentNode.firstChild.textContent = newText;
        }
}
// const input = document.querySelector('#todo');
// const ul = document.querySelector('ul');
// function addTodo(){
//     if(input.value.trim() === ''){
//         console.log('enter value');
//     }else{
//         const li = document.createElement('LI');
//         const text = document.createTextNode(input.value);

//         const deleteBtn = document.createElement('BUTTON');
//         const editBtn = document.createElement('BUTTON');
//         const delText = document.createTextNode('Delete');
//         const editText = document.createTextNode('Edit');

//         deleteBtn.setAttribute('onclick' , 'deleteTodo(this)');
//         editBtn.setAttribute('onclick' , 'editTodo(this)');

//         deleteBtn.appendChild(delText);
//         editBtn.appendChild(editText);
//         li.appendChild(text);
//         li.appendChild(deleteBtn);
//         li.appendChild(editBtn);
//         ul.appendChild(li);
//     }
   
//     input.value = ''
// }
