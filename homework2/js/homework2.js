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
  
  let btnDone = document.createElement('button')
  btnDone.className = 'btn-done'

  btnDone.addEventListener('click', () =>{
   if (btnDone.classList.contains('done')) {
    btnDone.classList.remove('done');
    const isEven = Array.from(ul.children).indexOf(li) % 2 == 1;
    li.style.backgroundColor = isEven ? "rgba(170, 170, 170, 1)" : "rgba(255, 255, 255, 1)";
   }
   else {
    btnDone.classList.add ('done');
    
    li.style.backgroundColor = "black";
   };
  })

  li.appendChild(btnDone);
  li.appendChild(taskText);
  li.appendChild(deleteIcon);

  inp.value = '';
  ul.append(li);
 }
})
