//Animações
const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.anima')

elements.forEach((element)=>{
    myObserver.observe(element)
})

// Modo Dark

const toggle = document.getElementById('toogle');
let body = document.querySelector('body');
let particlesContainer = document.getElementById('particles-js');

// Função para alterar as cores das partículas e do fundo
function changeParticleColor(particleColor, backgroundColor) {
    pJSDom[0].pJS.particles.color.value = particleColor; // Altera a cor das partículas
    pJSDom[0].pJS.particles.line_linked.color = particleColor; // Altera a cor das linhas
    particlesContainer.style.backgroundColor = backgroundColor; // Altera a cor de fundo
    pJSDom[0].pJS.fn.particlesRefresh(); // Recarrega as partículas com as novas cores
}

// Efeito particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff" // Partículas brancas no modo escuro
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesContainer.style.backgroundColor = "#000"; // Fundo preto no modo escuro
changeParticleColor("#fff", "#000");

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')

    // Verifica se o modo dark está ativo
    if (body.classList.contains('dark-mode')) {
        changeParticleColor("#fff", "#000"); // Partículas brancas e fundo preto no modo dark
    } else {
        changeParticleColor("#000", "#e4e4e4"); // Partículas pretas e fundo claro no modo light
    }
})
