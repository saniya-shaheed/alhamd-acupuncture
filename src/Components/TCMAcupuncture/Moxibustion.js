import React from "react";
import "./TCMAcupuncture.css";
import BookAnAppointment from "../BookAnAppointment";
import { useModal } from "../Hooks/useModal";

function Moxibustion() {
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
      <h1 className="display-2 p-3 pt-4"> Moxibustion </h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          A traditional Chinese medicine therapy that involves burning dried
          mugwort (moxa) near specific points on the body. The heat generated
          from moxa stimulates circulation, enhances the flow of qi (energy),
          and promotes healing.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/Images/moxibustiontherapy.jpg"}
            alt="Moxibustion"
          />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        Moxibustion is particularly effective for individuals dealing with:
        <ul className="p-2 ps-4">
          <li>
            <span>Chronic Pain and Arthritis: </span>Provides relief from
            chronic Pain conditions, including arthritis, by reducing
            inflammation and improving circulation.
          </li>
          <li>
            <span>Digestive Issues: </span> Alleviates digestive problems such
            as diarrhea, constipation, and stomach pain.
          </li>
          <li>
            <span>Menstrual Disorders: </span> Eases menstrual cramps and
            irregular periods by promoting blood flow and balancing hormones.
          </li>
          <li>
            <span>Cold and Flu: </span>Strengthens the immune system and helps
            in preventing and treating colds and flu.
          </li>
          <li>
            <span>Fatigue and Low Energy: </span> Boosts energy levels and
            combats fatigue by enhancing the flow of qi throughout the body.
          </li>
        </ul>
      </p>
      <p>
        Experience the therapeutic warmth of Moxibustion and unlock your body’s
        natural healing potential.
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

export default Moxibustion;
