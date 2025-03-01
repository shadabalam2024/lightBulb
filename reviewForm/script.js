const reviewbox=document.getElementById('reviewbox')
const submit=document.getElementById('submit')
const itemlist=document.getElementById('itemlist')
const name=document.getElementById('name')
const contact=document.getElementById('contact')


function add(){
    // const val=reviewbox.value
    const li=document.createElement('li')
    // li.innerText
    li.innerText='Name of user: '+name.value+'\n'+'User Contact: '+contact.value+'\n'+'review: '+reviewbox.value
    itemlist.appendChild(li)
    reviewbox.value=' '
    name.value=''
    contact.value=""
    reviewbox.focus()

}

submit.addEventListener('click',function(){
    add()
})
