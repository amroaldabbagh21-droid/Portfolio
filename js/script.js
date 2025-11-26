const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEL.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEL.style.display = 'none';
    }, 200);
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
const toggleSearch = () => {
  const searchForm = document.querySelector('.search-form');
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');

  searchButton.addEventListener('click', () => {
    searchForm.classList.toggle('active-search');
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchInput.value = '';
      searchForm.classList.remove('active-search');
    }
  });
};

toggleSearch();

const currentYear = new Date().getFullYear();
// toon huidige jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;

