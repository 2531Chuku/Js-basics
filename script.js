//  Age Calculator
const userInput = document.querySelector('.js-date');
userInput.max = new Date().toISOString().split('T')[0];

const results = () => {
  let birthData = new Date(userInput.value);
  
  let birthDate = birthData.getDate();
  let birthMonth = birthData.getMonth() + 1;
  let birthYear = birthData.getFullYear();

  let todayDate = new Date();

  let currentDay = todayDate.getDate();
  let currentMonth = todayDate.getMonth() + 1;
  let currentYear = todayDate.getFullYear();

  let differenceDay, differenceMonth, differenceYear;

  // calculate year difference 
  differenceYear = currentYear - birthYear;
  
  // calculate month difference 
  if(currentMonth >= birthMonth ){
    differenceMonth = currentMonth - birthMonth;
  }else{
    differenceYear--;
    differenceMonth = 12 + currentMonth - birthMonth;
  }

  // calculate date
  if(currentDay >= birthDate){
    differenceDay = currentDay - birthData;
  }else{
    differenceMonth--;
    differenceDay = dateInMonth(birthYear, birthMonth) + currentDay - birthData;
  }
}

function dateInMonth(year, month){
  return new Date(year,month, 0).getDate();
}


// Notes

const container = document.querySelector();
const addNoteButton = document.querySelector();
const note = document.querySelectorAll();

addNoteButton.addEventListener('click',()=>{
  let note = document.createElement('p');
  note.className = 'note-inputBox';
  note.setAttribute('contentEditable','true');
  container.appendChild(note);
});

container.forEach((btn)=>{
  if(btn.target.tagName === 'IMG'){
    btn.parentElement.remove();
    update();
  }
})

// data to be stored in a browser
function update(){
  let dataStorage = localStorage.setItem('note', container.innerHTML);
  return dataStorage;
}

function updateHTML(){
    container.innerHTML = localStorage.getItem('note');
}

document.addEventListener(("keydown",(event)=>{
  if(event.key==='Enter'){
    document.execCommand('insertLineBreaker');
    event.preventDefault();
  }
}))

// time  || watch
let hours = document.querySelector('hrs');
let min = document.querySelector('min');
let sec = document.querySelector('sec');


setInterval(()=>{
  let currentTime = new Date();
  hours.innerHTML = (currentTime.getHours() <10 ? "0" :"") + currentTime.getHours();
  min.innerHTML =   (currentTime.getMinutes() < 10 ? "0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10? "0":"") + currentTime.getSeconds();
},1000);

// Stop watch 
let [hrs, mins, secs ] = [0,0,0];
let timer = null;

function countTime(){
  secs++
  if(secs === 60){
    secs=0;
    mins++;
  }else if(mins===60){
    mins=0;
    hrs++;
  }
}
function updateTimeZone(){
  if(timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(countTime,1000)
}

// drag and drop
const drag = document.getElementsByClassName();
let left = document.querySelector();
let right = document.querySelector();

drag.forEach((item)=>{
  item.addEventListener('dragStart',(e)=>{
      let selected = e.target;
      right.addEventListener('dragover',(e)=>{
        e.preventDefault();
      })
      right.addEventListener('drag',()=>{
          right.appendChild(selected);
          selected = null;
      });
  });
});

// scroll wheel(mouse)
const container1 = document.querySelector();
container1.addEventListener('wheel',(event)=>{
  event.preventDefault();
  container.scrollLeft = event.deltaY
  container1.style.scrollBehavior = 'auto'
});

// API's for images


// Calender 
// Day, date , month , year
const date = document.getElementById()
const day = document.getElementById()
const month = document.getElementById()
const year = document.getElementById()

const currentDate = new Date();
const daysOfTheWeek =['sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
const monthOfTheYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];

date.innerHTML = currentDate.getDate();
day.innerHTML = daysOfTheWeek[currentDate.getDay()];
month.innerHTML = monthOfTheYear[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear()



// Generate the random number 
const input_Box = document.querySelector();
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTWXYZ';
const lowercase ='abcdefghijklmnopqrstwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~|}{[]><-=';

const allChar = upperCase + lowercase + number + symbol;

function createPassword(){
  let password='';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password +=allChar[Math.floor(Math.random() * allChar.length)];
  }
  input_Box.value = password;

}
// copy the password from the inputBox
function copyPassword(){
  input_Box.select();
  document.execCommand('copy');
}


// hide the password 
const eyeIconPassword = document.querySelector();
const input = document.getElementById();
eyeIconPassword.addEventListener('click',()=>{
  if(input.type === password){
    input.type = 'text';
  }else{
    input.type = 'password'
  }
});


// 