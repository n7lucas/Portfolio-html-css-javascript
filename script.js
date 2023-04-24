



/** Toggle menu hide/show stuff */
function toggleMenu () {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/** Change Language Stuff */

function loadLanguage(language) {
    fetch(`/${language}.json`)
      .then(response => response.json())
      .then(data => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
          const key = element.dataset.i18n;
          element.textContent = data[key];
        });
      });
  }
  loadLanguage("pt"); //Initialize as pt

  //Desktop version
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', () => {
    const language = languageSelect.value;
    loadLanguage(language);
  });

  //Responsive Version
  const languageSelect2 = document.getElementById('language-select2');
  languageSelect2.addEventListener('change', () => {
    const language = languageSelect2.value;
    loadLanguage(language);
  });


  

  const languageradio = document.querySelectorAll('input[type="radio"][name="language"]');
  let selected;
  for (radio of languageradio){
    radio.addEventListener("change", () => {
        selected = radio.value
        console.log(selected)
    })
  }

  /** Toggle Page color Stuff */



  const radiocolor = document.getElementById('togglecolor');
  radiocolor.addEventListener('change', () => {
  const elements = document.querySelectorAll('.toggleclass');
  elements.forEach((element) => {
    element.classList.toggle('backblack')
  })
  })


  const radiocolor2 = document.getElementById('togglecolor2');
  radiocolor2.addEventListener('change', () => {
    const elements = document.querySelectorAll('.toggleclass');
    elements.forEach((element) => {
      element.classList.toggle('backblack')
    })
    })





  function startwhite(){
    const elements = document.querySelectorAll('.toggleclass');
  elements.forEach((element) => {
    element.classList.remove('backblack')
  })}
  startwhite()

  
  /*
document.getElementById('darkbtn').addEventListener('click', () => {
  const elements = document.querySelectorAll('.toggleclass');

  elements.forEach((element) => {
    element.classList.toggle('backblack')
  })
})

  */