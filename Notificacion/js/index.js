const conten = document.querySelectorAll('.contenedor');
const act = document.querySelectorAll('.iconA')
const hh= document.querySelectorAll('h2');
const icon = document.querySelector('.iconS');
const slai = document.querySelector('.slaider');
window.addEventListener('load',()=>{

    conten.forEach((contenedor, index) => {
        
       setTimeout(()=>{
            contenedor.style.opacity ='1'
            contenedor.style.transform = 'translateY(0)'
            icon.style.opacity = '1'
          },index * 500);
    });
  
})

conten.forEach((contenedores, index) => {
    contenedores.addEventListener('click',()=>{

        act[index].classList.toggle('activar')
            conten[index].classList.toggle('activar');
        hh[index].classList.toggle('activar');
})

});


icon.addEventListener('click',()=>{
    slai.classList.toggle('accion')
    icon.classList.toggle('accion');
});