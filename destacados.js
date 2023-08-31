const pages = document.querySelectorAll(".page");


let currentIndex= 0; ///for the slides
 
 let current = 100;   /// for the dark overlay


 //identify the back button element

 const flecha = document.getElementById("flecha");

 let rotation = 0
   


const slide = ()=>{
//
if (currentIndex === pages.length - 1 ){

  rotation += 180;

  flecha.style.transform= `rotate(${rotation}deg)`;

       back();}

       else{


   //move the darkie square 1 grade deaper
   
     document.getElementById('darkie').style.zIndex = (current - 1);  
     current = (current - 1);

    

    
    pages[currentIndex].style.left= '-100%'; /*slides the page to the left*/ 


    pages[currentIndex + 1].style.left= '-120px';/*makes current page stand a little left fo us to see the next*/ 


        console.log(currentIndex);

        //increment index

        currentIndex = currentIndex + 1;

        //ROTATE ARROW LOGO IN LAST SLIDE

console.log(currentIndex);

        if (currentIndex === pages.length - 1 ){
          
          rotation += 180;
          flecha.style.transform= `rotate(${rotation}deg)`;}
          }}


function mOver() {
   pages[currentIndex].style.left= '-180px';
  };
  
  function mOut() {
    pages[currentIndex].style.left= '-120px';  };


    function back(){
      
     

        //reset index and pages positions
        currentIndex = 0;
        pages[0].style.left ="-100px";
        pages[1].style.left="0";
        pages[2].style.left="0";
        pages[3].style.left="0";

        //reset darkie z-indes and current
    
          function resetDarkie(){
            current = 100;
            document.getElementById('darkie').style.zIndex= current;
                                }
            setTimeout(resetDarkie, 1000);   
                    
        };
        

     
    


   










 


