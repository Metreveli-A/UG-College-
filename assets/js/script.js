window.onscroll=function(){

    if(window.scrollY>150){

            document.getElementsByClassName('navbar')[0].classList.add('navonscroll')

            document.getElementsByClassName('bx-home')[0].classList.add('navonscroll-menucolor')

            let  navLinks=document.getElementsByClassName('nav-link')


                for(let i=0; i<navLinks.length ; i++){

                    navLinks[i].classList.add('navonscroll-menucolor')
                }


    }else{

        document.getElementsByClassName('navbar')[0].classList.remove('navonscroll')

        document.getElementsByClassName('bx-home')[0].classList.remove('navonscroll-menucolor')

        let  navLinks=document.getElementsByClassName('nav-link')


            for(let i=0; i<navLinks.length ; i++){

                navLinks[i].classList.remove('navonscroll-menucolor')
            }



    }


};

$(function(){
    document.onmousedown=function(event){
        if(event.path[0].classList.value=='bi bi-caret-left'){
          
            event.path[0].classList.remove('bi-caret-left') 
            event.path[0].classList.add('bi-caret-left-fill')     

        }

        if(event.path[0].classList.value=='bi bi-caret-right'){

            event.path[0].classList.remove('bi-caret-right') 
            event.path[0].classList.add('bi-caret-right-fill') 

        }

        
    }


    document.onmouseup=function(event){
        if(event.path[0].classList.value=='bi bi-caret-left-fill'){

            event.path[0].classList.remove('bi-caret-left-fill') 
            event.path[0].classList.add('bi-caret-left')  
           
        }

        if(event.path[0].classList.value=='bi bi-caret-right-fill'){

            event.path[0].classList.remove('bi-caret-right-fill') 
            event.path[0].classList.add('bi-caret-right') 
        }

         
    }


});
function send(){
    Swal.fire({
        title: 'Sent Succesfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })


};
function openCity(evt, cityName) {

    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";


    let sectionHeight=document.getElementsByClassName('dynamicContent')[0].offsetHeight+380

    document.getElementsByClassName('mainContent')[0].style.minHeight=sectionHeight+'px'
     
     if(cityName=='settings'){

        document.getElementById('uploadPic').style.display='block'

     }else {

        document.getElementById('uploadPic').style.display='none'

     }


  };




  $(function(){
 var elements=document.getElementsByClassName('row-top')
 


            if( window.innerWidth<=1006){

    
        for(let i=0; i<elements.length; i++){


                elements[i].classList.remove('position-absolute')


        }




            }else {
                        for(let i=0; i<elements.length; i++){


                        elements[i].classList.add('position-absolute')


                        }




            }
 


     window.addEventListener('resize',function(e){
     
         if(e.currentTarget.outerWidth<=1006){

    
                    for(let i=0; i<elements.length; i++){


                            elements[i].classList.remove('position-absolute')


                    }




         }else {
            for(let i=0; i<elements.length; i++){


                elements[i].classList.add('position-absolute')


        }




         }


     })




 



  })




 