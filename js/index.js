let addButton = document.querySelector(".planner-buttons__button");
let delButton = document.querySelector("#del-btn");
let popCloseButton = document.querySelector(".popup-wrapper");
let popupWrapper = document.querySelector(".popup-wrapper");
addButton.addEventListener('click', ev =>{
    popupWrapper.classList.toggle("hidden");
});
delButton.addEventListener('click', ev =>{
    
});
popCloseButton.addEventListener('click', ev=>{
    popupWrapper.classList.toggle("hidden");
});