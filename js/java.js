const namee = document.getElementById(`namee`)
const surname = document.getElementById(`surname`)
const tel = document.getElementById(`tel`)

const btn = document.getElementById(`btn`)
// ------------------------------------------

const agregar = () =>{
    const person = {
        id: Math.random(1, 100),
        namee: namee.value,
        surname: surname.value,
        tel: tel.value
    }

    localStorage.setItem(person.id, JSON.stringify(person))

    location.href = `/`
}


const getLocal = () =>{
    const list = document.getElementById(`list`)
    const keysLocal = Object.keys(localStorage)
    const fragment = document.createDocumentFragment()

    if(keysLocal.length==0){
        const li = document.createElement(`LI`)
        li.textContent = `NO HAY USUARIOS AGREGADOS`
        li.classList.add(`element`, `element__red`)
        list.appendChild(li)
    }else{
        for(key of keysLocal){

            const objetPerson = JSON.parse(localStorage.getItem(key))
    
            const div = document.createElement(`div`)
            const li1 = document.createElement(`li`)
            const li2 = document.createElement(`li`)
            const li3 = document.createElement(`li`)
            const li4 = document.createElement(`li`)
    
            div.classList.add(`element`)
            li1.classList.add(`element__date`)
            li2.classList.add(`element__date`)
            li3.classList.add(`element__date`)
            li4.classList.add(`element__date`, `element__date--delete`)
    
    
    
            li1.textContent = objetPerson.namee
            li2.textContent = objetPerson.surname
            li3.textContent = objetPerson.tel
            li4.textContent = `X`
    
            div.appendChild(li1)
            div.appendChild(li2)
            div.appendChild(li3)
            div.appendChild(li4)
    
            fragment.appendChild(div)
    
            li4.addEventListener(`click`, ()=>{
                list.removeChild(div)
                localStorage.removeItem(objetPerson.id)
                location.href = "/"
                // Si lo agregamos acà AL LOCATION siempre que eliminemos actualiza
                // cosa que antes no pasaba. VER!
            })
        }
    }

    list.appendChild(fragment)
    // console.log(`La cantidad de personas registradas en local es ${keysLocal.length}`)
}


btn.addEventListener(`click`, ()=>{
    if(namee.value==`` || surname.value==`` || tel.value==``){
        alert(`Alguno de los datos no fue ingresado`)
    }else{
        agregar()
    }

})



getLocal()









