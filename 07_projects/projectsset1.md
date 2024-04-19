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