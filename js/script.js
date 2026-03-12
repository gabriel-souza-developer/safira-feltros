// Banco de Dados do Portfólio (Categorias Ajustadas)
// URLs de imagens alteradas para links diretos super estáveis
const portfolio =[
    { 
        titulo: "Chaveiro Mundo", 
        categoria: "Chaveiros", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/517186857_18505086829027893_6248664956362143167_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY3MTc4MDQ2NjQwNDg2MDA5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=IL2nuh_X1FUQ7kNvwGRFFTi&_nc_oc=AdnipSU3tnSns14VgV2UP5EHKasl0yVnJ3bJ1w1wzVginRxgLjQsX66J32HVd6-xz2c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=E27gLqmN0C4FT0rDCUa1IQ&_nc_ss=8&oh=00_AfyNpTupKNLICJRKPqs8Eqzi4b-y8pXI5vvmRtSPfkv3bw&oe=69B75A84" 
    },
    { 
        titulo: "Animais Safari", 
        categoria: "Animais", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/589904850_18095374310306449_8726824361941845747_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MjM1NDc4OTQyMzI3NTc5MTcwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcxN3g3MTcuc2RyLkMzIn0%3D&_nc_ohc=jhHuXX-1a-IQ7kNvwG9bse2&_nc_oc=AdnnqHF9nV-eX3uiLVU81WTuExgSoPTKrHECbALcP67-bEPdE6IVHRQv1W3A9BmSCaY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=MiwOIo8aBm91MMmjyJwNXA&_nc_ss=8&oh=00_AfyAElcZ9N2hGDcuB2Fx2gebE58QBARTbH4yupesHuf5pQ&oe=69B77240" 
    },
    { 
        titulo: "Personagens em Feltro", 
        categoria: "Personagens", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/649964714_18113058070734916_2604766841932987514_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MjQyODQ4MDkxNTU4MjU3MzczOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=8ghSIlheVE0Q7kNvwE-PuZ2&_nc_oc=AdmCmLK0i4vesIxPKNa8xxU79IhC20SWYTJjAvt7NjF6kyKg9RBMXD6LEROAdbPBz8U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=MiwOIo8aBm91MMmjyJwNXA&_nc_ss=8&oh=00_AfyY2UnibeEPzkv4MbEKeIWFvaWgjSPG3HSLnMU6pAMuuw&oe=69B77CD5" 
    },
    { 
        titulo: "Chaveiro Ursinho", 
        categoria: "Chaveiros", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/516469140_18504818017027893_3686177091608885735_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzY3MDkxNTg4OTYxMzc3ODMxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=f0noUsBUUBcQ7kNvwGA8eDf&_nc_oc=Adn3BASPr0es2IarSgbRMVpsFsHrKo5wShdL0Pv92put4lFhZTQRWpC03HFjy2unWZ4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=E27gLqmN0C4FT0rDCUa1IQ&_nc_ss=8&oh=00_AfzYNia09ukhYm-IR3pcIXtF7Xo0EdMmSsZ62zTkmwG4Xg&oe=69B76854" 
    },
    { 
        titulo: "Chaveiro Elefantinho", 
        categoria: "Chaveiros", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/645443322_18072921857166173_8826864211931793189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MjQ1MTY5MDI0NTQzNzg5NTY3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=8lTn5fNAm1sQ7kNvwHrIIDF&_nc_oc=Adn1C02oSBUNcBFMcQJts1uQt25N-8hjOfWTei2daQStzjbvK80IMdknukaF9tTYLTs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=llxsUWDE1KFZMUe4AFv45Q&_nc_ss=8&oh=00_AfweGupE6FbonKS59EMW6EgKdZkrxHKvn-oPUgBpX1nn4Q&oe=69B894D1" 
    },
    { 
        titulo: "Lembrancinha Infantil", 
        categoria: "Lembrancinhas", 
        imagem: "https://instagram.fcpv1-1.fna.fbcdn.net/v/t51.82787-15/649115134_18072536120182427_7709944015224173349_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MjM4NjczNTAwNjUyOTA0NTM0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=3OvjsuyN2x4Q7kNvwFJbldS&_nc_oc=AdkA7PciblnzKHgoobmp3uXxXfURBGG7p_6CB7ScCoUqgOKcxFRIbFvDsyjdB7rBKOM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcpv1-1.fna&_nc_gid=MiwOIo8aBm91MMmjyJwNXA&_nc_ss=8&oh=00_Afz6POjltkYuv0mlBZHhlbfvei9GHJI_TC-NSXLvn14zXg&oe=69B790A6" 
    }
];

// Lógica do Menu Hamburger
const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav-menu');
const linksMenu = navMenu.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('aberto');
});

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('aberto');
    });
});

// Lógica dos Filtros da Vitrine
function renderizarFiltros() {
    const container = document.getElementById('filtros-container');
    
    // Puxa as categorias ("Chaveiros", "Animais", etc) de forma dinâmica
    const categorias = ["Todos", ...new Set(portfolio.map(p => p.categoria))];
    
    categorias.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.classList.add('btn-filtro');
        if(cat === "Todos") btn.classList.add('ativo'); 
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            filtrarVitrine(cat);
        });
        
        container.appendChild(btn);
    });
}

function filtrarVitrine(categoriaSelecionada) {
    const galeria = document.getElementById('galeria-grid');
    galeria.innerHTML = ''; 

    const itensFiltrados = categoriaSelecionada === "Todos" 
        ? portfolio 
        : portfolio.filter(p => p.categoria === categoriaSelecionada);

    // O HTML dos itens foi limpo para não ter estilos "soltos", tudo agora puxa do CSS
    itensFiltrados.forEach(peca => {
        const itemHTML = `
            <div class="item-galeria animar-scroll">
                <div class="img-container">
                    <img src="${peca.imagem}" alt="${peca.titulo}">
                </div>
                <h4>${peca.titulo}</h4>
                <p>${peca.categoria}</p>
            </div>
        `;
        galeria.innerHTML += itemHTML;
    });

    setTimeout(iniciarAnimacaoScroll, 50);
}

// Lógica de Animação de Rolagem
function iniciarAnimacaoScroll() {
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.1 });

    const elementosParaAnimar = document.querySelectorAll('.animar-scroll');
    elementosParaAnimar.forEach(el => observer.observe(el));
}

// Inicialização
window.onload = () => {
    renderizarFiltros();
    filtrarVitrine("Todos"); 
    setTimeout(iniciarAnimacaoScroll, 100); 
};