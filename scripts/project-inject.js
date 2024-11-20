const projectCardsFeatured = document.querySelector('#projectcards-featured');
const projectCardsWeb = document.querySelector('#projectcards-web');
const projectCardsGame = document.querySelector('#projectcards-game');
  
const projects = [
    {
        title: "WDD 340 Final Project",
        description: "A full-stack web application featuring user authentication, PostgreSQL database integration, and RESTful API endpoints following MVC architecture. Implements secure login system with token-based authentication and password hashing.",
        tags: ["Node.js", "Express", "PostgreSQL", "REST API", "Authentication"],
        link: "https://github.com/Amproids/cse340",
        type: "web",
        featured: true
    },
    {
        title: "Alternative Voting Methods Demo",
        description: "Interactive demonstration showcasing different voting systems and their outcomes.",
        tags: ["HTML/CSS", "JavaScript", "Interactive"],
        link: "https://amproids.github.io/alternative-voting-demo/",
        type: "web",
        featured: true
    },
    {
        title: "My Unofficial Transcript",
        description: "Unofficial transcript of my progress in BYU-Pathway's Software Development course.",
        tags: ["HTML/CSS", "JavaScript"],
        link: "grades.html",
        type: "web",
        featured: false
    },
    {
        title: "Fire Frog 2022 Game Jam Project",
        description: "A simple jumping game made during a game jam. It's about a frog :)",
        tags: ["Lua", "LÖVE 2D"],
        link: "https://github.com/Amproids/Mini-Jam-124",
        type: "game",
        featured: false
    },
    {
        title: "Godot Pong Game",
        description: "A simple pong game made using the Godot game engine.",
        tags: ["GDScript", "Godot"],
        link: "https://github.com/Amproids/godot-pong",
        type: "game",
        featured: false
    }
];

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.featured) {
        projectCardsFeatured.innerHTML += `
            <div class="project featured">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;  
    }
    if (project.type == 'web') {
        projectCardsWeb.innerHTML += `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
    } else if (project.type == 'game') {
        projectCardsGame.innerHTML += `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
    }
}