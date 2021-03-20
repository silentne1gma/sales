const modal = document.getElementsByClassName('modal')
const modalBtn = document.getElementsByClassName('modal-btn')
const close = document.getElementsByClassName('close-btn')
const table = document.getElementById("table")
const addBtn = document.getElementById('add-btn')
const err = document.getElementById('err')
const productName = document.getElementById("productName")

for(let i = 0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener('click', ()=>{
        modal[i].style.display = "flex"

        close[i].addEventListener('click', ()=>{
            modal[i].style.display = "none"
        })
    })
}


addBtn.addEventListener('click', ()=>{
    if (productName.value === ""){
        err.style.display = "flex"
        err.innerText = "Error: please fill the above input box"
    }
    else{
        // make a tr element
        const Name = document.createElement("td");
        Name.setAttribute('id', "nameOfProduct");
        Name.innerText = productName.value
        const numberOfSales = document.createElement("td");
        numberOfSales.setAttribute("id", "numberOfSales");
        // make a 2x btns + and - in the number sales div
        numberOfSales.innerHTML = "<button id='sub'>-</button> <p id='number'></p> <button id='add'>+</button>" 
        // make a td element that has the product name
        const tr = document.createElement('tr');
        table.appendChild(tr)
        tr.appendChild(Name)
        tr.appendChild(numberOfSales)
        productName.value = "";
        modal[1].style.display = "none"
        // add event listner to add or sustract a product
        const sub = document.getElementById('sub')
        const add = document.getElementById('add')
        const number = document.getElementById('number')     
        number.innerText = 0
        console.log(sub)
        console.log(number)
        sub.addEventListener('click', ()=>{
            number.innerText-=1
        })
        add.addEventListener('click', ()=>{
            console.log(number.innerText)
            number.innerText = parseInt(number.innerText) + 1
            console.log(number.innerText) 
        })
    }
})


