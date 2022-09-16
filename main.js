let tittle = document.getElementById("tittle")
let tittleError = document.getElementById("tittleError")
let btnSubmit = document.getElementById("btnSubmit")
let firstNameError = document.getElementById("firstNameError")
let lastNameError = document.getElementById("lastNameError")
let userNameError = document.getElementById("userNameError")
let dobError = document.getElementById("dobError")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let userName = document.getElementById("userName")
let dob = document.getElementById("dob")
let email =  document.getElementById("email")
let emailError = document.getElementById("emailError")
let confirmMail = document.getElementById("confirmMail")
let confirmMailError = document.getElementById("confirmMailError")
let grade = document.getElementById("grade")
let gradeError = document.getElementById("gradeError")
let grade1 = document.getElementById("grade1")
let grade1Error = document.getElementById("grade1Error")
let grade2 = document.getElementById("grade2")
let grade2Error = document.getElementById("grade2Error")
let grade3 =  document.getElementById("grade3")
let grade3Error = document.getElementById("grade3Error")
let grade4 = document.getElementById("grade4")
let grade4Error = document.getElementById("grade4Error")
let grade5 = document.getElementById("grade5")
let grade5Error = document.getElementById("grade5Error")
let grade6 = document.getElementById("grade6")
let grade6Error = document.getElementById("grade6Error")
let grade7 = document.getElementById("grade7")
let grade7Error = document.getElementById("grade7Error")
let grade8 = document.getElementById("grade8")
let grade8Error = document.getElementById("grade8Error")
let grade1Label = document.getElementById("grade1Label")
let grade2Label = document.getElementById("grade2Label")
let grade3Label = document.getElementById("grade3Label")
let grade4Label = document.getElementById("grade4Label")
let grade5Label = document.getElementById("grade5Label")
let grade6Label = document.getElementById("grade6Label")
let grade7Label = document.getElementById("grade7Label")
let grade8Label = document.getElementById("grade8Label")
let country = document.getElementById("country")
let telephone = document.getElementById("telephone")
let address = document.getElementById("address")
let city = document.getElementById("city")
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")
let error4 = document.getElementById("error4")
let checked = document.getElementById("checked")
let checkError = document.getElementById("checkError")
let resultMsg = document.getElementById("resultMsg")
let currentYear
let dateOfBirth
let age
let Score
let finalScore
let firstSubject = document.getElementById("firstSubject")
let secondSubject = document.getElementById("secondSubject")
let thirdSubject = document.getElementById("thirdSubject")
let fourthSubject = document.getElementById("fourthSubject")
let fifthSubject = document.getElementById("fifthSubject")
let sixthSubject = document.getElementById("sixthSubject")
let seventhSubject = document.getElementById("seventhSubject")
let eightSubject = document.getElementById("eightSubject")
let change = document.getElementById("change")
let form = document.forms["my_form"]
// Global variables for Calculation

let point = 0
let agePoint = 0
let gradePoint = 0
let countryPoint = 0
let options3 = form.thirdSubject.options
let options4 = form.fourthSubject.options
let options5 = form.fifthSubject.options
let options6 = form.sixthSubject.options
let options7 = form.seventhSubject.options
let options8 = form.eightSubject.options


btnSubmit.addEventListener("click", function(){
    Validation()
})
thirdSubject.addEventListener("change", function(){
    GradeValidation()
})

function GradeValidation(){

    }
  
