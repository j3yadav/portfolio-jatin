const portfolioData = {
  personal: {
    name: "Jatin Kumar",
    title: "Industrial Designer",
    tagline: "Welcome to my portfolio",
    bio: [
      "A hardworking and imaginative product design student passionate about refining everyday experiences and solving real-world problems through design."
    ],
    profileImage: "./jatin.png",
    email: "john.doe@example.com",
    resumeUrl: "https://drive.google.com/file/d/1a6pXT58aY2wYgQ8AFj8gfCgw7V39KrZa/view?usp=sharing"
  },
  logo: { text: "Your Logo" },
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:john.doe@example.com",
    phone: "tel:+918685862460"
  },
  skills: [
    { name: "Adobe Photoshop", icon: "photoshop" },
    { name: "Adobe Illustrator", icon: "illustrator" },
    { name: "Adobe Premiere Pro", icon: "premierepro", image: "./premier pro.jpg" },
    { name: "Adobe After Effects", icon: "aftereffects" },
    { name: "Blender", icon: "blender", image: "./blender.png" },
    { name: "Rhino 8", icon: "rhino8", image: "./rhino 8.png" },
    { name: "AutoCAD", icon: "autocad", image: "./auto cad.png" },
    { name: "SolidWorks", icon: "solidworks", image: "./solid works.png" },
    { name: "Figma", icon: "figma" }
  ],
  experience: [
    {
      title: "Visual Design Intern",
      company: "Divine Lab, IIT Delhi",
      period: "15 July 2025 - 15 October 2025",
      description: "Visual Design Intern at Divine Lab, IIT Delhi, enhancing creative design skills, developing user-focused visuals, and contributing to innovative projects. Worked on research and development of learning resources on gamification in UX, focusing on making the learning experience more engaging, and played a key role in designing a mascot to enhance the visual identity and interactivity of the resource.",
      highlight: true
    }
  ],
  education: [
    {
      title: "Bachelor of Design",
      institution: "Delhi Technological University (DCE)",
      period: "2024 - Present",
      description: "Industrial Design"
    },
    {
      title: "Intermediate (Class 12)",
      institution: "Cambridge International Senior Secondary School",
      period: "2023",
      description: "CPI% - 74.20"
    },
    {
      title: "Matriculation (Class 10)",
      institution: "Cambridge International Senior Secondary School",
      period: "2021",
      description: "CPI% - 73.60"
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzczMTE2OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      actionLabel: "View Project"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMxNDk5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
      actionLabel: "View Project"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMTA1MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "TypeScript", "API"],
      link: "#",
      actionLabel: "View Project"
    }
  ],
  hobbies: [
    { emoji: "\u270F\uFE0F", title: "Sketching", description: "Love to draw eyes and realistic portraits." },
    { emoji: "\uD83D\uDCC2", title: "Organizing", description: "Enjoy organizing spaces and maintaining order." },
    { emoji: "\uD83C\uDFD0", title: "Volleyball", description: "Love staying active through volleyball and team play." },
    { emoji: "\uD83C\uDFC3", title: "Athletics", description: "Setting a new PR is the best feeling ever." }
  ],
  resume: {
    summary: "Experienced Full Stack Developer with 8+ years in web development. Proven track record of delivering high-quality applications and leading development teams. Passionate about creating user-friendly solutions with modern technologies.",
    achievements: [
      "Led development of 20+ successful projects",
      "Reduced application load time by 40%",
      "Mentored 10+ junior developers",
      "Contributed to 15+ open-source projects"
    ]
  },
  artworks: [
    { src: "./public/projects/sketches/girl sketch.png", title: "Girl Portrait" },
    { src: "./public/projects/sketches/pedro pascle sketch.png", title: "Pedro Pascal Portrait" },
    { src: "./public/projects/sketches/premanand ji sketch.png", title: "Premanand Ji Portrait" },
    { src: "./public/projects/sketches/rahul sir sketch.png", title: "Rahul Sir Portrait" },
    { src: "./public/projects/sketches/william defoe.png", title: "William Defoe Portrait" },
    { src: "./public/projects/sketches/girl sketch 1.png", title: "Girl Portrait II" }
  ],
  footer: {
    copyright: "© 2026 John Doe. All rights reserved.",
    builtWith: "Built with plain HTML, CSS, and JavaScript"
  }
};

