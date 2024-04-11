// Dynamic facts or quotes about engineering
const facts = [
    "Engineering is the art of organizing and directing men and controlling the forces and materials of nature for the benefit of the human race.",
    "The fewer moving parts, the better. Exactly. No truer words were ever spoken in the context of engineering.",
    "At its heart, engineering is about using science to find creative, practical solutions. It is a noble profession."
];

document.addEventListener('DOMContentLoaded', () => {
    // Display a random fact or quote about engineering
    const factDisplay = document.createElement('div');
    factDisplay.className = 'engineering-fact';
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
    document.body.insertBefore(factDisplay, document.body.firstChild);

    // Interactive data visualization (placeholder)
    const dataBoxes = document.querySelectorAll('.data-box .figure');
    dataBoxes.forEach(box => {
        // Placeholder text for where the chart will go
        box.textContent = 'Interactive chart here';
    });
});

