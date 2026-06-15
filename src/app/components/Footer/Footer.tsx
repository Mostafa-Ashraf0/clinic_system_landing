import '../../../style/Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">ClinicFlow</h2>
          <p className="footer-description">
            Simplify appointments, patient records, and clinic
            management in one powerful platform.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Product</h3>

          <a href="#">Appointments</a>
          <a href="#">EMR System</a>
          <a href="#">Analytics</a>
          <a href="#">Staff Management</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>support@clinicflow.com</p>
          <p>+20 100 000 0000</p>
          <p>Cairo, Egypt</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ClinicFlow. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;