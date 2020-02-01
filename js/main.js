

// Get Page Ids

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');


// Swiper Configuration
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: false,
    direction: 'vertical',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {

        if(current == 1){
          home.classList.add('active');
        }
        else{
          home.classList.remove('active');
        }
        if(current == 2){
          about.classList.add('active');
        }
        else{
          about.classList.remove('active');
        }
        if(current == 3){
          contact.classList.add('active');
        }
        else{
          contact.classList.remove('active');
        }

    }
    },
  });


  // Navigation Code

  function handleNavigateToHome() {
    mySwiper.slideTo(0, 600);
  }

  function handleNavigateToAbout() {
    mySwiper.slideTo(1, 600);
  }

  function handleNavigateToContact() {
    mySwiper.slideTo(2, 600);
  }


  home.addEventListener("click", handleNavigateToHome);
  about.addEventListener("click", handleNavigateToAbout);
  contact.addEventListener("click", handleNavigateToContact);


