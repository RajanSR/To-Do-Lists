//getting all the requirements
const inputField = document.querySelector(".input-field textarea"),
   todoLists = document.querySelector(".todoLists"),
   pendingNum = document.querySelector(".pending-num"),
   ClearButton = document.querySelector(".clear-button");

   // we will call this function while adding , deleting and checking unchecking the tasks
   function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        ClearButton.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0px";
    ClearButton.style.pointerEvents = "none";
   }
// Add task while we put in task area and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim to remove space after and before

    //if enter button is clicked and input value length is greater than 0
    if (e.key === "Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox"/>
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick ="deleteTask(this)"></i>
    </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside
    inputField.value = ""; //removing value from input field
    allTasks();
    }
});

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}
//Delete task while we click on delete icon
function deleteTask(e){
    e.parentElement.remove();
    allTasks();

}
//Deleting all the task while weclkck on clear button
ClearButton.addEventListener("click", () =>{
    todoLists.innerHTML =  "";
    allTasks();
})