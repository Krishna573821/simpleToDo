let todoArray = JSON.parse(localStorage.getItem('todoList')) || [];

function append() {
  let work = document.querySelector("#enterHere").value;
  let dueDate = document.querySelector("#enterDate").value;
  let todoObject = {
    work: work,
    lastDate: dueDate,
  };

  todoArray.push(todoObject);
  document.querySelector("#enterHere").value = '';
  document.querySelector("#enterDate").value = '';

  localStorage.setItem('todoList', JSON.stringify(todoArray));
  

  printArray();
}

function printArray() {
  document.querySelector(".output").innerText = "";


  for (let i = 0; i < todoArray.length; i++) {
    

      let work = todoArray[i].work;
      let lastDate = todoArray[i].lastDate;

    let newHTML = `
        <div class="flexItems">
            <span class="jsWork">${work}</span>
            <span class="jsDate">${lastDate}</span>
            <button class="btn deleteBtn" onclick = "
                removeElement(${i}); 
                printArray();">
                
                Delete
            </button>
        </div>
        `;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = newHTML;

    document.querySelector('.output').appendChild(newDiv);
  }
}
printArray();


function removeElement(i){
    todoArray.splice(i,1);
    localStorage.setItem('todoList', JSON.stringify(todoArray));
}