document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.dark-mode-checkbox');

  checkbox.checked = localStorage.getItem('darkMode') === 'true';

  checkbox.addEventListener('change', function (event) {
    if (event.currentTarget.checked === true) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.removeItem('darkMode');
    }
  });
});