(function () {
'use strict'

const slider =document.querySelector('.slider')
const a =document.querySelectorAll('a')


a.forEach( ( Cadaa , i )=>{
    a[i].addEventListener('click', ()=>{

        let posicion = 1
        let operacion = posicion * -50

        slider.style.trasform = 'traslateX (${operation}%)'

        a.forEach( (Cadaa , i )=>{
            a[i].classlist.remove('slider-nav--active')

        })
        a[i].classlist.add('slider-nav--active')


        

    })

        
})

})
