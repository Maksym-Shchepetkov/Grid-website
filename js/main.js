const select = document.querySelector('.miss-nav-sel');

select.addEventListener('change', function () {
  const selectedValue = this.value;

  if (selectedValue !== 'placeholder') {
    console.log('Value:', selectedValue);

    this.selectedIndex = 0;
  }
});
