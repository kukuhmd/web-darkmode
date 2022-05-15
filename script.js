const body = document.querySelector("body"),
        sidebar = document.querySelector(".sidebar"),
        toogle = document.querySelector(".toogle"),
        searchBtn = document.querySelector(".search-box"),
        modeSwitch = document.querySelector(".toogle-switch"),
        modeText = document.querySelector(".mode-text");

        toogle.addEventListener("click", () =>{
            sidebar.classList.toggle("close");
        });

        searchBtn.addEventListener("click", () =>{
            sidebar.classList.remove("close");
        });

        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                modeText.innerText = "Light Mode";
            } else {
                modeText.innerText = "Dark Mode";
            }
        });

        $(".slider").owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });