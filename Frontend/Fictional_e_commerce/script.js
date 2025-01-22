const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark')? 'dark' :'light');
});

if(localStorage.getItem('theme')=== 'dark'){
    document.documentElement.classList.add('dark');
}