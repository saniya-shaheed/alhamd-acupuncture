import React from "react";
import "./TCMAcupuncture.css";
import { useModal } from "../Hooks/useModal";
import BookAnAppointment from "../BookAnAppointment";

function TCMAcupuncture() {
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
      <h1 className="display-2 p-3 pt-4"> TCM Acupuncture </h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          A holistic healing method that has been practiced for thousands of
          years. It involves the insertion of fine needles into specific points
          on the body to balance the flow of energy and promote natural healing.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL + '/Images/tsm_acup_main.jpg'}  alt="TSM Acupuncture" />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        TCM Acupuncture is suitable for people of all ages and can benefit those
        experiencing:
        <ul className="p-2 ps-4">
          <li>
            <span>Chronic pain </span>(e.g., back pain, neck pain, arthritis)
          </li>
          <li>
            <span>Stress, anxiety, and depression </span>
          </li>
          <li>
            <span>Digestive issues </span>(e.g., IBS, bloating)
          </li>
          <li>
            <span>Respiratory problems</span> (e.g., asthma, allergies)
          </li>
          <li>
            <span>Women's health issues</span> (e.g., menstrual pain, menopause
            symptoms)
          </li>
        </ul>
      </p>
      <p>
        By restoring the body's natural balance, TCM Acupuncture helps you
        achieve optimal health and wellness.
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

export default TCMAcupuncture;
