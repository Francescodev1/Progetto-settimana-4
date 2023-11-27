document.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");
    let tasto = document.querySelector(".tasto:last-child");
  
    
    let scrollPosition = window.scrollY;
    
    let windowHeight = window.innerHeight;
    let percentageToChangeColor = 140;

    
    let scrollPercentage = (scrollPosition / (document.body.clientHeight - windowHeight)) * 100;
  
    
    if (scrollPercentage > percentageToChangeColor) {
      
      navbar.style.backgroundColor = "white";
      
      tasto.style.backgroundColor = "#1a8917";
      tasto.style.color = "white";
    } else {
     
      navbar.style.backgroundColor = "";
      tasto.style.backgroundColor = "";
      tasto.style.color = "";
    }
  });