$(document).ready(function () {

  $("#btnAddStudent").click(function () {
    //collect student data from student form
   function getPatientData() {
    
      let selectedDate = new Date($("#registrationDate").val());
      day = selectedDate.getDate();
      month = selectedDate.getMonth() + 1;
      year = selectedDate.getFullYear();
      let registrationDate = [day, month, year].join("/");

      let patient = {
        registrationNo : $("#regno").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        age: $("#age").val(),
        gender: $("input[name='gender']:checked").val(),
        email: $("#email").val(),
        contactNo: $("#contactNo").val(),
        address: $("#address").val(),
        symptoms: $("#sub").val(),
        registrationDate: registrationDate,
      };
      $("#patientForm")[0].reset();

      return patient;
    }

    //store student data to localStorage
    function storeDataToLocalStorage() {
      if (!localStorage.getItem("patient")) {
        localStorage.setItem("patient", JSON.stringify(getPatientData()));
      } else {
        localStorage.removeItem("patient");
        localStorage.setItem("patient", JSON.stringify(getPatientData()));
      }
    }

    //send data to server with AJAX request
    function sendData() {
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getPatientData());
      xhr.open("POST", "http://localhost:4000/storedata",true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data); 
    }

    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    sendData();
    window.location.href="display-data.html"
  });
});

function getData() {
  let localStorageData = localStorage.getItem("patient");
  let patientObj = JSON.parse(localStorageData);
  console.log(patientObj);
  $("#regno").text(patientObj.registrationNo);
  $("#firstName").text(patientObj.firstName);
  $("#lastName").text(patientObj.lastName);
  $("#age").text(patientObj.age);
  $("#gender").text(patientObj.gender);
  $("#email").text(patientObj.email);
  $("#contactNo").text(patientObj.contactNo);
  $("#address").text(patientObj.address);
  $("#sub").text(patientObj.symptoms);
  $("#registrationDate").text(patientObj.registrationDate);
  
}