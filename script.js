//MENU
let navegar = document.querySelectorAll('.navegar')

    function link(indice){
        console.log(indice)

        //PERCORRER OS ELEMENTOS E DESATIVAR TODOS ANTES DE ATIVAR O CORRETO
        for(let i=0; i<navegar.length; i++)
            {
            if(navegar[i].classList.contains('navegar-active')){
                navegar[i].classList.remove('navegar-active')
            }
            }

        //ATIVAR O ELEMENTO CORRETO RECEBIDO NA FUNÇÃO
    navegar[indice].classList.add('navegar-active')
}
// READ MORE
let consultar = document.querySelector('.consultar')

    function consult(){
        console.log()

        consultar.classList.toggle("consultar-active")

    }

//NEW
let miniTitle = document.querySelectorAll('.miniTitle')

    function newNoticia(not){
        console.log(not)

        //PERCORRER OS ELEMENTOS E DESATIVAR TODOS ANTES DE ATIVAR O CORRETO
        for(let n=0; n<miniTitle.length; n++)
        {
            if(miniTitle[n].classList.contains('miniTitle-active')){
                miniTitle[n].classList.remove('miniTitle-active')
            }
        }

        //ATIVAR O ELEMENTO CORRETO RECEBIDO NA FUNÇÃO
    miniTitle[not].classList.add('miniTitle-active')
    }
//BOX DE NOTICIAS 1 , 2 ,3 

let titleBox = document.querySelectorAll('.titleBox')

    function box(bn){
        console.log(bn)

        //PERCORRER OS ELEMENTOS E DESATIVAR TODOS ANTES DE ATIVAR O CORRETO
        for(let bn=0; bn<titleBox.length; bn++)
        {
            if(titleBox[bn].classList.contains('titleBox-active')){
                titleBox[bn].classList.remove('titleBox-active')
            }
        }

        //ATIVAR O ELEMENTO CORRETO RECEBIDO NA FUNÇÃO
        titleBox[bn].classList.add('titleBox-active')
    }








