const button=document.getElementById('button')
const light=document.getElementById('light')

button.addEventListener('click',function(){
    if (light.style.backgroundColor==='gray' || light.style.backgroundColor === '' ) {
        light.style.backgroundColor='yellow'
        button.innerHTML='Turn OFF'
        
    }else{
        light.style.backgroundColor='gray'
        button.innerHTML='Turn ON'
    }
})