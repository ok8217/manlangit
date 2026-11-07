const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');

if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
}

if(themeBtn){
    themeBtn.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode');
    });
}

