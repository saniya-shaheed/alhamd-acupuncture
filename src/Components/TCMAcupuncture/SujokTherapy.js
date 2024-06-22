import React from "react";
import "./TCMAcupuncture.css";
import { useModal } from "../Hooks/useModal";
import BookAnAppointment from "../BookAnAppointment";

function SujokTherapy() {
  const {
    modalShow,
    confirmationWindow,
    handleShow,
    handleSubmit,
    handleClose,
    closeConfirmation,
  } = useModal();
  return (
    <section className="tcm-acupuncture p-2 p-sm-4 p-md-5">
      <h1 className="display-2 p-3 pt-4"> Sujok Therapy </h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          A form of acupressure that focuses on the hands and feet, where "Su"
          means hand and "Jok" means foot in Korean. It involves stimulating
          specific points on the hands and feet to balance the body's energy and
          promote healing.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/Images/sujoktherapy.jpg"}
            alt="Sujok Therapy"
            className="w-100"
          />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        Sujok Therapy is particularly beneficial for those suffering from:
        <ul className="p-2 ps-4">
          <li>
            <span>Pain Management: </span>Provides relief from various types of
            pain, including headaches, back pain, and joint pain.
          </li>
          <li>
            <span>Digestive Issues: </span>Eases digestive problems such as
            constipation, indigestion, and bloating.
          </li>
          <li>
            <span>Stress and Anxiety: </span> Reduces stress and anxiety,
            promoting mental clarity and calmness.
          </li>
          <li>
            <span>Hormonal Imbalances: </span> Helps in regulating hormonal
            imbalances and alleviates symptoms of menopause and menstrual
            disorders.
          </li>
          <li>
            <span>Chronic Diseases:</span> Aids in managing chronic conditions
            like diabetes and hypertension.
          </li>
        </ul>
      </p>
      <p>
        Experience the simplicity and effectiveness of Sujok Therapy for a
        healthier, balanced life.
      </p>
      <div className="session-booking-button p-5">
        <button className="btn col-12  col-sm-8 col-md-6" onClick={handleShow}>
          {" "}
          Book your Session{" "}
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
    </section>
  );
}

export default SujokTherapy;
