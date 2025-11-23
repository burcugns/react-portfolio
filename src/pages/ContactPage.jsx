export default function ContactPage() {
  return (
    <div className="home-page contact-page">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div className="contact-details">
              <h3>Email</h3>
              <a href="mailto:brcgns10@gmail.com" className="contact-link">
                brcgns10@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/burcu-gns/"
                target="_blank"
                className="contact-link"
              >
                linkedin.com/in/burcu-gns/
              </a>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-github"></i>
            <div className="contact-details">
              <h3>GitHub</h3>
              <a
                href="https://github.com/burcugns"
                target="_blank"
                className="contact-link"
              >
                github.com/burcugns
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
