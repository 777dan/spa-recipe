import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide high-quality services for our clients. Contact us for more information.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Address: 123 Example Street, City, Country</p>
            <p>Phone: +1 (234) 567-89-00</p>
            <p>Email: info@example.com</p>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
