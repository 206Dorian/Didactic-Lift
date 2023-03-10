import "./Footer.css";
import myLogo from "../assets/transparent-full-logo-did-lift.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-title">
            <img src={myLogo} alt="didactic-lift logo" className="logo"></img>
          </div>
          <p className="footer-tagline">🦾We hope this *Lifted* your spirits!<var id="flipped">🦾</var></p>
          {/* using the var element tag prevents errors, certain tags like div cant (or shouldnt be) be nested in a p tag. */}
        </div>
        <div className="footer-section-wrapper">
          <div className="footer-section">
            <h2 className="footer-category">Contact</h2>
            <nav className="footer-list">
              <li>
                <a href="https://github.com/YogiBruce" className="footer-link">
                  Robert Arnold
                </a>
              </li>
              <li>
                <a href="https://github.com/tbarns" className="footer-link">
                  Timothy Barnaby
                </a>
              </li>
              <li>
                <a href="https://github.com/dberry38" className="footer-link">
                  David Berry
                </a>
              </li>
              <li>
                <a href="https://github.com/206Dorian" className="footer-link">
                  Dorian Birch
                </a>
              </li>
            </nav>
          </div>
          <div className="footer-section">
            <h2 className="footer-category">Tip Us!</h2>
            <nav className="footer-list">
              <li>
                <a
                  href="https://buy.stripe.com/eVa3fdeDJdC05JC8wz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send us some love! ❤️
                </a>
              </li>
            </nav>
          </div>
          <div className="footer-section">
            <h2 className="footer-category">🌎</h2>
            <nav id="carbon" className="footer-list">
              <li>
                <a
                  href="https://climate.stripe.com/S2RQQU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carbon-btn"
                >
                  Your tips help Didactic Lift fund carbon removal
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="footer-copyright">Ⓒ 2023 Last Ditch Effort</p>
            <div className="footer-social">
              <a
                href="https://github.com/206Dorian/Didactic-Lift"
                className="footer-social-icon"
              >
                <svg
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
