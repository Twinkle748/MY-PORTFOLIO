// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#sidebarMenu .nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document
          .querySelector(`#sidebarMenu a[href="#${entry.target.id}"]`)
          .classList.add("active");
      }
    });
  },
  { rootMargin: "-20% 0px -70% 0px" }
);

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    navLinks.forEach((link) => link.classList.remove("active"));
    document.querySelector(`#sidebarMenu a[href="#contact"]`).classList.add("active");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    1: {
      title: "Hybrid Visual-ML Framework",
      img: "snip2.png",
      desc: "Developed a hybrid framework combining machine learning and visual analytics to classify neurodiverse learners using behavioral and educational data. The system identifies learning patterns, offers personalized support, and enhances inclusivity through AI-driven insights and intuitive visualization tools.",
      tech: "Python, Flask, ML Models, D3.js",
      features: ["Learner classification using ML", "Interactive data visualizations", "Personalized learning recommendations", "Real-time behavioral insights"]
    },
    2: {
      title: "Smart Task Manager",
      img: "task.png",
      desc: "A full-stack task manager built with Express.js, EJS, and PostgreSQL. Includes ML for automatic task classification, dynamic category creation, progress tracking, and a clean UI.",
      tech: "Node.js, Express, EJS, PostgreSQL, ML",
      features: ["Automatic task categorization using ML", "Progress tracking", "Dynamic category creation", "Clean UI"]
    },
    3: {
      title: "Rain Predictor",
      img: "rain.png",
      desc: "A responsive weather website tested with Postman & APIs. Delivers quick yes/no answers with clean visuals for user-friendly weather forecasts.",
      tech: "Node.js, Express, EJS, Open-Meteo API",
      features: ["Tomorrow’s rain prediction", "Responsive design", "Clear visuals", "Fast-loading website"]
    },
    4: {
      title: "Amazon Clone",
      img: "ama.jpg",
      desc: "A static Amazon homepage clone using HTML & CSS. Includes responsive navbar, product grid, banner, and footer layout.",
      tech: "HTML, CSS, JavaScript",
      features: ["Responsive homepage layout", "Product display grid", "Navigation menu", "Hover effects on products"]
    }
  };

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");
  const modalTech = document.getElementById("modalTech");
  const modalFeatures = document.getElementById("modalFeatures");

  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-project");
      const project = projects[id];

      modalTitle.textContent = project.title;
      modalImg.src = project.img;
      modalDesc.textContent = project.desc;

      // Populate tech stack
      
      modalTech.textContent = project.tech;

      // Populate features
      modalFeatures.innerHTML = "";
      project.features.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        modalFeatures.appendChild(li);
      });

      modal.show();
    });
  });
});

sections.forEach((section) => observer.observe(section));

// Smooth scroll for nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth",
      });
    }
  });
});
