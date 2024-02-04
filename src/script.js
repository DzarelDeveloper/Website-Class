const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }  
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  })

  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  var typed = new Typed('.typing', {
  strings: [
    "Setiap hari adalah kesempatan baru untuk belajar dan berkembang.",
    "Ketika kamu merasa sulit, itu berarti kamu sedang menghadapi peluang untuk tumbuh.",
    "Pendidikan adalah bekal, dan setiap pelajaran adalah langkah mendekati impianmu.",
    "Jangan pernah meremehkan kekuatan kegigihanmu dalam belajar.",
    "Kamu tidak bisa mengubah masa lalu, tapi kamu bisa merancang masa depanmu melalui pendidikanmu.",
    "Kesuksesan tidak hanya tentang tujuan akhir, tetapi tentang perjalanan dan usaha yang kamu lakukan.",
    "Raihlah pengetahuan sebanyak mungkin, karena itu adalah kunci untuk membuka pintu peluang.",
    "Jadilah pelajar seumur hidup; dunia selalu penuh dengan hal-hal baru untuk dipelajari.",
    "Percayalah pada potensimu, karena setiap langkah kecilmu membawamu lebih dekat pada impianmu.",
    "Kegagalan hanyalah bahan bakar untuk kesuksesan yang lebih besar di masa depan."
  ],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true,
})

  // this is really cool
  // but you should vote Mikuni first

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });

})


// back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var backButton = document.getElementById("back-to-top");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
  } else {
      backButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function fetchData() {
        fetch('https://api.statcord.com/v3/884467910494535741').then(response => {
                return response.json();
        }).then(data => {
                console.log(data.data[0].servers);
                document.querySelector('#server-count').innerHTML = `<h4>${data.data[0].servers}`
                console.log(data.data[0].users);
                document.querySelector('#user-count').innerHTML = `<h4>${data.data[0].users}`
        console.log(data.data[0].users);
                document.querySelector('#cmd-count').innerHTML = `<h4>${data.data[0].commands}`
                // console.log(data.popular);
                // if (data.popular[0].name === "help") {
                //         return document.querySelector('#most-pop-cmd').innerHTML = `<h4>Most Used Command</h4><br /><p>e!${data.popular[1].name}</p>`
                // } else {
                //         return document.querySelector('#most-pop-cmd').innerHTML = `<h4>Most Used Command</h4><br /><p>e!${data.popular[0].name}</p>`
                // }
        }).catch(error => {
                console.log(error);
        });
}

fetchData();

// Daftar negara
var countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function populateCountries() {
    var countryDropdown = document.querySelector("#country");

    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.value = countries[i];
        option.text = countries[i];
        countryDropdown.add(option);
    }
}

window.onload = function () {
    populateCountries();
};

function sendwhatsapp() {
    var phonenumber = "+6288210982908";

    var name = document.querySelector("#name").value;
    var country = document.querySelector("#country").value;
    var message = document.querySelector("#message").value;

    // Validasi input
    if (!name || !country || !message) {
        alert("Please fill in all.");
        return;
    }

    // Clearing input fields
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";

    var url = "https://wa.me/" + phonenumber + "?text=" +
        "*Name :* " + name + "%0a" +
        "*Country:* " + country + "%0a" +
        "*Message :* " + message +
        "%0a%0a" +
        "@ExposeNine";

    window.open(url, '_blank').focus();
}