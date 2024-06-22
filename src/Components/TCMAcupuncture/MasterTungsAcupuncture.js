import React from "react";
import "./TCMAcupuncture.css";
import { useModal } from "../Hooks/useModal";
import BookAnAppointment from "../BookAnAppointment";

function MasterTungsAcupuncture() {
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
      <h1 className="display-2 p-3 pt-4"> Master Tung's Acupuncture</h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          A unique and highly effective acupuncture system developed by Master
          Tung Ching-Chang. It uses a set of special points located outside the
          traditional meridian system, known for their rapid and remarkable
          therapeutic effects.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img
            src="/Images/mastertung_acupuncture.jpg"
            alt="Master Tung's Acupuncture"
          />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        Master Tung's Acupuncture is ideal for those seeking quick and effective
        relief for:
        <ul className="p-2 ps-4">
          <li>
            <span>Pain Management:</span>Provides rapid relief from both acute
            and chronic pain.
          </li>
          <li>
            <span>Musculoskeletal Health: </span> Treats conditions like
            arthritis, tendonitis, and joint pain.
          </li>
          <li>
            <span>Neurological Issues: </span>Eases symptoms of migraines,
            sciatica, and other nerve-related conditions.
          </li>
          <li>
            <span>Immune Support:</span>Boosts the immune system, helping to
            prevent and fight infections.
          </li>
          <li>
            <span>Emotional Well-being:</span> Balances emotions, reducing
            stress and improving mood.
          </li>
        </ul>
      </p>
      <p>
        {" "}
        Master Tung's Acupuncture is renowned for its effectiveness, often
        providing significant relief after just a few sessions.
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

export default MasterTungsAcupuncture;
