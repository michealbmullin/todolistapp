let i = 0;

function addTask(event) {
    let ele = document.createElement("li");
    ele.innerHTML = document.getElementById("newtask").value;
    ele.setAttribute("class", "tasklist");
    let buttony = document.createElement("button");
    buttony.innerHTML = "placeholder";
    buttony.setAttribute("class", "tasksbuttons");
    ele.append(buttony);
    document.getElementById("taskunorderedlist").append(ele);
    event.preventDefault();

    let tasky = document.getElementById("newtask").value;
    let addyurl = "http://localhost:8585/api/v1/addtoDos";
    let posty = new XMLHttpRequest();
    posty.responseType = "json";
    posty.open("post", addyurl);
    posty.setRequestHeader("Content-Type", "application/json");
    posty.setRequestHeader("Accept", "application/json;charset=UTF-8");
    let addbody = {
        task: tasky,
        userId: "1",
        taskId: "",
        dateAdded: "20190425",
        taskStatus: "true"
    }
    addbody = JSON.stringify(addbody);

    posty.send(addbody);
}

function gettasks() {

    let data = "";
    let url = "http://localhost:8585/api/v1/toDos";
    let getty = new XMLHttpRequest();
    getty.open('GET', url)
    getty.responseType = "json";
    getty.onload = function() {
        data = getty.response;
        let todoitems = Object.values(data);
        let counter = 1;
        let len = todoitems.length;
        for (i = 0; i < len; i++) {
            let ele = document.createElement("li");
            let previoustasky = todoitems[i].task;
            ele.setAttribute = "id", 'task${counter++}';
            ele.setAttribute = "class", "taskslist";
            ele.innerHTML = previoustasky;
            let buttony = document.createElement("button");
            buttony.innerHTML = "placeholder";
            buttony.setAttribute("class", "tasksbuttons");
            ele.append(buttony);
            document.getElementById("taskunorderedlist").append(ele);
            continue;
        }
        i = 0;
    }
    getty.send();
}

// function nextstep() {
//     let counter = 1;
//     let ele = document.createElement("li");
//     let len = todoitems.length;
//     for (i = 0; i < len; i++) {
//         let previoustasky = todoitems[i].task;
//         ele.setAttribute = "id", 'task${counter++}';
//         ele.innerHTML = previoustasky;
//         document.getElementById("taskunorderedlist").append(ele);
//     }
// }