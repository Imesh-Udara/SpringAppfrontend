getAllEmployee();
function saveEmployee(){
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    // console.log(name);
    $.ajax( {
        method: "POST",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employees/saveEmployees",
        async:true,
        origin:"http://localhost:8080",
        // mode:'no-cors',
        data:JSON.stringify({
            "empID": "",
            "empName": name,
            "empAddress": address,
            "empNumber": number
        }),
        success: function (data){
            alert("saved")
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })

}

function updateEmployee(){
    let id = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    // console.log(name);
    $.ajax( {
        method: "PUT",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employees/updateEmployees",
        async:true,
        // mode:'no-cors',
        data:JSON.stringify({
            "empID": id,
            "empName": name,
            "empAddress": address,
            "empNumber": number
        }),
        success: function (data){
            alert("Updated")
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })

}

function deleteEmployee(){
    let id = $('#exampleFormControlInput1').val();


    // console.log(name);
    $.ajax( {
        method: "DELETE",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employees/deleteEmployee/"+id,
        async:true,
        success: function (data){
            alert("Deleted")
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })

}

function getAllEmployee(){


    // console.log(name);
    $.ajax( {
        method: "GET",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employees/getAllEmployees",
        async:true,
        success: function (data){
            if(data.code==="00"){
                $('#empTable').empty();
                for(let emp of data.content){
                    let id = emp.empID;
                    let name = emp.empName;
                    let address = emp.empAddress;
                    let number = emp.empNumber;

                    var row = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${number}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
            // alert("All showed")
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })

}

$(document).ready(function (){
    $(document).on('click','#empTable tr',function (){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    })
})