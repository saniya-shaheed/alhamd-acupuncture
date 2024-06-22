import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import BookAnAppointment from "../BookAnAppointment";
import "../BookAnAppointment.css";
import { useModal } from "../Hooks/useModal";

function Header() {
  const {
    modalShow,
    confirmationWindow,
    handleShow,
    handleSubmit,
    handleClose,
    closeConfirmation,
  } = useModal();

  return (
    <header className="header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand p-3 pt-1 pb-1">
          <img
            src="/Images/logo_and_name.png"
            className="w-100 ps-md-2"
            alt="Al Hamd Acupuncture"
          />
        </Link>
        <div className="pe-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end p-3 pe-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Acupuncture
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/tcmacupuncture" className="dropdown-item">
                  TCM Acupuncture
                </Link>
                <Link to="/mastertungsacupuncture" className="dropdown-item">
                  Master Tung's Acupuncture
                </Link>
                <Link to="/auricularacupuncture" className="dropdown-item">
                  Sculp & Auricular Acupuncture
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Therapy
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/cuppingtherapy" className="dropdown-item">
                  Cupping Therapy
                </Link>
                <Link to="/sujoktherapy" className="dropdown-item">
                  Sujok Therapy
                </Link>
                <Link to="/pnsttherapy" className="dropdown-item">
                  PNST
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/moxibustion" className="nav-link">
                Moxibustion
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="book-appointment-btn btn my-2 my-sm-0"
            type="button"
            onClick={handleShow}
          >
            Book an Appointment
          </button>
          {modalShow && (
            <div>
              <div className="modal-overlay show" onClick={handleClose}></div>
              <div className="modal-container show">
                <BookAnAppointment
                  handleClose={handleClose}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          )}
          {confirmationWindow && (
            <div className="confirmation-window">
              <span className="close-icon" onClick={closeConfirmation}>
                ✖
              </span>
              <p>Your Appointment is Confirmed!</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
