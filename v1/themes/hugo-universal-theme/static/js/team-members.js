const membersSlider = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    grabCursor: true,
    centeredSlides: true,
    fade: true,
    loop: true,
    slideActiveClass: "swiper-slide-active",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 5,
        },
    },
});

// select all sub-teams in the page
const subTeams = document.querySelectorAll(".sub-team");

// select all buttons in the page that have team-button class
const buttons = document.querySelectorAll(".team-button");

// add event listener to all buttons where click on it call function show
buttons.forEach((button) => button.addEventListener("click", show));

function show() {
    const subTeamId = this.innerText.toLowerCase().split(" ").join("-");
    // add class hide to all sub-teams
    subTeams.forEach((subTeam) => {
        subTeam.id !== subTeamId
            ? subTeam.classList.add("hide")
            : subTeam.classList.remove("hide");
    });

    // document.querySelector(`#${sectionId}`).classList.add('show');
}

console.log("hello from team-members.js");
