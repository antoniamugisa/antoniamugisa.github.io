var sidemenu = document.getElementById("sidemenu");
function  openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxshS_3ehRLAy9SsIY4Uu8gAUCAfqQ-948BN4eDi3JcrlkFYywlZgnmzH9Zz0nv1DTR4Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function (){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
    
})

const preloader = document.querySelector('.preloader');

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        preloader.classList.add('display-none');
    }, 2000);
})
