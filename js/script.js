$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],
      autoplay:true,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:2
          },

          1000:{
              items:5
          }
      }
  });
});



// const myCity = {
//   city: 'Kyiv',
//   country: 'Ukraine',
//   popular: true,
//   ppulation: 3000000
// }

// console.log(myCity.ppulation)

// myCity.ppulation = 2500000

// console.log(myCity)

// const COUNTRIES = myCity

// delete myCity.country

// console.log(COUNTRIES)

// myCity['region'] = centre

// console.log(myCity)

