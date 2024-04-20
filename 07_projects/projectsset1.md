#Projects related to DOM

## Project Link
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

``` javascript
const buttons=document.querySelectorAll('.button')
const body= document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor= e.target.id;
    }
  }) 
})
```

``` javascript
## Project 2

const form = document.querySelector('form')
//Event mera submit hoga, form me submit hone se values server p chli jaati ye default action ko bhi hm event se alter kr skte hai

// const height=parseInt(document.querySelector('#height').value)
//This usecase will give you empty value
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)//string value mila jisse hm int me parse kr lie hai
  const weight=parseInt(document.querySelector('#weight').value) //agr isko phle likhte to height,weight me empty value pass ho jaati
  const results=document.querySelector('#results')
  if(height=== '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid height ${height}`;
  }else if(weight=== '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give valid weight ${weight}`;
  }else{
    const BMI= (weight/((height*height)/10000)).toFixed(2)
    //Show the result
    if(BMI>18 && BMI<25){
      results.innerHTML= `<span>BMI:${BMI} Healthy person</span>`
    }
    else if(BMI<18){
      results.innerHTML= `<span>BMI:${BMI} UnderWeight</span>`
    }
    else{
      results.innerHTML= `<span>BMI:${BMI} OverWeight</span>`
    }
  }
});
```

## Project 3
``` javascript
const clock=document.getElementById('clock')
//OR
// const clock= document.querySelector('#clock')


//Mujhe hr moment p time chahie mtlb hr baar method run ho

//Event for setting interval after which program will continuosly run
setInterval(function(){
  let date= new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000) //Isko aise hi likhna interview me puchta hai


```

## Project 4 ->Guess My Number

```javascript
let randomNumber=parseInt(Math.random()*100 +1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p= document.createElement('p')


let prevGuess= []
let numGuesses= 1

let playGame= true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault() //Default action prevent krk event lgaenge kyunki form me value server me chli jaegi
    const guess=parseInt(userInput.value) //User se input lie hai
    validateGuess(guess) //validate krne aage bhej die
  })
}

function validateGuess(guess){
  //User Valid values dia to hai na 1 to 100 k bich me value hai ya nhi
  if(isNaN(guess)){
    alert(("Please enter a valid number"))
  }
  else if(guess<1){
    alert(("Please enter a number <1"))
  }
  else if(guess>100){
    alert(("Please enter a number >100"))
  }
  else{
    prevGuess.push(guess)
    if(numGuesses ==11){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //Ye btaega ki aapne jo value insert kiya hai wo less hai high hai ya equal hai
  if(guess==randomNumber){
    displayMessage("You guessed it right")
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage("Number is too low")
  }
  else{
    displayMessage("Number is too high")
  }
}

function displayGuess(guess){
  //values ko clean krega, Guesses ko update krega
  userInput.value= ""
  guessSlot.innerHTML += `${guess} `
  numGuesses++;
  remaining.innerHTML= `${11-numGuesses}`
}

function displayMessage(message){
  //Ye message sidha DOM k saath interact krega 
  //Message print hoga
  lowOrHi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
  //Game khtm ho gya
  userInput.value= ''
  userInput.setAttribute('disabled','') //disabled key value pair me set hota hai
  p.classList.add('button')
  p.innerHTML= `<h2 id="newGame">Start new game</h2>`
  startOver.append(p) //Start over me paragraph add kr die
  playGame=false
  newGame();
}

function newGame(){
  //Nya game khelna hai
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber =parseInt(Math.random()*100 +1)
    prevGuess= []
    numGuesses=1
    guessSlot.innerHTML= ''
    remaining.innerHTML= `${11-numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })
}
```

## Project 5 -> Unlimited Color
``` javascript

//generate a random color

const randomColor= function(){
  const hex= "0123456789ABCDEF"
  let color= '#'
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random() *10)]
  }
  return color;
}

//continuosly chalega

let intervalID;  
const startChangingColor= function(){
  if(intervalID == null){
    intervalID= setInterval(changeBgColor,1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor= randomColor()
  }
}
const stopChangingColor= function(){
  clearInterval(intervalID);
  intervalID= null; //Ab ye intervalID ka kaam khtm ho gya to isse flush out krna acchi practice hao 
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

## Project 6 -> Keyboard input checker

``` javascript

const insert= document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML= `
    <div class="color">
        <table>
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key===' '?"Space": e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    `;
});
```