const SHEET_CONFIG = {
  spreadsheetId: "1UF-Qd8nDcYg7HA4caBIQOIQUWVbMQQw9Tx7z5F0LpEw",
  gid: "0",
  refreshMs: 30000,
  url() {
    return `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?gid=${this.gid}&tqx=out:json`;
  }
};

const qs = (selector) => document.querySelector(selector);
const create = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (typeof text === "string") element.textContent = text;
  return element;
};

function normalizeLink(value) {
  if (!value || value === "#") return "#";
  if (/^https?:\/\//i.test(value) || /^mailto:/i.test(value)) return value;
  return `https://${value}`;
}

function skillIconMarkup(icon) {
  const icons = {
    photoshop: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="12" fill="#001E36"/><text x="50%" y="56%" text-anchor="middle" fill="#31A8FF" font-size="23" font-family="Arial, sans-serif" font-weight="700">Ps</text></svg>',
    illustrator: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="12" fill="#2C1400"/><text x="50%" y="56%" text-anchor="middle" fill="#FF9A00" font-size="23" font-family="Arial, sans-serif" font-weight="700">Ai</text></svg>',
    premierepro: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="12" fill="#220033"/><text x="50%" y="56%" text-anchor="middle" fill="#EA77FF" font-size="18" font-family="Arial, sans-serif" font-weight="700">Pr</text></svg>',
    aftereffects: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="12" fill="#1E153E"/><text x="50%" y="56%" text-anchor="middle" fill="#C8A1FF" font-size="21" font-family="Arial, sans-serif" font-weight="700">Ae</text></svg>',
    blender: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="35" cy="33" r="14" fill="#F57C00"/><circle cx="35" cy="33" r="6" fill="#fff"/><path d="M13 26l13-9 4 5 12 1-2 6-10 0-6 7-5-4 3-5-9-1z" fill="#FF9800"/></svg>',
    rhino8: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="10" width="44" height="44" rx="12" fill="#ffffff" opacity="0.08"/><path d="M20 39l7-15 10-5 8 4 2 9-6 8H27z" fill="#d9d9d9"/><path d="M29 24l5-5 8 4-6 3z" fill="#ffffff" opacity="0.9"/></svg>',
    autocad: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 10l16 44h-8l-3-9H27l-3 9h-8zm0 13l-3 15h6z" fill="#E53935"/></svg>',
    solidworks: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="10" width="44" height="44" rx="12" fill="#ffffff" opacity="0.08"/><path d="M18 42c9 4 20-2 26-14-9 8-17 8-23 4 2-5 9-8 18-9-10-4-20-2-24 7-2 5-1 9 3 12z" fill="#D32F2F"/></svg>',
    figma: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="8" width="16" height="16" rx="8" fill="#F24E1E"/><rect x="18" y="24" width="16" height="16" rx="8" fill="#A259FF"/><rect x="18" y="40" width="16" height="16" rx="8" fill="#0ACF83"/><rect x="30" y="8" width="16" height="16" rx="8" fill="#FF7262"/><rect x="30" y="24" width="16" height="16" rx="8" fill="#1ABCFE"/></svg>'
  };

  return icons[icon] || '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="12" fill="#1f1f1f"/></svg>';
}

function renderHero() {
  const brandText = qs("#brand-text");
  if (brandText && brandText.tagName !== "IMG") {
    brandText.textContent = portfolioData.logo.text || portfolioData.personal.name;
  }
  qs("#hero-tagline").textContent = portfolioData.personal.tagline;
  qs("#hero-name").textContent = portfolioData.personal.name;
  qs("#hero-title").textContent = portfolioData.personal.title;
  qs("#profile-image").src = portfolioData.personal.profileImage;
  qs("#profile-image").alt = `${portfolioData.personal.name} profile portrait`;

  const bioContainer = qs("#hero-bio");
  bioContainer.innerHTML = "";
  portfolioData.personal.bio.forEach((paragraph) => bioContainer.appendChild(create("p", "", paragraph)));
}

function buildSkillItem(skill) {
  const item = create("div", "skill-chip");
  item.setAttribute("data-tooltip", skill.name);
  item.setAttribute("aria-label", skill.name);
  item.setAttribute("title", skill.name);

  const icon = create("div", "skill-icon-wrap");
  icon.innerHTML = skillIconMarkup(skill.icon);
  item.appendChild(icon);
  return item;
}

function renderSkills() {
  const container = qs("#skills-grid");
  container.innerHTML = "";

  const panel = create("div", "skills-panel reveal visible");
  const viewport = create("div", "skills-marquee");
  const track = create("div", "skills-track");

  const loopSkills = [...portfolioData.skills, ...portfolioData.skills];
  loopSkills.forEach((skill) => track.appendChild(buildSkillItem(skill)));

  viewport.appendChild(track);
  panel.appendChild(viewport);
  container.appendChild(panel);
}

function renderExperience() {
  const container = qs("#experience-list");
  portfolioData.experience.forEach((job) => {
    const card = create("article", `timeline-card reveal${job.highlight ? " highlight" : ""}`);
    const meta = create("div", "meta-row");
    meta.appendChild(create("h3", "", job.title));
    meta.appendChild(create("span", "period", job.period));
    card.appendChild(meta);
    card.appendChild(create("p", "company", job.company));
    card.appendChild(create("p", "", job.description));
    container.appendChild(card);
  });
}

function renderEducation() {
  const container = qs("#education-list");
  portfolioData.education.forEach((item) => {
    const card = create("article", "education-card reveal");
    const meta = create("div", "meta-row");
    meta.appendChild(create("h3", "", item.title));
    meta.appendChild(create("span", "period", item.period));
    card.appendChild(meta);
    card.appendChild(create("p", "company", item.institution));
    if (item.description) card.appendChild(create("p", "", item.description));
    container.appendChild(card);
  });
}

function updateProjectsStatus(message, state = "info") {
  const status = qs("#projects-status");
  if (!status) return;
  status.textContent = message;
  status.dataset.state = state;
}

function buildProjectAction(project) {
  const hasProjectLink = Boolean(project.link && project.link !== "#");
  const action = create(hasProjectLink ? "a" : "span", `project-link${hasProjectLink ? "" : " disabled"}`, project.actionLabel || "View Project");

  if (hasProjectLink) {
    action.href = normalizeLink(project.link);
    if (/^https?:/i.test(action.href)) {
      action.target = "_blank";
      action.rel = "noreferrer";
    }
  }

  return action;
}

function renderProjects() {
  const container = qs("#projects-grid");
  if (!container) return;
  container.innerHTML = "";
  
  if (typeof PROJECTS !== 'undefined') {
    PROJECTS.forEach((proj, index) => {
      const card = create("a", "project-card reveal visible");
      card.href = `project.html#${encodeURIComponent(proj.id)}`;
      card.target = "_blank";
      card.rel = "noreferrer";
      card.style.setProperty('--delay', `${index * 0.05}s`);
      
      const thumbSrc = proj.thumbnail ? proj.thumbnail : (proj.files.find(f => f.type === 'image')?.path ?? null);
      const videos = proj.files.find(f => f.type === 'video');
      
      const header = create("div", "project-card-header");
      header.appendChild(create("h3", "", proj.title));
      
      const visual = create("div", "project-card-visual");
      if (thumbSrc) {
        const image = create("img");
        image.src = thumbSrc;
        image.alt = proj.title;
        image.loading = "lazy";
        visual.appendChild(image);
      } else {
         const placeholder = create("div", "minimal-card-placeholder");
         placeholder.innerHTML = `<span class="placeholder-icon">${videos ? '🎬' : '📁'}</span>`;
         visual.appendChild(placeholder);
      }
      
      card.appendChild(header);
      card.appendChild(visual);
      container.appendChild(card);
    });
  }
}

function parseTechnologies(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function isHeaderProjectRow(project) {
  return (
    project.title.toLowerCase() === "project name" &&
    project.description.toLowerCase() === "description"
  );
}

function parseGvizResponse(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Unexpected Google Sheets response format.");
  }

  const payload = JSON.parse(text.slice(start, end + 1));
  const rows = payload.table?.rows || [];

  return rows
    .map((row) => row.c || [])
    .map((cells) => ({
      title: cells[0]?.v?.toString().trim() || "",
      description: cells[1]?.v?.toString().trim() || "",
      tags: parseTechnologies(cells[2]?.v?.toString().trim() || ""),
      actionLabel: cells[3]?.v?.toString().trim() || "View Project",
      image: cells[4]?.v?.toString().trim() || "",
      link: cells[5]?.v?.toString().trim() || "#"
    }))
    .filter((project) => !isHeaderProjectRow(project) && project.title && project.description && project.image);
}

async function fetchSheetProjects() {
  const response = await fetch(SHEET_CONFIG.url(), {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed with ${response.status}.`);
  }

  const text = await response.text();
  return parseGvizResponse(text);
}

async function syncProjectsFromSheet() {
  try {
    updateProjectsStatus("Refreshing latest projects from Google Sheets...", "loading");
    const projects = await fetchSheetProjects();
    if (!projects.length) {
      throw new Error("The sheet returned no usable project rows.");
    }
    renderProjects(projects, "sheet");
  } catch (error) {
    console.error("Project sync failed:", error);
    renderProjects(portfolioData.projects, "fallback");
  }
}

function renderArt() {
  const container = qs("#art-grid");
  if (!container) return;
  container.innerHTML = "";
  
  // Create Lightbox container safely
  let lightbox = qs("#lightbox-modal");
  if (!lightbox) {
    lightbox = create("div", "lightbox");
    lightbox.id = "lightbox-modal";
    const closeBtn = create("button", "lightbox-close", "×");
    const imgEl = create("img");
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(imgEl);
    document.body.appendChild(lightbox);
    
    // Lightbox close logic
    const close = () => lightbox.classList.remove("active");
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target !== imgEl) close();
    });
  }

  const lightboxImg = lightbox.querySelector("img");

  portfolioData.artworks.forEach((artwork, index) => {
    const card = create("article", "art-card reveal visible");
    const img = create("img");
    img.src = artwork.src;
    img.alt = artwork.title || `Portrait ${index + 1}`;
    img.loading = "lazy";
    
    card.appendChild(img);
    
    card.addEventListener("click", () => {
      lightboxImg.src = artwork.src;
      lightbox.classList.add("active");
    });
    
    container.appendChild(card);
  });
}

function renderHobbies() {
  const container = qs("#hobbies-grid");
  portfolioData.hobbies.forEach((hobby) => {
    const card = create("article", "hobby-card reveal");
    card.appendChild(create("div", "hobby-icon", hobby.emoji));
    card.appendChild(create("h3", "", hobby.title));
    card.appendChild(create("p", "", hobby.description));
    container.appendChild(card);
  });
}

function renderResume() {
  const resumeLink = qs("#resume-link");
  if (resumeLink) {
    resumeLink.href = portfolioData.personal.resumeUrl || "#";
  }
}

function renderContact() {
  const container = qs("#contact-actions");
  [
    { label: "Email Me", href: portfolioData.socials.email || `mailto:${portfolioData.personal.email}`, className: "contact-link primary" },
    { label: "+91 8685862460", href: portfolioData.socials.phone, className: "contact-link" },
    { label: "LinkedIn", href: portfolioData.socials.linkedin, className: "contact-link" }
  ].forEach((item) => {
    const link = create("a", item.className, item.label);
    link.href = normalizeLink(item.href);
    if (item.href && item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    container.appendChild(link);
  });
}

function renderFooter() {
  qs("#footer-copy").textContent = portfolioData.footer.copyright;
  qs("#footer-note").textContent = portfolioData.footer.builtWith;
}

function setupMenu() {
  const toggle = qs("#menu-toggle");
  const mobileNav = qs("#mobile-nav");

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });

      mobileNav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupScrollState() {
  const topbar = qs("#topbar");
  const navButtons = [...document.querySelectorAll(".nav-link")];
  const sections = ["about", "skills", "experience", "education", "projects", "portraits", "hobbies", "resume", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const update = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 20);
    let currentId = "about";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) currentId = section.id;
    });

    navButtons.forEach((button) => button.classList.toggle("active", button.dataset.scrollTarget === currentId));
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  renderHero();
  renderSkills();
  renderExperience();
  renderEducation();
  renderProjects();
  renderArt();
  renderHobbies();
  renderResume();
  renderContact();
  renderFooter();
  setupMenu();
  setupScrollState();
  setupReveal();
}

init();











