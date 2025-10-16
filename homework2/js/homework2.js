let ul = document.createElement('ul');
document.querySelector('.container__text-box').append(ul);
let btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click',() => {
 let inp = document.querySelector('.inpText');
 if(inp.value.trim().length === 0) console.log(alert("Вы ввели пустую строку"));
 else{
  let li = document.createElement('li');

  let taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = inp.value;
  
  let deleteIcon = document.createElement('i');
  deleteIcon.className = 'material-icons btnDelete';
  deleteIcon.textContent = 'delete';

  deleteIcon.addEventListener('click', () => {
   li.remove();
  });
  
  li.appendChild(taskText);
  li.appendChild(deleteIcon);

  inp.value = '';
  ul.append(li);
 }
})
