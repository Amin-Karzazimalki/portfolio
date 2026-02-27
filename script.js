const translations = {
    en: {
        name: "AMIN",
        title: "Full-Stack Developer",
        aboutTitle: "About Me",
        aboutText: "Passionate full-stack developer with experience in modern web technologies...",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        contactText: "Email: amin@example.com<br>Location: Osasco, SP – Brazil"
    },
    fr: {
        name: "AMIN",
        title: "Développeur Full-Stack",
        aboutTitle: "À propos de moi",
        aboutText: "Développeur full-stack passionné avec de l'expérience dans les technologies web modernes...",
        skillsTitle: "Compétences",
        projectsTitle: "Projets",
        contactTitle: "Contact",
        contactText: "Email : amin@example.com<br>Localisation : Osasco, SP – Brésil"
    },
    ar: {
        name: "أمين",
        title: "مطور فول ستاك",
        aboutTitle: "عني",
        aboutText: "مطور فول ستاك متحمس ولدي خبرة في تقنيات الويب الحديثة...",
        skillsTitle: "المهارات",
        projectsTitle: "المشاريع",
        contactTitle: "تواصل معي",
        contactText: "البريد: amin@example.com<br>الموقع: أوساسكو، ساو باولو – البرازيل"
    },
    pt: {
        name: "AMIN",
        title: "Desenvolvedor Full-Stack",
        aboutTitle: "Sobre Mim",
        aboutText: "Desenvolvedor full-stack apaixonado com experiência em tecnologias web modernas...",
        skillsTitle: "Habilidades",
        projectsTitle: "Projetos",
        contactTitle: "Contato",
        contactText: "Email: amin@example.com<br>Localização: Osasco, SP – Brasil"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.setAttribute("lang", lang);

    const t = translations[lang];

    document.getElementById("name").textContent = t.name;
    document.getElementById("title").textContent = t.title;
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").innerHTML = t.aboutText;
    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("projects-title").textContent = t.projectsTitle;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("contact-text").innerHTML = t.contactText;
}

// Écouteur sur tous les boutons
document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
        changeLanguage(btn.dataset.lang);
    });
});

// Langue par défaut
changeLanguage("en");
