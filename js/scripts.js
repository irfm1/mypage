// Array of section content to load dynamically for SPA
const sections = {
    about: `
        <section id="about" class="my-8">
            <h1 class="text-3xl font-bold">About Me</h1>
            <p class="mt-4 text-lg">Olá, sou um desenvolvedor de software full-stack experiente do Brasil. Atualmente, estou aproveitando minhas habilidades no mercado freelance.</p>
            <p class="mt-2">Como um ávido defensor de projetos de código aberto, estou sempre em busca de desafios inovadores que ultrapassem os limites da tecnologia.</p>
            <p class="mt-2">Tenho experiência enraizada no Laravel, que aprimorei ao longo dos anos. Sinta-se à vontade para entrar em contato se tiver algum projeto intrigante, sugestões perspicazes ou simplesmente desejar se conectar. Bom desenvolvimento!</p>
        </section>
    `,
    services: `
        <section id="services" class="my-8">
            <h1 class="text-3xl font-bold">My Skills</h1>
            <ul class="mt-4 space-y-2">
                <li>Full-stack Development</li>
                <li>Laravel Framework</li>
                <li>Open-source Contributions</li>
                <li>API Development and Integration</li>
                <li>Database Management</li>
            </ul>
        </section>
    `,
    contact: `
        <section id="contact" class="my-8">
            <h1 class="text-3xl font-bold">Contact Me</h1>
            <p class="mt-4">Email: <a href="mailto:mythirfm@gmail.com" class="text-blue-600">mythirfm@gmail.com</a></p>
            <p class="mt-2">Phone: <a href="tel:+5582988288586" class="text-blue-600">+55 82 98828 8586</a></p>
            <p class="mt-2">Social Media:</p>
            <ul class="mt-2 space-y-2">
                <li><a href="https://www.linkedin.com/in/mythirfm/" target="_blank" class="text-blue-600">LinkedIn</a></li>
                <li><a href="https://github.com/irfm1" target="_blank" class="text-blue-600">GitHub</a></li>
                <li><a href="https://www.instagram.com/icaro.rfmoura" target="_blank" class="text-blue-600">Instagram</a></li>
            </ul>
        </section>
    `
};

// Function to load the appropriate section into the content area
function loadContent(section) {
    const contentDiv = document.getElementById('content');
    
    // Show loading spinner
    contentDiv.innerHTML = `<div class="loader my-8"></div>`;
    
    setTimeout(() => {
        contentDiv.innerHTML = sections[section];
        // Smooth scroll to top after content loads
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);  // Simulate a loading delay for demonstration
}

// Set up event listeners for navigation links
document.querySelectorAll('a[data-nav]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1); // Get the ID without '#'
        loadContent(sectionId);
        localStorage.setItem('currentSection', sectionId);  // Save the current section
    });
});

// Load the last viewed section or 'about' by default
window.addEventListener('DOMContentLoaded', () => {
    const lastSection = localStorage.getItem('currentSection') || 'about';
    loadContent(lastSection);
});

// Loader animation (minimal CSS)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    .loader {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #3498db;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);
