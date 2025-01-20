// JavaScript for Interactive Effects

// Add hover effect to project cards
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple greeting alert when the page loads
window.onload = () => {
    alert("Welcome to My Portfolio! 🎉");
};