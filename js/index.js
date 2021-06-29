//

function productBox1() {
    document.getElementById("productbox1").src="img/v-yaka-potikare-elbise-mavi-92-c9a.jpg"
}
function productBox1out() {
    document.getElementById("productbox1").src="img/p1.jpg"
}

//
function productBox2() {
    document.getElementById("productbox2").src="img/p2.jpg"
}
function productBox2out() {
    document.getElementById("productbox2").src="img/sirt-baglama-cicekli-bluz-beyaz-6-ad6f.jpg"
}



document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
}); 
// DOMContentLoaded  end


document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end



    function darken_screen(yesno){
        if( yesno == true ){
          document.querySelector('.screen-darken').classList.add('active');
        }
        else if(yesno == false){
          document.querySelector('.screen-darken').classList.remove('active');
        }
      }
          
      function close_offcanvas(){
        darken_screen(false);
        document.querySelector('.mobile-offcanvas.show').classList.remove('show');
        document.body.classList.remove('offcanvas-active');
      }
      
      function show_offcanvas(offcanvas_id){
        darken_screen(true);
        document.getElementById(offcanvas_id).classList.add('show');
        document.body.classList.add('offcanvas-active');
      }
      
      document.addEventListener("DOMContentLoaded", function(){
        
        document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
          let offcanvas_id = everyelement.getAttribute('data-trigger');
          everyelement.addEventListener('click', function (e) {
            e.preventDefault();
                show_offcanvas(offcanvas_id);
          });
        });
      
        document.querySelectorAll('.btn-close').forEach(function(everybutton){
          everybutton.addEventListener('click', function (e) { 
                close_offcanvas();
            });
        });
      
        document.querySelector('.screen-darken').addEventListener('click', function(event){
          close_offcanvas();
        });
      
      }); 
      // DOMContentLoaded  end