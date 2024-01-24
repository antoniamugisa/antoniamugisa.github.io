var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function  openmenu(){
    sidemenu.style.right = "0";
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

/** lading screen **/

document.addEventListener("DOMContentLoaded", function () {
    const counter3  = document.querySelector(".counter-3");

    for (let i = 0; i < 2;i++) {
        for (let  j = 0; j < 10; j++) {
            const div = document.createElement("div")
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").
            clientHeight;
        const totalDistance =
            (counter.querySelectorAll(".num").length - 1) *
            numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        })
    }
    animate(counter3, 0);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".digit", {
        top: "-150px",
        stagger: {
            amount: 0.25,
        },
        delay: 6,
        duration: 1,
        ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
        width: 0,
        duration: 6,
        ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
        width: 0,
        delay: 1.9,
        duration: 6,
        ease: "power2.inOut",
    });

    gsap.to(".loader", {
        background: "none",
        delay: 6,
        duration: 0.1,
    });

    gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6,
    })

    gsap.to(".loader-2", {
        x: -75,
        y: 75,
        duration: 0.5,
    },
        "<"
    );
})