import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide high-quality services for our clients. Contact us for more information.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-black">Home</a></li>
              <li><a href="/about" className="text-black">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Address: 414 Akademika Pavlova Street, Kharkiv, Ukraine</p>
            <p>Phone: +380 (050) 625-58-03</p>
            <p>Email: recipes@gmail.com</p>
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
            <p className="mb-0">&copy; 2024 Flavor Fusion Cuisine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
