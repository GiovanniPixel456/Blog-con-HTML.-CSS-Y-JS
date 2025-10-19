// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que el elemento existe antes de agregar el event listener
    const iconMenu = document.getElementById("icon-menu");
    
    if (iconMenu) {
        iconMenu.addEventListener("click", mostrar_menu);
    } else {
        console.error("Elemento #icon-menu no encontrado");
    }
});

function mostrar_menu() {
    const moveContent = document.getElementById("move-content");
    const showMenu = document.getElementById("show-menu");
    
    if (moveContent && showMenu) {
        moveContent.classList.toggle('move-container-all');
        showMenu.classList.toggle('show-lateral');
        
        // Cambiar icono cuando el menú está abierto/cerrado
        const icon = document.querySelector("#icon-menu i");
        if (showMenu.classList.contains('show-lateral')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Cerrar menú al hacer clic en un enlace (en móviles)
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Solo cerrar el menú en dispositivos móviles
            if (window.innerWidth <= 800) {
                const moveContent = document.getElementById("move-content");
                const showMenu = document.getElementById("show-menu");
                const icon = document.querySelector("#icon-menu i");
                
                if (moveContent && showMenu) {
                    moveContent.classList.remove('move-container-all');
                    showMenu.classList.remove('show-lateral');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
});