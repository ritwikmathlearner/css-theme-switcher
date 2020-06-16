document.getElementById('change-theme').addEventListener('click', e => {
    e.preventDefault();
    const themeSelector = document.getElementById('change-theme');
    const body = document.querySelector('body');

    if(body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        themeSelector.innerHTML = 'light';
    } else {
        body.classList.replace('dark', 'light');
        themeSelector.innerHTML = 'dark';
    }
});