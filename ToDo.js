let div = document.getElementById('tasks');
let add = document.getElementById('add');
let newTask = document.getElementById('newTask');

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date();
var num = date.getDate();
document.getElementById("num").innerHTML = num;
var month = date.getMonth();
month = months[month];
document.getElementById("month").innerHTML = month;
var day = date.getDay();
day = days[day];
document.getElementById("day").innerHTML = day;

// let c = 0;

add.addEventListener("click", function () {
    let cbox = document.createElement("input");
    let d = document.createElement("div");
    let newt = newTask.value;

    newTask.value = null;

    cbox.type = "checkbox";
    cbox.id = "check";

    div.append(d);

    d.id = "nd";

    d.append(cbox);
    d.append(newt);

    cbox.addEventListener("click", function () {
        newt.style.textDecoration = "line-through";
    })
    // c += 1;

    // if (c === 14) {
    //     add.disabled = true;
    //     newTask.value = "Stack Overflow";
    // }
});


