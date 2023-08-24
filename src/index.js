document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let importance;
  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks");
  const text = document.getElementById("new-task-description");
  const dropdown = document.querySelector("#custom-selection");
  createOptions(dropdown);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    manageTasks(text.value);
    text.value = "";
  });

  function manageTasks(task){
    const p = document.createElement("p");
    const x = document.createElement("button");
    const edit = document.createElement("button");

    edit.innerHTML = "edit";
    x.innerHTML = "delete";
    p.innerHTML = `${task} `;
    p.style.color = importance;
    
    p.appendChild(edit);
    p.appendChild(x);
    ul.append(p);

    x.addEventListener("click",()=>{
      x.parentNode.remove()
    })
    edit.addEventListener("click",()=>{
      const newForm = document.createElement("form");
      const newText = document.createElement("input");
      const newLabel = document.createElement("label");
      const newSubmit = document.createElement("input");
      const newSelector = document.createElement("select");
      
      createOptions(newSelector);
      newLabel.innerHTML = "New task: ";
      newText.type = "text";
      newSubmit.type = "submit";
      newSubmit.value = "enter";
      p.style.color = "#000000";

      newForm.appendChild(newLabel);
      newForm.appendChild(newText);
      newForm.appendChild(newSubmit);
      newForm.appendChild(newSelector);
      p.append(newForm);

      newForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        manageTasks(newText.value);
        p.remove();
      })
    })

  }
  function createOptions(select){
    const selectAnOption = document.createElement("option");
    const important = document.createElement("option");
    const notImportant = document.createElement("option");
    const passive = document.createElement("option");

    selectAnOption.innerHTML = "Please select a priority level."
    important.innerHTML = "high";
    notImportant.innerHTML = "medium";
    passive.innerHTML = "low";

    important.value= "high";
    notImportant.value = "medium";
    passive.value = "low";

    select.appendChild(selectAnOption)
    select.appendChild(important)
    select.appendChild(notImportant)
    select.appendChild(passive)

    select.addEventListener("change",()=>{
      if (dropdown.value == "high"){
        importance = "#ff0000";
      }else if(dropdown.value == "medium"){
        importance = "#8B8000";
      }else if(dropdown.value == "low"){
        importance = "#00ff00";
      }
      
    })
  }
});
