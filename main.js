const app = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        const privacyBtn = document.getElementById('privacy-btn');
        const closeBtn = document.querySelector('.close');
        const modal = document.getElementById('privacy-modal');

        if (privacyBtn) {
            privacyBtn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
