   /////// ZOOOOOOMMMMMM      CODING  :

   const zoomImage = document.getElementById("zoomImage");

   window.addEventListener("scroll", () => {
   
     // Calculate the scale based on scroll position
     console.log(window.scrollY);
     const scale = 1 + window.scrollY * -0.00012;
    
   
     /*console.log(window.scrollY);
     console.log(scale);
   */
     // Limit the minimum scale to 0.9
   
     const minScale = 0.94;
   
     const effectiveScale = Math.max(scale, minScale);
   
     console.log(effectiveScale);
     // Apply the scale transform to the image
   
    if(window.scrollY > 100){
     zoomImage.style.transform = `scale(${effectiveScale})`;
     
  } 
   });