let gridConatiner = document.querySelector(".grid_conatiner");
let popularMovies2022 = document.querySelector(".popular_movies_2022");
let bestComedy = document.querySelector(".best_comedy");
let actionAndAdventure = document.querySelector(".action_and_adventure");
let leftArrow = document.querySelector(".left_arrow img");
let rightArrow = document.querySelector(".right_arrow img");

// let count = 0;
// function slider() {
//   for (let i = 0; i < popularMovies2022.children.length; i++) {
//     popularMovies2022.children[i].style.transform = `translateX(${-304 * count}px)`;
//   }
// }
// leftArrow.addEventListener("click", () => {
//   if (count > 0) {
//     count--;
//     slider();
//   } else {
//     count = 0;
//     slider();
//   }
// });
// rightArrow.addEventListener("click", () => {
//   if (count < popularMovies2022.children.length - 4) {
//     count++;
//     slider();
//   } else {
//     count = 0;
//     slider();
//   }
// });

// setInterval(() => {
//   if (count < popularMovies2022.children.length - 4) {
//     count++;
//     slider();
//   } else {
//     count = 0;
//     slider();
//   }
// }, 3000);

fetch("api/video-trailer.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.forEach((vid) => {
      gridConatiner.innerHTML += `
        <div class="grid_card">
        <video controls src="${vid.video}"></video>
        <p>${vid.title}</p>
        </div>
        `;
    });
  });
let imgPath = 'https://image.tmdb.org/t/p/w500';

fetch("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((movie) => {
      popularMovies2022.innerHTML += `
        <div class="swiper-slide first_movie_cards">
        <img src="${imgPath+movie.backdrop_path}">
        <p>${movie.title}</p>
        </div>
        `;
    });
  });

// fetch("api/comedy.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.forEach((movie) => {
//       bestComedy.innerHTML += `
//         <div class="first_movie_cards">
//         <img src="${movie.image}">
//         <p>${movie.title}</p>
//         </div>
//         `;
//     });
//   });

// fetch("api/action.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.forEach((movie) => {
//       actionAndAdventure.innerHTML += `
//         <div class="first_movie_cards">
//         <img src="${movie.image}">
//         <p>${movie.title}</p>
//         </div>
//         `;
//     });
//   });


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     // el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.right_arrow',
//     prevEl: '.left_arrow',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     // el: '.swiper-scrollbar',
//   },
// });


// const swiper2 = new Swiper(".mySwiper-1", {
//   autoplay: {
//       delay: 10000,
//       disableOnInteraction: false,
//   },
//   loop: true,
//   grabCursor: true,
//   navigation: {
//   nextEl: ".right_arrow",
//   prevEl: ".left_arrow",
//   },
//   spaceBetween: 30,
//   breakpoints: {
//       576: {
//           slidesPerView: 2,
          
//       },
//       992: {
//           slidesPerView: 3,
          
//       },
//       1140: {
//         slidesPerView: 4,
        
//     }
//   }
// });


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});