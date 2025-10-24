// Efectos interactivos mejorados para los nuevos fondos
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll en el header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Cursor personalizado cyberpunk
    initCyberCursor();
    
    // Efectos de partículas digitales
    initDigitalParticles();
    
    // Efectos de scanning
    initScanningEffects();
    
    // Efectos de sonido cyberpunk (opcional)
    initCyberSoundEffects();
});

function initCyberCursor() {
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    cursor.className = 'cyber-cursor';
    cursorFollower.className = 'cursor-follower';
    
    // Estilos para el cursor cyberpunk
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--cyber-gradient);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
    `;
    
    cursorFollower.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid #00f5ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(0, 245, 255, 0.6);
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateCursor() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Efectos hover mejorados
    const interactiveElements = document.querySelectorAll('button, a, .menu nav ul li a, article, .container-aside aside');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'var(--neon-gradient)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.borderColor = '#00ff87';
            cursorFollower.style.boxShadow = '0 0 30px rgba(0, 255, 135, 0.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--cyber-gradient)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.borderColor = '#00f5ff';
            cursorFollower.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.6)';
        });
    });
}

function initDigitalParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'digital-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    
    // Crear partículas digitales
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createDigitalParticle(particlesContainer);
        }, i * 200);
    }
    
    // Continuar creando partículas
    setInterval(() => {
        if (particlesContainer.children.length < 30) {
            createDigitalParticle(particlesContainer);
        }
    }, 1500);
}

function createDigitalParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 1;
    const duration = Math.random() * 15 + 10;
    const colors = ['#00f5ff', '#00ff87', '#8a2be2', '#ff00ff', '#60efff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        animation: digitalFloat ${duration}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 3}px ${color};
        opacity: ${Math.random() * 0.6 + 0.2};
    `;
    
    container.appendChild(particle);
    
    // Agregar keyframes dinámicamente
    if (!document.querySelector('#digital-float')) {
        const style = document.createElement('style');
        style.id = 'digital-float';
        style.textContent = `
            @keyframes digitalFloat {
                0% {
                    transform: translate(0, 0) rotate(0deg) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) rotate(360deg) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remover partícula después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, (duration) * 1000);
}

function initScanningEffects() {
    // Crear efecto de scanning lines
    const scanLines = document.createElement('div');
    scanLines.className = 'scan-lines';
    scanLines.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 245, 255, 0.05) 2px,
            rgba(0, 245, 255, 0.05) 4px
        );
        pointer-events: none;
        z-index: 9997;
        animation: scanMove 2s linear infinite;
    `;
    document.body.appendChild(scanLines);
    
    // Agregar keyframes para scanning
    if (!document.querySelector('#scan-animation')) {
        const style = document.createElement('style');
        style.id = 'scan-animation';
        style.textContent = `
            @keyframes scanMove {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 0 100px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function initCyberSoundEffects() {
    // Efectos de sonido cyberpunk (implementación básica)
    const buttons = document.querySelectorAll('button, .menu nav ul li a');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Crear efecto de pulso digital
            createDigitalPulse(e);
        });
        
        button.addEventListener('mouseenter', () => {
            // Efecto visual de hover (sin sonido)
            button.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.8)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '';
        });
    });
}

function createDigitalPulse(event) {
    const button = event.currentTarget;
    const pulse = document.createElement('div');
    const rect = button.getBoundingClientRect();
    
    pulse.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--cyber-gradient);
        border-radius: inherit;
        opacity: 0;
        animation: digitalPulse 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(pulse);
    
    setTimeout(() => {
        pulse.remove();
    }, 600);
}

// Agregar keyframes para el pulso digital
if (!document.querySelector('#digital-pulse')) {
    const style = document.createElement('style');
    style.id = 'digital-pulse';
    style.textContent = `
        @keyframes digitalPulse {
            0% {
                opacity: 0.8;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(1.2);
            }
        }
    `;
    document.head.appendChild(style);
}

// Efectos de scroll para elementos
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('article, .container-aside aside').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Inicializar animaciones de scroll
initScrollAnimations();