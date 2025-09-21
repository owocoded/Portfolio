
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#nav");
    const navBtn = document.querySelector("#nav-btn");
    const closeBtn = document.querySelector("#close-btn");
    const sidebar = document.querySelector("#sidebar");

    // add fixed class to navbar
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 80) {
                navbar.classList.add("navbar-fixed");
            } else {
                navbar.classList.remove("navbar-fixed");
            }
        });
    }

    // show sidebar
    if (navBtn && sidebar) {
        navBtn.addEventListener("click", function () {
            sidebar.classList.add("show-sidebar");
        });
    }
    if (closeBtn && sidebar) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("show-sidebar");
        });
    }
});