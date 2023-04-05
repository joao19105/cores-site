const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
   // console.log(document.body)

   //pegar um número entre 0 - 3
   const randomNumber = getRandomNumber()
   console.log(randomNumber)

   document.body.style.backgroundColor = colors[randomNumber]
   color.textcontent = colors[randomNumber]

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

// console.log(getRandomNumber())