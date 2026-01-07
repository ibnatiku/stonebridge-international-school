// Simple interaction placeholder
document.querySelectorAll(".clickable").forEach(card => {
  card.addEventListener("click", () => {
    alert("More details coming soon!");
  });
});

// Expandable academic sections
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".expand-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".admissions-hero .primary-btn, .admissions-section .primary-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    alert("Admission form coming soon!");
    // Or link to actual online form
  });
});

// Example: alert for placeholder if LMS link not ready
document.querySelectorAll(".portal-card a").forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (!btn.href.includes("external-lms-link.com")) {
      e.preventDefault();
      alert("Portal access will be available soon.");
    }
  });
});

// Example: Lightbox placeholder for gallery
document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    alert("Full-size image will open here.");
  });
});

// Contact form submission placeholder
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}
