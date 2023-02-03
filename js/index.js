let addButton = document.querySelector(".planner-buttons__button");
let delButton = document.querySelector("#del-btn");
let popCloseButton = document.querySelector(".popup-wrapper");
let popupWrapper = document.querySelector(".popup-wrapper");
let  tasksWindow = document.querySelector(".tasks-window");
let popupAddButton = document.querySelector(".popup-container__button");



addButton.addEventListener('click', ev =>{
    popupWrapper.classList.toggle("hidden");
    
});

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
                console.log(el )
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


popCloseButton.addEventListener('click', ev=>{
    if(ev.target.className === "popup-container__close__button"){
        popupWrapper.classList.toggle("hidden");
    }
});
popupAddButton.addEventListener("click", ev=>{
    if(ev.target.className === "popup-container__button"){
         tasksWindow.append(createTask());
    }
})



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

    let taskButton2 = document.createElement("button")
    taskButton2.classList.add("buttons-img__button");    

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

    return  task
};
