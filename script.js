const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("active");
});


// Gallery Filters
const filterButtons = document.querySelectorAll(".gallery-filters button");
const galleryItems = document.querySelectorAll(".gallery-grid .item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Highlight active button
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        galleryItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// Modal Controls
const modal = document.getElementById("appointmentModal");
const openModal = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside modal box
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
