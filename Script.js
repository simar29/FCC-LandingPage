window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    
  if (document.documentElement.scrollTop > 80) {
   
    document.getElementById("logo-container").style.display = "none";
    document.getElementById("site-title").style.color="#222b7b";
    document.getElementById("header-container").style.backgroundColor = "white";
    var all = document.getElementsByClassName("nav-link");
    for(i=0; i<all.length ; i++)
    {
      all[i].style.fontSize="1.8rem";
        all[i].style.color="#222b7b";
    } 
}
  
  else {
        document.getElementById("logo-container").style.display = "flex";
        document.getElementById("site-title").style.color="transparent";
        document.getElementById("header-container").style.backgroundColor = "";

        var all = document.getElementsByClassName("nav-link");
        for(i=0; i<all.length ; i++)
        {
            all[i].style.color="white";
        } 
  }
}