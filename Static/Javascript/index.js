// JavaScript code
const facts = [
    "Engineering is the art of organizing and directing men and controlling the forces and materials of nature for the benefit of the human race.",
    "The fewer moving parts, the better. Exactly. No truer words were ever spoken in the context of engineering.",
    "At its heart, engineering is about using science to find creative, practical solutions. It is a noble profession."
];

const tickerWrap = document.createElement('div');
tickerWrap.className = 'ticker-wrap';
document.body.appendChild(tickerWrap);

function startTicker() {
    const tickerMove = document.createElement('div');
    tickerMove.className = 'ticker-move';
    tickerWrap.appendChild(tickerMove);

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const tickerContent = document.createElement('div');
    tickerContent.className = 'ticker-content';
    tickerContent.textContent = randomFact;
    tickerMove.appendChild(tickerContent);

    // Wait for the animation to finish plus a little buffer
    tickerMove.addEventListener('animationend', () => {
        tickerWrap.removeChild(tickerMove);
        startTicker(); // Restart the ticker with the next fact
    });
}

document.addEventListener('DOMContentLoaded', startTicker);

