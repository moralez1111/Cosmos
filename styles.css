:root {
  --accent-gold: #e5c178;
  --accent-gold-light: #f7e7c4;
  --bg-dark: #03050b;
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Montserrat', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-dark);
  font-family: var(--font-sans);
  color: #ffffff;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  cursor: default;
}

/* Bottom Hint Overlay */
.hint-overlay {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  animation: pulse 2.5s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: translate(-50%, 0); }
  50% { opacity: 0.9; transform: translate(-50%, -4px); }
}

/* Modal / Memory Card Overlay */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background: rgba(3, 5, 11, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.modal-backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

.star-info-card {
  background: rgba(12, 16, 28, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--accent-gold);
  border-radius: 24px;
  padding: 2.5rem;
  width: 90%;
  max-width: 440px;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 193, 120, 0.15);
  transform: translateY(20px) scale(0.95);
  transition: transform 0.4s ease;
}

.modal-backdrop.active .star-info-card {
  transform: translateY(0) scale(1);
}

.star-badge {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-gold);
  padding: 0.3rem 0.85rem;
  border: 1px solid rgba(229, 193, 120, 0.4);
  border-radius: 12px;
  margin-bottom: 1rem;
}

.star-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 400;
  font-style: italic;
  color: var(--accent-gold-light);
  margin-bottom: 0.5rem;
}

.star-subtitle {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.divider {
  width: 50px;
  height: 1px;
  background: var(--accent-gold);
  opacity: 0.4;
  margin: 0 auto 1.25rem;
}

.star-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.btn-close {
  background: linear-gradient(135deg, #e5c178 0%, #b89144 100%);
  color: #03050b;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-close:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(229, 193, 120, 0.4);
}
