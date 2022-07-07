let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let inputEmail = document.getElementById("inputEmail");
let inputFaculty = document.getElementById("inputFaculty");
let inputMajor = document.getElementById("inputMajor");
let myBtn = document.getElementById("myBtn");
let inputSearch = document.getElementById("inputSearch");
let alertdanger = document.getElementById("danger");
let alertdangerphone = document.getElementById("danger-phone");
let myAlert = document.getElementById("myAlert");
let arrayData ;


if(localStorage.getItem("Students")==null){
    arrayData =[];
}else{
    arrayData =JSON.parse( localStorage.getItem("Students"));
    displayDataUser();
}
myBtn.onclick = function(){

    if(inputEmail.value=="" || inputEmail.value==""||inputMajor.value==""||inputName.value=="" ||inputPhone.value=="")
    {
        myAlert.classList.add("d-block");
        myAlert.classList.remove("d-none");
        return false
    }
    addUser()
    displayDataUser()
    clearForms();

}


function addUser(){
 let myObjectData = {
    name : inputName.value,
    phone : inputPhone.value,
    email : inputEmail.value,
    major : inputMajor.value,
    faculty : inputFaculty.value
 }; 
arrayData.push(myObjectData);
localStorage.setItem("Students",JSON.stringify(arrayData))


}


function displayDataUser(){
 let conatiner = "";
 for (let i = 0; i < arrayData.length; i++) {
     
conatiner += `
        <tr>
            <td>${i+1}</td>
            <td>${arrayData[i].name}</td>
            <td>${arrayData[i].email}</td>
            <td>${arrayData[i].phone}</td>
            <td>${arrayData[i].faculty}</td>
            <td>${arrayData[i].major}</td>
            <td><button  onclick="upDateUser(${i})" class="btn btn-warning">UpDaate</button></td>
            <td><button  onclick="deleteUser(${i})" class="btn btn-danger">Delete</button></td>
        </tr> `
 }

document.getElementById("myRow").innerHTML = conatiner;


}

function clearForms(){
    inputEmail.value ="";
    inputPhone.value ="";
    inputName.value ="";
    inputFaculty.value ="";
    inputMajor.value ="";
}

function deleteUser(i){
    arrayData.splice(i,1);
    localStorage.setItem("Students",JSON.stringify(arrayData))
    displayDataUser();




}
function upDateUser(i){
  inputName.value  = arrayData[i].name; 
  inputPhone.value  = arrayData[i].phone; 
  inputEmail.value  = arrayData[i].email; 
  inputFaculty.value  = arrayData[i].faculty; 
  inputMajor.value  = arrayData[i].major;
  myBtn.innerHTML = "UpDate" 
  myBtn.classList.add("colors");
  myBtn.onclick = function(){
    arrayData[i].name = inputName.value;
    arrayData[i].phone = inputPhone.value;
    arrayData[i].email= inputEmail.value;
    arrayData[i].faculty = inputFaculty.value;
    arrayData[i].major = inputMajor.value;
    myBtn.innerHTML = "Add";
    myBtn.classList.add("color");

     myBtn.onclick =  addUser;
          displayDataUser();
          clearForms();



  }

}
function search(){
    let container = "";
 for (let i = 0; i < arrayData.length; i++) {

    //  if(arrayData[i].name.toLowerCase() == inputSearch.value.toLowerCase())
     if(arrayData[i].name.toLowerCase().includes(inputSearch.value.toLowerCase()) || arrayData[i].major.toLowerCase().includes(inputSearch.value.toLowerCase()))

        {
        
            container += `
            <tr>
                <td>${i+1}</td>
                <td>${arrayData[i].name.replace(inputSearch.value , `<span style="color: yellow;">${inputSearch.value}</span>`
                )}</td>
                <td>${arrayData[i].email}</td>
                <td>${arrayData[i].phone}</td>
                <td>${arrayData[i].faculty}</td>
                <td>${arrayData[i].major}</td>
                <td><button  onclick="upDateUser(${i})" class="btn btn-warning">UpDaate</button></td>
                <td><button  onclick="deleteUser(${i})" class="btn btn-danger">Delete</button></td>
            </tr> `
        }

     }
     document.getElementById("myRow").innerHTML = container;

 }




 function valiName(){

 let regxName = /^[A-Z][a-z]{2,8}$/;
 if(regxName.test(inputName.value) == true)
  {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    alertdanger.classList.add("d-none")
    alertdanger.classList.remove("d-block")

  }else{
      //is-invalid
      inputName.classList.add("is-invalid")
      inputName.classList.remove("is-valid")
      alertdanger.classList.remove("d-none")
      alertdanger.classList.add("d-block")
  }
 


 }

inputName.addEventListener("keyup",valiName)



function validPhone(){
let regxphone = /^01[0-9]{1,9}$/;
    if(regxphone.test(inputPhone.value) == true)
    {
       inputPhone.classList.add("is-valid")
       inputPhone.classList.remove("is-invalid")
       alertdangerphone.classList.remove("d-block")
       alertdangerphone.classList.add("d-none");
       myBtn.classList.remove("disabled")


        
    }else{
        inputPhone.classList.add("is-invalid")
        inputPhone.classList.remove("is-valid")   
        alertdangerphone.classList.add("d-block")
        alertdangerphone.classList.remove("d-none")
        myBtn.classList.add("disabled")
    }



}

inputPhone.addEventListener("keyup",validPhone)


function op(){
    window.open("https://twitter.com/",width="600px",height='300px')

}

function dd(ele,lim,speed){

    let val = 0;
    let vv = setInterval(function(){
            val ++;
            $("ele").text(val);
            if(val == lim)
            {
                clearInterval(vv)
            }


    }, speed);


}

dd("#demo",500,2000)


