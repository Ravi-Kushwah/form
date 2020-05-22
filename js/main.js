 var selectedRow = null

        function FormSubmit() {
            if(validate())
            { 
                var formData = readFormData();
                if (selectedRow == null)
                    insertNew(formData);
                else
                    update(formData);
                resetForm();
            
        }
        }

        function readFormData() {
                var formData = {};
                formData["First"] = document.getElementById("First").value;
                formData["Last"] = document.getElementById("Last").value;
                formData["contact"] = document.getElementById("contact").value;
                formData["email"] = document.getElementById("email").value;
                return formData;
            }
         function insertNew(data) {
                var table = document.getElementById("list").getElementsByTagName('tbody')[0];
                var newRow = table.insertRow(table.length);
                cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.First;
                cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.Last;
                cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.contact;
                cell4 = newRow.insertCell(3);
                cell4.innerHTML = data.email;
                cell5 = newRow.insertCell(4);
                cell5.innerHTML = 
                `  <button style="font-size:15px;margin-right: 30px" onClick="Edit(this)"> <i class="fa fa-pencil"></i></button> 
                <button style="font-size:15px" onClick="Delete(this)"><i class="fa fa-trash" style="font-size:15px"></i> </button>`;
             
            }

function update(formData) {
    selectedRow.cells[0].innerHTML = formData.First;
    selectedRow.cells[1].innerHTML = formData.Last;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.email;
} 

function Edit(td) {
    
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById("First").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Last").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function Delete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("First").value = "";
    document.getElementById("Last").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}

  