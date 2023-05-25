$(document).ready(function () {
  getData();
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
