class FleeingElement {
    constructor(element) {
        this.element = element;
        this.speed = 3;
        this.currentX = element.offsetLeft;
        this.currentY = element.offsetTop;
    }

    updatePosition(mouseX, mouseY) {
        const rect = this.element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const deltaX = elementCenterX - mouseX;
        const deltaY = elementCenterY - mouseY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 150) {
            let angle = Math.atan2(deltaY, deltaX);
            this.currentX += Math.cos(angle) * this.speed;
            this.currentY += Math.sin(angle) * this.speed;

            this.applyBounds();
            this.element.style.left = `${this.currentX}px`;
            this.element.style.top = `${this.currentY}px`;
        }
    }

    applyBounds() {
        const maxWidth = window.innerWidth - this.element.offsetWidth;
        const maxHeight = window.innerHeight - this.element.offsetHeight;

        this.currentX = Math.max(0, Math.min(this.currentX, maxWidth));
        this.currentY = Math.max(0, Math.min(this.currentY, maxHeight));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-links a');
    const fleeingElements = Array.from(links, link => {
        link.style.position = 'fixed'; // Use fixed to allow full-screen movement
        return new FleeingElement(link);
    });

    document.addEventListener('mousemove', e => {
        fleeingElements.forEach(elem => elem.updatePosition(e.clientX, e.clientY));
    });

    const animate = () => {
        requestAnimationFrame(animate);
    };

    animate();
});
