const pages = document.querySelectorAll(".page");

const overlays = document.getElementsByClassName("overlay");

let currentIndex= 0; ///for the slides
 
//identify the arrow image

 const flecha = document.getElementById("flecha");

 let rotation = 0 ;
   
const slide = ()=>{

// Rotate again in the first slide

if (currentIndex === pages.length - 1 ){

  rotation += 180;


  flecha.style.transform= `rotate(${rotation}deg)`;

       back();}

       else{

    
    pages[currentIndex].style.left= '-100%'; /*slides the page to the left*/ 


    pages[currentIndex + 1].style.left= '-120px';/*makes current page stand a little left fo us to see the next*/ 


        console.log(currentIndex);

        //increment index

        currentIndex = currentIndex + 1;

        /// remove opacity of incoming slide

        overlays[currentIndex].style.opacity = "0";

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

      //reset overlays opacity
        overlays[1].style.opacity = 0.5;
        overlays[2].style.opacity = 0.5;
        overlays[3].style.opacity = 0.5; 
    }



      

     
    


   










 