function Validation(){
    if(tittle.value == ""){
        tittleError.innerHTML = 'field required'
        tittleError.style.color = 'red'
    }else{
        tittleError.innerHTML = ""
    }
    if(firstName.value == ""){
        firstNameError.innerHTML = "field required"
        firstNameError.style = 'color:red';
    }else{
        firstNameError.innerHTML = ""
    }
    if(lastName.value ==""){
        lastNameError.innerHTML = "field required"
        lastNameError.style.color = 'red'
    }else{
        lastNameError.innerText = ""
    }
    if(userName.value ==""){
        userNameError.innerHTML = "field required"
        userNameError.style.color = "red"
    }else{
        userNameError.innerHTML = ""
    }
    if(dob.value == ""){
        dobError.innerHTML = "field required"
        dobError.style.color = "red"
    }else{
        dobError.innerHTML = ""
    }
    if(email.value == ""){
        emailError.innerHTML="field required *"
        emailError.style.color="red"
    }else{
        emailError.innerHTML = ""
    }
    if(confirmMail.value ==""){
        confirmMailError.innerHTML = "field required"
        confirmMailError.style.color="red"
    }else if(confirmMail.value != email.value && confirmMail.value != ""){
        confirmMailError.innerHTML = "email mismatch"
        confirmMailError.style.color="red"
    }
    else{
        confirmMailError.innerHTML=""
    }
    if(firstSubject.value ==""){
        grade1Label.innerHTML ="field required"
        grade1Label.style.color = "red"
    }else{
        grade1Label.innerHTML = ""
    }
    if(secondSubject.value ==""){
        grade2Label.innerHTML ="field required"
        grade2Label.style.color = "red"
    }else{
        grade2Label.innerHTML = ""
    }
    if(thirdSubject.value ==""){
        grade3Label.innerHTML ="field required"
        grade3Label.style.color = "red"
    }else{
        grade3Label.innerHTML = ""
    }
    if(fourthSubject.value ==""){
        grade4Label.innerHTML ="field required"
        grade4Label.style.color = "red"
    }else{
        grade4Label.innerHTML = ""
    }
    if(fifthSubject.value ==""){
        grade5Label.innerHTML ="field required"
        grade5Label.style.color = "red"
    }else{
        grade5Label.innerHTML = ""
    }
    if(sixthSubject.value ==""){
        grade6Label.innerHTML ="field required"
        grade6Label.style.color = "red"
    }else{
        grade6Label.innerHTML = ""
    }
    if(seventhSubject.value ==""){
        grade7Label.innerHTML ="field required"
        grade7Label.style.color = "red"
    }else{
        grade7Label.innerHTML = ""
    }
    if(eightSubject.value ==""){
        grade8Label.innerHTML ="field required"
        grade8Label.style.color = "red"
    }else{
        grade8Label.innerHTML = ""
    }
    if(grade1.value ==""){
grade1Error.innerHTML = "field required"
grade1Error.style.color="red"
    }else{
        grade1Error.innerHTML=""
    }
    if(grade2.value ==""){
        grade2Error.innerHTML="field required"
        grade2Error.style.color="red"
    }else{
        grade2Error.innerHTML=""
    }
    if(grade3.value == ""){
        grade3Error.innerHTML="field required"
        grade3Error.style.color = 'red'
    }else{
        grade3Error.innerHTML = ""
    }
    if(grade4.value == ""){
        grade4Error.innerHTML = "field required"
        grade4Error.style.color="red"
    }
    else{
        grade4Error.innerHTML = ""
    }
    if(grade5.value == ""){
        grade5Error.innerHTML ="field required"
        grade5Error.style.color = "red"
    }else{
        grade5Error.innerHTML =""
    }
    if(grade6.value == ""){
        grade6Error.innerHTML="field required"
        grade6Error.style.color="red"
    }else{
        grade6Error.innerHTML=""
    }
    if(grade7.value == ""){
        grade7Error.innerHTML="field required"
        grade7Error.style.color="red"
    }else{
        grade7Error.innerHTML=""
    }
    if(grade8.value == ""){
        grade8Error.innerHTML= "field required"
        grade8Error.style.color="red"
    }else{
        grade8Error.innerHTML=""
    }
    if(country.value ==""){
        Error1.innerHTML = "field required"
        Error1.style = "color:red"
    }else{
        Error1.innerHTML = ""
    }  
    if(telephone.value == ""){
        Error2.innerHTML = "field required"
        Error2.style = "color:red"
    }else if(telephone.value < 11){
        Error2.innerHTML = "invalid phone number"
        Error2.style = "color:red"
    }else{
        Error2.innerHTML = ""
    }
    if(address.value == ""){
        Error3.innerHTML = "enter valid address"
        Error3.style.color = "red"
    }else{
        Error3.innerHTML = ""
    }
    if(city.value == ""){
        Error4.innerHTML = "field required"
        Error4.style.color = "red"
    }else{
        Error4.innerHTML = ""
    }
    if(checked !=1){
        checkError.innerHTML = "please accept our terms and conditions"
        checkError.style.color = "red"
    }
    else{
        checkError.innerHTML = ""
    }
    if(checked.checked == true){
        checkError.innerHTML = "" 
    }

    PointAward()
}
// Calculation starts here

