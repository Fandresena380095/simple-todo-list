const txtInput = document.getElementById("txtInput")
const addBtn = document.getElementById('addBtn')
let remBtn = document.getElementsByClassName('remBtn')
let ul = document.getElementById('ul')
const searchBar = document.getElementById('searchBar')

addBtn.addEventListener('click', verify)

function verify(e){
    e.preventDefault()
    if(txtInput.value){
        addList(e)
    } else {
        txtInput.placeholder = "Please add some tasks"
    }
}


function addList(e){
    e.preventDefault()
    let li = document.createElement('li')
    let txt = txtInput.value
    let txtNode = document.createTextNode(txt)
    li.className = 'li'

    let rb = document.createElement('button')
    rb.appendChild(document.createTextNode('X'))
    rb.className = 'remBtn'

    li.appendChild(txtNode)
    li.appendChild(rb)
    ul.appendChild(li)

    txtInput.value = ''
    txtInput.placeholder = ''
}

ul.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains("remBtn")){
        if(confirm('Are You Sure')){
            let li = e.target.parentElement
            let ul = document.getElementById('ul')

            ul.removeChild(li)
        }
    }
})


searchBar.addEventListener("keydown", (e)=> {
    let searchText = searchBar.value.toLowerCase()
    let liHtmlCollection = ul.getElementsByTagName('li')
    let liNode = Array.from(liHtmlCollection)

    liNode.forEach((item)=> {
        var match = item.firstChild.textContent;
        if(match.toLowerCase().indexOf(searchText)!=-1){
            item.style.display="flex"
        } else {
            item.style.display = "none"
        }
    })
})

