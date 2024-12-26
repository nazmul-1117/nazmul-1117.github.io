function toggleMenuBar() {
    // let icon = document.getElementsByClassName("icon-bars");
    // let menuList = document.getElementsByClassName("menu-list");
    
    let icon = document.querySelector(".icon-bars");
    let menuList = document.querySelector(".menu-list");

    menuList.classList.toggle('show-data'); 
    // console.log("xxx");
    console.log(menuList);
    
    
}