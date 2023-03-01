let addButton = document.getElementById('addBut') //ADD BUTTON
let inputBox = document.getElementById('textBox') //INPUT BOX
let itemDelete = document.getElementById('itemDel') //ITEM DELETE BUTTON
let Body = document.getElementById("mainBody") //TO-DO ITEMS BODY
let toDo = []
let getLocal = localStorage.getItem("stored")
let parsedGetLocal = JSON.parse(getLocal)
let myHTML = ""



/*ADDING ITEMS*/
addButton.addEventListener('click',()=>{
    let typedText = inputBox.value
    let boiler = `<div class="item" id="item"}>
    <input type="checkbox">
    <h4>${typedText}</h4>
    <button id="itemDel">Remove</button>
   </div>`

   if(typedText==0){
    alert("Please insert a TO-do before submitting")
   }else{
    Body.innerHTML += boiler
    inputBox.value = ""
    toDo.push(boiler)
    localStorage.setItem("stored",JSON.stringify(toDo))
   }
})

/*ADDING THE EMPTY STATE IMAGE*/

if(Body.innerHTML=""){
    Body.style.backgroundColor =red
}