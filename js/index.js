let addButton = document.querySelector(".planner-buttons__button");
let delButton = document.querySelector("#del-btn");
let popCloseButton = document.querySelector(".popup-wrapper");
let popupWrapper = document.querySelector(".popup-wrapper");
let  tasksWindow = document.querySelector(".tasks-window");
let popupAddButton = document.querySelector(".popup-container__button");
let popupEditor = document.querySelector(".popup-editor__wrapper");
let editButton = document.querySelectorAll(".taskEditor");
let closeEditButton = document.querySelector(".popup-editor__close"); 
let closeViewButton = document.querySelector(".popup-view__close"); 

let popupView = document.querySelector(".popup-view__wrapper");
//open edit window and view window
 setInterval(()=>{
   
    let textBoxTheme = document.querySelector(".popup-editor__input-taskTheme");
    let textBoxText = document.querySelector(".popup-editor__input-taskText");
    let taskTitle = document.querySelectorAll(".task-textBox__title");
    let taskText = document.querySelectorAll(".task-textBox__text");    

    for(let i = 0; i  < document.querySelectorAll(".taskEditor").length; i++){

        document.querySelectorAll(".taskEditor")[i].onclick = ()=>{
            document.querySelector(".popup-editor__wrapper").classList.toggle("hidden")
            textBoxTheme.value = taskTitle[i].textContent;
            textBoxText.value = taskText[i].textContent;
            document.querySelector(".popup-editor__button").onclick= ()=>{
                document.querySelector(".popup-editor__wrapper").classList.toggle("hidden")
                taskTitle[i].textContent = textBoxTheme.value;  
                taskText[i].textContent = textBoxText.value;
            }
        }
        
      
    }
  


},1000);
// close edit window
closeEditButton.addEventListener("click", ev =>{
    document.querySelector(".popup-editor__wrapper").classList.toggle("hidden");
});


setInterval(() => {
    let viewTheme = document.querySelector(".popup-view__task-title");
    let viewText = document.querySelector(".popup-view__task-text");
    let taskTitle = document.querySelectorAll(".task-textBox__title");
    let taskText = document.querySelectorAll(".task-textBox__text");   

    for(let i = 0; i < document.querySelectorAll(".taskOpener").length; i++ ){
         document.querySelectorAll(".taskOpener")[i].onclick= ()=>{
            popupView.classList.toggle("hidden");
            viewTheme.textContent = taskTitle[i].textContent;
            viewText.textContent = taskText[i].textContent;
         }
    }

    
}, 1000);

closeViewButton.addEventListener("click", ev =>{
    popupView.classList.toggle("hidden");
});




// open popup
addButton.addEventListener('click', ev =>{
    popupWrapper.classList.toggle("hidden");
    
});
// create task
popupAddButton.addEventListener("click", ev=>{
    if(ev.target.className === "popup-container__button"){
        popupWrapper.classList.toggle("hidden");
         tasksWindow.append(createTask());
    }
})


// delete button functions
delButton.addEventListener('click', ev =>{
    let checkBtn = document.querySelectorAll(".checkBox-button");
    let check = document.querySelectorAll(".checkBox-button__checked");
    if(delButton.dataset.isPushed == 0){
        delButton.dataset.isPushed = 1;
        
        checkBtn.forEach(el =>{
            el.style.display = "flex";
            
        })
        document.querySelectorAll(".buttons-img__button").forEach(el =>{
            el.style.display = "none";
            
        })
        
        for(let i = 0; i< checkBtn.length; i++){
            checkBtn[i].onclick = ()=>{
                check[i].classList.toggle("hidden");
                if(check[i].classList.contains("hidden")){
                    check[i].dataset.ischecked = 0;
                }else{
                    check[i].dataset.ischecked = 1;
                }
            }
        }    
    }
    
    
    delButton.onclick = ()=>{
            check.forEach(el =>{
                if (el.dataset.ischecked == 1) {
                    let par = el.parentElement
                    for(let i = 0; i < 2; i++){
                        par = par.parentElement;
                    }
                    par.remove()
                }
            })

            delButton.dataset.isPushed = 0;
            checkBtn.forEach(el =>{
                
                el.style.display = "none";
                
            })
            document.querySelectorAll(".buttons-img__button").forEach(el =>{
                el.style.display = "block";
                
            })
            delButton.onclick= null;
    }
    
});

// close popup
popCloseButton.addEventListener('click', ev=>{
    if(ev.target.className === "popup-container__close__button"){
        popupWrapper.classList.toggle("hidden");
    }
});




function createTask(){
    let taskTheme = document.querySelector(".popup-container__input-taskTheme").value;
    let taskText = document.querySelector(".popup-container__input-taskText").value;

    let task = document.createElement("div");
    task.classList.add("tasks-window__task");

    let taskTextBox = document.createElement("div");
    taskTextBox.classList.add("tasks-window__task-textBox");

    let taskH3 = document.createElement("h3");
    taskH3.classList.add("task-textBox__title");
    taskH3.textContent = taskTheme;
  
    let taskP = document.createElement("p")
    taskP.classList.add("task-textBox__text");
    taskP.textContent = taskText;

    taskTextBox.append(taskH3);
    taskTextBox.append(taskP);
    


    let taskButtonsDiv = document.createElement("div");
    taskButtonsDiv.classList.add("tasks-window__buttons-img");    

    let taskButton1 = document.createElement("button")
    taskButton1.classList.add("buttons-img__button"); 
    taskButton1.classList.add("taskOpener");       

    let taskButton2 = document.createElement("button")
    taskButton2.classList.add("buttons-img__button");    
    taskButton2.classList.add("taskEditor");    

    let taskButtonImg1 = document.createElement("img");
    taskButtonImg1.setAttribute("src", "img/open.png")   ;

    let taskButtonImg2 = document.createElement("img");
    taskButtonImg2.setAttribute("src", "img/edit.png");



    let checkBox = document.createElement("div");
    checkBox.classList.add("checkBox-button");

    let checkBoxChecked = document.createElement("div");
    checkBoxChecked.classList.add("checkBox-button__checked");
    checkBoxChecked.classList.add("hidden");

    checkBox.append(checkBoxChecked);



    taskButton1.append(taskButtonImg1);
    taskButton2.append(taskButtonImg2);
    taskButtonsDiv.append(taskButton1);
    taskButtonsDiv.append(taskButton2);
    taskButtonsDiv.append(checkBox);

    task.append(taskTextBox);
    task.append(taskButtonsDiv);
    task.style.animation = "ani 1s ease"
    return  task
};
