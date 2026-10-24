
function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let row = document.createElement("tr");

    [name, roll, course].forEach(function(value) {
        let cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    document.getElementById("studentList").appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}
