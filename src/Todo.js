let add = document.getElementById("add");
let table = document.getElementById("Table");
let count = 0;

add.addEventListener("click", () => {
  count += 1;
  let newT = document.getElementById("newTask").value;
  let taskDate = document.getElementById("Date").value;
  if (newT === "" || taskDate === "") {
    alert("Please fill the task and date");
  }
  else {
    let tr = document.createElement("tr");
    tr.className = "fw-normal _task_";
    tr.innerHTML = `
    <td class="align-middle abs" >
        <span class="new_task"><b>${newT}</b></span>
      </td>
      <td class="align-middle abs" >
        <div class="_date_">
          <a
            data-mdb-toggle="tooltip"
            title="Due on date"
            >
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25H14C14.4142 19.25 14.75 18.9142 14.75 18.5C14.75 18.0858 14.4142 17.75 14 17.75H10ZM9.25 5.5C9.25 5.08579 9.58579 4.75 10 4.75H14C14.4142 4.75 14.75 5.08579 14.75 5.5C14.75 5.91421 14.4142 6.25 14 6.25H10C9.58579 6.25 9.25 5.91421 9.25 5.5Z" fill="#FCDC2A"></path> </g></svg>
          </a>
          <b>${taskDate}</b>
        </div>
      </td>
      <td class="align-middle abs">
        <button style="border: 1px solid #EDA8A8; padding: 0px 0px" data-mdb-toggle="tooltip" title="Done" class="done" onclick="check(event)">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C9.83082 3.53846 6.86615 3.73753 5.01495 3.88095C4.40616 3.92811 3.92811 4.40616 3.88095 5.01495C3.73753 6.86615 3.53846 9.83082 3.53846 12C3.53846 14.1692 3.73753 17.1338 3.88095 18.985C3.92811 19.5938 4.40616 20.0719 5.01495 20.1191C6.86615 20.2625 9.83082 20.4615 12 20.4615C14.1692 20.4615 17.1338 20.2625 18.985 20.1191C19.5938 20.0719 20.0719 19.5938 20.1191 18.985C20.2625 17.1338 20.4615 14.1692 20.4615 12C20.4615 9.83082 20.2625 6.86615 20.1191 5.01495C20.0719 4.40616 19.5938 3.92811 18.985 3.88095C17.1338 3.73753 14.1692 3.53846 12 3.53846ZM4.89612 2.34708C6.74819 2.2036 9.76547 2 12 2C14.2345 2 17.2518 2.2036 19.1039 2.34708C20.4686 2.45281 21.5472 3.53141 21.6529 4.89612C21.7964 6.74819 22 9.76547 22 12C22 14.2345 21.7964 17.2518 21.6529 19.1039C21.5472 20.4686 20.4686 21.5472 19.1039 21.6529C17.2518 21.7964 14.2345 22 12 22C9.76547 22 6.74819 21.7964 4.89612 21.6529C3.53141 21.5472 2.45281 20.4686 2.34708 19.1039C2.2036 17.2518 2 14.2345 2 12C2 9.76547 2.2036 6.74819 2.34708 4.89612C2.45281 3.53141 3.53141 2.45281 4.89612 2.34708Z" fill="#16FF00"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6209 9.40479C15.9213 9.70519 15.9213 10.1922 15.6209 10.4926L11.5183 14.5952C11.2179 14.8956 10.7308 14.8956 10.4304 14.5952L8.37915 12.5439C8.07875 12.2435 8.07875 11.7565 8.37915 11.4561C8.67955 11.1557 9.1666 11.1557 9.46701 11.4561L10.9744 12.9634L14.533 9.40479C14.8334 9.10439 15.3204 9.10439 15.6209 9.40479Z" fill="#16FF00"></path> </g></svg>
        </button>
        <button style="border: 1px solid #EDA8A8; padding: 0px 14px" data-mdb-toggle="tooltip" title="Remove" class="remove" onclick="remove(event)">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke="#D61C4E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#D61C4E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.5 11L10 16" stroke="#D61C4E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.5 11L14 16" stroke="#D61C4E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#D61C4E" stroke-width="1.5"></path> </g></svg>
        </button>
      </td>`;

    table.appendChild(tr);
    document.getElementById("newTask").value = "";
    document.getElementById("Date").value = "";
  }

});

let check = (event) => {
  let button = event.target;
  let taskRow = button.closest("tr");
  let newTaskElement = taskRow.querySelector(".new_task");
  let dateElement = taskRow.querySelector("._date_");

  if (newTaskElement.classList.contains("complete") && dateElement.classList.contains("complete")) {
    newTaskElement.classList.remove("complete");
    dateElement.classList.remove("complete");
  } else {
    newTaskElement.classList.add("complete");
    dateElement.classList.add("complete");
  }
};

let remove = (event) => {
  let button = event.target;
  let taskRow = button.closest("tr");

  if (taskRow && taskRow.parentNode) {
    taskRow.parentNode.removeChild(taskRow);
  }
};