function PointAward(){
    let todayDate = new Date();
dateOfBirth = new Date(dob.value);
currentYear = new Date();
age = currentYear.getFullYear()-dateOfBirth.getFullYear()
 if(age >= 18 && age <= 25){
    agePoint += 100
 }else{
    agePoint
 }
   if(age >= 25 && age <= 30){
    agePoint += 80
   }
   else{
    agePoint 
   }
   if(age >= 31 && age <= 35){
    agePoint += 50
   }
   else{
    agePoint 
   }
   if(age >= 36 && age <= 40){
    agePoint += 30
   }
   else{
    agePoint 
   }
   if(age >= 40){
    agePoint += 10
   }
   else{
    agePoint 
   }
   if(country.value == "Africa"){
        countryPoint += 50
   }
   else{
    countryPoint 
   }
   if(country.value == "Asia"){
        countryPoint += 40
   }
   else{
    countryPoint 
   }
   if(country.value == "south_america"){
        countryPoint += 30
   }
   else{
    countryPoint 
   }
   if(country.value == "north_america"){
        countryPoint += 20
   }
   else{
    countryPoint 
   }
   if(country.value == "europe"){
        countryPoint += 10
   }
   else{
    countryPoint 
   }
   AcceptValue()
}

function AcceptValue(){
    let firstGrade = Number(grade1.value)
    let secondGrade = Number(grade2.value)
    let thirdGrade = Number(grade4.value)
    let fourthGrade = Number(grade5.value)
    let fifthGrade = Number(grade5.value)
    let sixthGrade = Number(grade6.value)
    let seventhGrade = Number(grade7.value)
    let eightGrade = Number(grade8.value)

     Score = firstGrade + secondGrade + thirdGrade + fourthGrade + fifthGrade + sixthGrade + seventhGrade + eightGrade;
    finalScore = Score / 8
    TotalGrade()
}
function TotalGrade(){
   
    if(finalScore >= 90 && finalScore <= 100){
        gradePoint += 150
       }else{
        gradePoint       }
       if(finalScore >= 85 && finalScore <= 89){
        gradePoint += 140
       }else{
        gradePoint
       }
       if(finalScore >= 75 && finalScore <= 84){
        gradePoint += 120
       }else{
        gradePoint 
       }
       if(finalScore >= 65 && finalScore <= 74){
        gradePoint += 100
       }else{
        gradePoint 
       }
       if(finalScore >= 60 && finalScore <= 64){
        gradePoint += 80
       }else{
        gradePoint 
       }
       if(finalScore >= 50 && finalScore <= 59){
        gradePoint += 50
       }else{
        gradePoint       }
       if(finalScore >= 40 && finalScore <= 49){
        gradePoint += 20
       }else{
        gradePoint 
       }
       scholarship()
}

function scholarship(){
    point = agePoint + countryPoint + gradePoint
    if(point == 0){
        resultMsg.innerHTML = ""
    }else if(point < 180){
        resultMsg.innerHTML = `Sorry you are not eligible for this scholarship as you do not meet the criteria with total point of ${point}`
        resultMsg.style.color = "red"
    }
    if(point >= 180){
        resultMsg.innerHTML = `Congratulations ${tittle.value} ${firstName.value} ${lastName.value} you have being awarded the scholarship with a total point of ${point}`
        resultMsg.style.color = "green"
        chart()
    }
    else{
        resultMsg.innerHTML = ""
    }

    clear()
}

function clear(){
    tittle.value =""
    firstName.value =""
    lastName.value =""
    dob.value = ""
    userName.value = ""
    email.value=""
    confirmMail.value =""
    grade1.value = ""
    grade2.value =""
    grade3.value =""
    grade4.value =""
    grade5.value =""
    grade6.value =""
    grade7.value =""
    grade8.value =""
}

function chart(){
    const ctx = document.getElementById('my_Chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Age', 'Country', 'Grade'],
        datasets: [{
            label: 'Scholarship Point',
            data: [agePoint, countryPoint, gradePoint],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

 function AddOption(){
    let studentsSub = ['-- Select Option --','chemistry', 'biology','physics','computer','government','commerce']

    let subject = ``
    for(let i = 0; i < studentsSub.length; i++){
    subject += 
    `<option value="">
    ${studentsSub[i]}
    </option>`
    }

    thirdSubject.innerHTML = subject
    fourthSubject.innerHTML = subject
    fifthSubject.innerHTML = subject
    sixthSubject.innerHTML = subject
    seventhSubject.innerHTML = subject
    eightSubject.innerHTML = subject

    check()
}
this.addEventListener("load", function(){
    AddOption()
})

function check(){
    for(let i = 0; i < thirdSubject.options.length; i++){
        if(thirdSubject[i].value == studentsSub[i]){
            studentsSub[i].remove();
        }
    }
}