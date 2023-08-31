   /////// ZOOOOOOMMMMMM      CODING  :

   const zoomImage = document.getElementById("zoomImage");

   const overlays2 = document.getElementsByClassName("overlay2");

   window.addEventListener("scroll", () => {
   
     // Calculate the scale based on scroll position
     console.log(window.scrollY);

     const scale = 1 + window.scrollY * -0.00012;

    
     // Limit the minimum scale to 0.9
   
     const minScale = 0.94;
   
     const effectiveScale = Math.max(scale, minScale);
   
     console.log(effectiveScale);

     const darkness = (1 - effectiveScale) * 10 ;

     console.log(darkness);



     // Apply the scale transform to the image
   
    if(window.scrollY > 100){
     zoomImage.style.transform = `scale(${effectiveScale})`;
     overlays2[0].style.opacity = darkness;
     overlays2[1].style.opacity = darkness;
     overlays2[2].style.opacity = darkness;
     overlays2[3].style.opacity = darkness;
}
   });