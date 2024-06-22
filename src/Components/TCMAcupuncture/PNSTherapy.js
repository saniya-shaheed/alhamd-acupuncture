import React from "react";
import "./TCMAcupuncture.css";
import { useModal } from "../Hooks/useModal";
import BookAnAppointment from "../BookAnAppointment";

function PNSTherapy() {
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
      <h1 className="display-2 p-3 pt-4">
        {" "}
        Peripheral Nerve Stimulation Therapy{" "}
      </h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          An innovative treatment that involves injecting a dextrose solution
          around inflamed nerves. This therapy targets and reduces nerve
          inflammation, providing pain relief and promoting nerve healing.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/Images/pnstherapy.jpg"}
            alt="PNST"
          />
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        PNST is highly effective for individuals dealing with:
        <ul className="p-2 ps-4">
          <li>
            <span>Chronic Pain: </span>Alleviates chronic pain conditions,
            including neuropathic pain and fibromyalgia.
          </li>
          <li>
            <span>Nerve Injuries: </span>Promotes healing and pain relief in
            cases of nerve injuries.
          </li>
          <li>
            <span>Joint Pain: </span>Reduces pain and inflammation in joints,
            aiding in conditions like arthritis.
          </li>
          <li>
            <span>Musculoskeletal Pain:</span> Addresses musculoskeletal pain,
            including back pain, neck pain, and shoulder pain.
          </li>
          <li>
            <span>Post-Surgical Pain:</span> Provides relief from pain following
            surgical procedures.
          </li>
        </ul>
      </p>
      <p>
        Embrace the cutting-edge approach of PNST for effective pain management
        and improved quality of life.
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

export default PNSTherapy;
