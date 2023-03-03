let addButton = document.getElementById('addBut') //ADD BUTTON
let inputBox = document.getElementById('textBox') //INPUT BOX
let itemDelete = document.getElementById('itemDel') //ITEM DELETE BUTTON
let Body = document.getElementById('mainBody') //TO-DO ITEMS BODY
let getLocal = localStorage.getItem("stored")

let parsedGetLocal = JSON.parse(getLocal)
let toDo

/* GETTING DATA FROM LOCAL STORAGE */
if (parsedGetLocal === [] || parsedGetLocal === null) {
    toDo = []
    Body.classList.add("backgroundImage")

} else {

    toDo = parsedGetLocal
    if (parsedGetLocal !== null) {

        toDo = parsedGetLocal
        for (let i = 0; i < parsedGetLocal.length; i++) {
            let typedText = parsedGetLocal[i]
            let boiler = `<div class="item" id="item">
            <i class="fa-solid fa-circle-check" id="grean"></i>
            <h4>${typedText}</h4>
            <i class="fa-solid fa-trash"></i>
           </div>`
            Body.innerHTML += boiler
        }
    }

}








/*ADDING ITEMS*/
addButton.addEventListener('click', () => {


    let typedText = inputBox.value
    let boiler = `<div class="item" id="item">
    <i class="fa-solid fa-circle-check" id="grean"></i>
    <h4>${typedText}</h4>
    <i class="fa-solid fa-trash"></i>
   </div>`


    if (typedText == 0) {
        alert("Please insert a TO-do before submitting")
    } else {
        Body.innerHTML += boiler
        inputBox.value = ""
        Body.style.color = "black"
        toDo.push(typedText)
        localStorage.setItem("stored", JSON.stringify(toDo))
        if (toDo.length > 0) {
            Body.classList.remove("backgroundImage")
        }
    }

})

/* HANDLING THE CHECK TICK */
let tlick = document.getElementById("grean")

tlick.addEventListener('click',()=>{
   tlick.classList.add("greenTick")
})

