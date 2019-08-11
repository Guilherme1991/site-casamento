let select = document.querySelector('.menu')
let fixo = document.querySelector('#fixed')
let logo = document.querySelector('.logo img')
let topo = document.querySelector('.top')
function ativa(){
    select.classList.toggle('ativa')
}

window.addEventListener('scroll', ()=>{
    if(this.scrollY >= 1){
        fixo.classList.add('fixo')
        logo.setAttribute('style','width: 150')
        topo.setAttribute('style','height: 150')
    }else{
        fixo.classList.remove('fixo')
        logo.setAttribute('style','height: 100')
        topo.setAttribute('style','height: 100')
     }
})
   
