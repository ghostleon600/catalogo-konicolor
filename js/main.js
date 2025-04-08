document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año del copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Productos dinámicos
    const products = [
        {
            img: "images/album_young.png",
            alt: "Photobook",
            title: "Photobook",
            desc: "Álbumes fotográficos personalizados de alta calidad",
            link: "https://konicolor.com.co/categoria-producto/photobooks/"
        },
        {
            img: "images/mdf.webp",
            alt: "MDF",
            title: "Cuadros en MDF",
            desc: "Impresiones duraderas en madera MDF",
            link: "https://konicolor.com.co/producto/mdf/"
        },
        {
            img: "images/sublimacion.webp",
            alt: "Sublimación",
            title: "Sublimación",
            desc: "Impresión por sublimación en diversos materiales",
            link: "https://konicolor.com.co/categoria-producto/sublimacion/"
        },
        {
            img: "images/imprrecion.webp",
            alt: "Impresión de Fotos",
            title: "Impresión de Fotos",
            desc: "Impresión fotográfica profesional",
            link: "https://konicolor.com.co/producto/impresion-fotografica/"
        },
        {
            img: "images/Rigidos.jpeg",
            alt: "Impresión en Rígidos",
            title: "Impresión en Rígidos",
            desc: "Impresiones de alta calidad en materiales rígidos",
            link: "https://konicolor.com.co"
        },
        {
            img: "images/DTFUV.jpg",
            alt: "Impresión en DTF UV",
            title: "Impresión en DTF UV",
            desc: "Impresión DTF y UV de última generación",
            link: "https://konicolor.com.co"
        },
        {
            img: "images/carnet.webp",
            alt: "Carnets",
            title: "Carnets",
            desc: "Carnets de identificación personalizados",
            link: "https://konicolor.com.co/producto/carne-carnet-empresarial/"
        }
    ];

    const grid = document.querySelector('.grid-productos');
    products.forEach(product => {
        grid.innerHTML += `
            <div class="producto">
                <img src="${product.img}" alt="${product.alt}" loading="lazy">
                <h3>${product.title}</h3>
                <p>${product.desc}</p>
                <a href="${product.link}" target="_blank" rel="noopener" class="btn">Ver más</a>
            </div>
        `;
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil
            const menu = document.querySelector('.menu');
            menu.classList.remove('active');
        });
    });


    // Toggle del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

if (menuToggle && closeMenu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    });
    
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    });
    
    // Cerrar al hacer clic en enlace
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

    // Efecto de carga para imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = 1;
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = 1;
            });
        }
    });
});