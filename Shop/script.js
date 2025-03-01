const list=document.getElementById('list')
const totalprice=document.getElementById('totalprice')


function updateTotalPrice() {
    let totalPrice = 0;
    const items = list.querySelectorAll('#itemjs');
    items.forEach(function(item) {
        const quantity = parseInt(item.querySelector('#quantity').innerText);
        const price = parseFloat(item.querySelector('#pricetag').innerText);
        totalPrice += quantity * price;
    });
    totalprice.innerHTML = `Total Price: ${totalPrice}`;
}

function addtocart(item,price){
    const div=document.createElement('div')
    div.id='itemjs'
    div.innerHTML=` ${item}`
    list.appendChild(div)

    const addbtn=document.createElement('button')
    addbtn.id="addbtn"
    addbtn.innerText="+"
    div.appendChild(addbtn)

    const quantity=document.createElement('h4')
    quantity.innerText=1
    quantity.id='quantity'
    div.appendChild(quantity)
    

    

    const subbtn=document.createElement('button')
    subbtn.id="subbtn"
    subbtn.innerText="-"
    div.appendChild(subbtn)

    const removebtn=document.createElement('button')
    removebtn.innerHTML='Remove'
    removebtn.id='removebtn'
    div.append(removebtn)

    const pricetag=document.createElement('h4')
    pricetag.innerHTML=`${price}`
    pricetag.id='pricetag'
    div.appendChild(pricetag)

    updateTotalPrice()

    removebtn.addEventListener('click',function(){
        div.remove()
        updateTotalPrice()
    })

    addbtn.addEventListener('click',function(){
        quantity.innerText=parseInt(quantity.innerText)+1
        pricetag.innerHTML=quantity.innerText*`${price}`
        updateTotalPrice()
    })

    subbtn.addEventListener('click',function(){
        if (quantity.innerText>1) {
            quantity.innerText=`${parseInt(quantity.innerText)-1} `
            pricetag.innerHTML=pricetag.innerHTML-`${price}`
            updateTotalPrice()
            
        }
        
    })
    
    
   





}