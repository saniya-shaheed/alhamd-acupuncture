import React from "react";
import "./TCMAcupuncture.css";
import BookAnAppointment from "../BookAnAppointment";
import { useModal } from "../Hooks/useModal";

function CuppingTherapy() {
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
      <h1 className="display-2 p-3 pt-4"> Cupping Therapy </h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          An ancient form of alternative medicine where cups are placed on the
          skin to create suction. This method enhances blood flow, reduces
          muscle tension, and promotes healing by drawing toxins to the surface.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img
            src="/Images/cuppingtherapy.jpg"
            alt="Cupping Therapy"
            className="w-100"
          />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        Cupping Therapy is ideal for individuals experiencing:
        <ul className="p-2 ps-4">
          <li>
            <span>Muscle Pain and Tension: </span>Relieves deep-seated muscle
            pain and reduces tension.
          </li>
          <li>
            <span>Inflammation: </span>Reduces inflammation and promotes healing
            in injured areas.
          </li>
          <li>
            <span>Chronic Fatigue and Stress: </span> Alleviates symptoms of
            chronic fatigue and stress, enhancing relaxation.
          </li>
          <li>
            <span>Respiratory Issues: </span>Helps with respiratory conditions
            like bronchitis and asthma.
          </li>
          <li>
            <span>Digestive Disorders:</span> Improves digestion and alleviates
            gastrointestinal problems.
          </li>
        </ul>
      </p>
      <p>
        Discover the rejuvenating effects of Cupping Therapy and enhance your
        well-being naturally.
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

export default CuppingTherapy;