const sidebar = document.querySelector("#sidebar");
const collapseNav = document.querySelector(".collapse-nav");
const collapseNavX = document.querySelector("#collapse-nav-x")

sidebar.addEventListener('click', () =>{
    collapseNav.style.display="block";
})
collapseNavX.addEventListener('click', () =>{
    collapseNav.style.display="none";
    
})
collapseNavX.addEventListener('mouseenter', () =>{
    collapseNavX.style.transition = "0.4s";
    collapseNavX.style.transform="rotate(180deg)";
    
})
collapseNavX.addEventListener('mouseleave', () =>{
    collapseNavX.style.transition = "0.4s";
    collapseNavX.style.transform="rotate(-180deg)";
    
})
