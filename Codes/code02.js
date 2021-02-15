
let fName;
let count = 0;

let myAge;
let myPets;
let myCity;
let myEdu;
let myAddiction;


function userName (){
  fName = prompt('Whats your name?');
  while((fName === null) || (fName === ''))
  {
    fName = prompt('Whats your name?');
  }
  if(fName.toLowerCase() ==='amjad'){
    console.log('Amjad');
    alert('Hello sir!');
  }
  else {
    console.log('Hello ' + fName);
    alert('Hello ' + fName + '!');
  }}

function qTime(){

  alert('Quiz time! Please answer the questions about me with yes or no!');

  myAge = prompt('Am I am 25 years old?');
  while ((myAge === null) || (myAge === '') || (myAge.toLowerCase() !== 'yes') && (myAge.toLowerCase() !== 'no'))
  {
    myAge = prompt('Am I am 25 years old?');
  }
  if(myAge.toLowerCase() ==='yes'){
    console.log('Wrong answer, age.');
    alert('Wrong!, I am 29 years old. =]');
  }
  else if(myAge.toLowerCase() ==='no'){
    console.log('Correct answer, age.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!');
  }



  myPets = prompt('Do I have pets?');
  while ((myPets === null) || (myPets === '') || (myPets.toLowerCase() !== 'yes') && (myPets.toLowerCase() !== 'no'))
  {
    myPets = prompt('Do I have pets?');
  }
  if(myPets.toLowerCase() ==='no'){
    console.log('Wrong answer, pets.');
    alert('Wrong!, I have 2 beautiful cats! =3');
  }
  else if(myPets.toLowerCase() ==='yes'){
    console.log('Correct answer, pets.');
    count++;
    console.log('Correct answers:' + count);
    alert('You are correct!');
  }


  myCity = prompt('Do I live in Amman');
  while ((myCity === null) || (myCity === '') || (myCity.toLowerCase() !== 'yes') && (myCity.toLowerCase() !== 'no'))
  {
    myCity = prompt('Do I live in Amman');
  }
  if(myCity.toLowerCase() ==='yes'){
    console.log('Wrong answer, city.');
    alert('Wrong!, I live in the lovely city of Irbid ^_^');
  }
  else if(myCity.toLowerCase() ==='no'){
    console.log('Correct answer, city.');
    count++;
    console.log('Correct answers:' + count);
    alert('You got that right!');
  }


  myEdu = prompt('Do I have a Master degree?');
  while ((myEdu === null) || (myEdu === '') || (myEdu.toLowerCase() !== 'yes') && (myEdu.toLowerCase() !== 'no'))
  {
    myCity = prompt('Do I have a a Master degree?');
  }
  if(myEdu.toLowerCase() ==='yes'){
    console.log('Wrong answer, education.');
    alert('You are mistaken, I only have a bachelor degree! :P');
  }
  else if(myEdu.toLowerCase() ==='no'){
    console.log('Correct answer, education.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!, I have only Bachelor degree!');
  }


  myAddiction = prompt('Am I addicted to YouTube?');
  while ((myAddiction === null) || (myAddiction === '') || (myAddiction.toLowerCase() !== 'yes') && (myAddiction.toLowerCase() !== 'no'))
  {
    myAddiction = prompt('Am I addicted to YouTube?');
  }
  if(myAddiction.toLowerCase() ==='no'){
    console.log('Wrong answer, addiction.');
    alert('Thats a huge mistake! YouTube is my honey and jam! :3');
  }
  else if(myAddiction.toLowerCase() ==='yes'){
    console.log('Correct answer, addiction.');
    count++;
    console.log('Correct answers:' + count);
    alert('Exactly!, Who isnt !? :D');
  }
  if (count === 5)
  {

    alert('Congratualtions!, You passed the quiz with a score of: ' + count +'/5.');
  }
  else if (count !== 5)
  {

    alert('I am sorry, You failed the quiz with a score of: ' + count +'/5.');
  }

  alert('Thanks for your time, '+ fName + '!');
}
