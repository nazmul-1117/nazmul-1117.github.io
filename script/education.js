function tabChanged(className){

    let tabLink = document.getElementsByClassName("educations-types");
    var tabContnts = document.getElementsByClassName("educations-content");

    for(let tabContent of tabContnts){
        tabContent.classList.remove("active-content");
        // tabContent.classList.remove("tab-content");
        // tabContent.classList.add("dd");
        // console.log(tabContent);
    }
    document.getElementById(className).classList.add("active-content");
    console.log("<-------> "+className);
}


const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetTab = document.getElementById(tab.dataset.tab);
        
        console.log(tab.dataset.tab)

        // Hide all tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Show the selected tab content
        targetTab.classList.add('active');

        // Deactivate all tabs
        tabs.forEach(t => {
            t.classList.remove('active');
        });

        // Activate the clicked tab
        tab.classList.add('active');
    });
});


// JavaScript for other sections (like smooth scrolling) can be added here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});