// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addstudents");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Grid Table
TableView(tableData);
function TableView(tableData) {
  var table = document.getElementById("mytable");
  var input = document.getElementById("myinput");

  function populateTable() {
    table.innerHTML = "";
    for (let data of tableData) {
      let row = table.insertRow(-1);
      let name = row.insertCell(0);
      name.innerHTML = data.name;

      let quantity = row.insertCell(1);
      quantity.innerHTML = data.employeeid;

      let price = row.insertCell(2);
      price.innerHTML = data.CompanyName;

      let expiry = row.insertCell(3);
      expiry.innerHTML = data.JobRole;
    }

    filterTable();
  }

  function filterTable() {
    let filter = input.value.toUpperCase();
    rows = table.getElementsByTagName("TR");
    let flag = false;

    for (let row of rows) {
      let cells = row.getElementsByTagName("TD");
      for (let cell of cells) {
        if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
          if (filter) {
            cell.style.backgroundColor = "";
          } else {
            cell.style.backgroundColor = "";
          }

          flag = true;
        } else {
          cell.style.backgroundColor = "";
        }
      }

      if (flag) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }

      flag = false;
    }
  }

  populateTable();

  input.addEventListener("keyup", function (event) {
    filterTable(event);
  });
}





// const arr = [
//     {id: "1", name: "car", type: "vehicle"},
//     {id: "2", name: "bike", type: "vehicle"},
//     {id: "3", name: "cycle", type: "vehicle"},
//     {id: "4", name: "pink", type: "color"},
//     {id: "5", name: "blue", type: "color"},
//     {id: "6", name: "red", type: "color"},
 
//  ];
 
//  const removeById = (tableData, employeeid) => {
//     const requiredIndex = arr.findIndex(el => {
//        return el.id === String(id);
//     });
//     if(requiredIndex === -1){
//        return false;
//     };
//     return !!arr.splice(requiredIndex, 1);
//  };
//  removeById(arr, 5);
//  console.log(arr);