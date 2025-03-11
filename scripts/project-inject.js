const projectCardsFeatured = document.querySelector('#projectcards-featured');
const projectCardsWeb = document.querySelector('#projectcards-web');
const projectCardsGame = document.querySelector('#projectcards-game');
const projects = [
    {
        title: "Fitness App & Exercise Tracker",
        description: "My final project for WDD330, a comprehensive fitness application that tracks workouts and provides exercise recommendations. Features a responsive UI and local storage functionality.",
        tags: ["HTML/CSS", "JavaScript", "Local Storage", "Responsive Design"],
        link: "https://myfitnessfriend.net/",
        type: "web",
        featured: true
    },
    {
        title: "WDD 340 Final Project",
        description: "A full-stack web application featuring user authentication, PostgreSQL database integration, and RESTful API endpoints following MVC architecture. Implements secure login system with token-based authentication and password hashing.",
        tags: ["Node.js", "Express", "PostgreSQL", "REST API", "Authentication"],
        link: "https://github.com/Amproids/cse340",
        type: "web",
        featured: false
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
        title: "WDD 230 Home Page",
        description: "The home page for my WDD230 class, a collection of projects showcasing my skills and knowledge in web development.",
        tags: ["HTML/CSS", "JavaScript"],
        link: "https://amproids.github.io/wdd230/",
        type: "web",
        featured: false
    },
    {
        title: "Alternative Voting Methods Demo",
        description: "Interactive demonstration showcasing different voting systems and their outcomes.",
        tags: ["HTML/CSS", "JavaScript", "Interactive"],
        link: "https://amproids.github.io/alternative-voting-demo/",
        type: "web",
        featured: false
    },
    {
        title: "Godot Pong Game",
        description: "A simple pong game made using the Godot game engine.",
        tags: ["GDScript", "Godot"],
        link: "https://github.com/Amproids/godot-pong",
        type: "game",
        featured: false
    },
    {
        title: "Rust Hangman Game",
        description: "A terminal-based implementation of the classic Hangman game written in Rust, featuring word selection, gameplay logic, and user input validation.",
        tags: ["Rust", "CLI", "Game Logic"],
        link: "https://github.com/Amproids/cse310-RustHangman",
        type: "game",
        featured: false
    },
    {
        title: "C++ Snake Game",
        description: "A classic Snake game built with C++ that includes collision detection, score tracking, and increasing difficulty as the player progresses.",
        tags: ["C++", "Game Development", "Console Application"],
        link: "https://github.com/Amproids/cse310-CPPSnake",
        type: "game",
        featured: true
    },
    {
        title: "Java RPG",
        description: "A text-based RPG adventure game developed in Java with character classes, inventory system, and battle mechanics.",
        tags: ["Java", "Object-Oriented Programming", "Game Design"],
        link: "https://github.com/Amproids/cse310-JavaRPG",
        type: "game",
        featured: false
    },
    {
        title: "3D Wireframe Renderer",
        description: "A simple demonstration of rendering 3D wireframe models using Python and Tkinter, implementing basic 3D projection calculations.",
        tags: ["Python", "Tkinter", "3D Graphics"],
        link: "https://github.com/Amproids/3D_wireframe_python",
        type: "game",
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
        title: "TextQuest",
        description: "A text-based adventure game engine written in Python, featuring a custom story format and branching narrative paths.",
        tags: ["Python", "Text Adventure"],
        link: "https://github.com/Amproids/TextQuest",
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