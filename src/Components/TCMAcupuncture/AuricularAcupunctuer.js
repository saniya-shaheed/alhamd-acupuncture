import React from "react";
import "./TCMAcupuncture.css";

function AuricularAcupunctuer() {
  return (
    <section className="tcm-acupuncture p-2 p-sm-4 p-md-5">
      <h1 className="display-2 p-3 pt-4"> Sculp & Auricular Acupuncture</h1>
      <hr />
      <div className="d-sm-flex pb-5 align-items-center pt-md-4">
        <p className="col-sm-6 p-2">
          A specialized form of acupuncture focusing on the ear. It is based on
          the concept that the ear is a microsystem that reflects the entire
          body. Fine needles are inserted into specific points on the ear to
          treat various health conditions.
        </p>
        <div className="tcm-image-container col-sm-6 d-flex justify-content-center">
          <img src="Ear-Acupuncture.jpg" alt="Auricular Acupuncture" className="w-100"/>
        </div>
      </div>
      <h3 className="ps-2">It can solve</h3>
      <p className="p-2">
        Auricular Acupuncture is particularly effective for individuals seeking:
        <ul className="p-2 ps-4">
          <li>
            <span>Pain Relief:</span>Targets specific points on the ear to
            alleviate pain and reduce inflammation.
          </li>
          <li>
            <span>Addiction: </span> Assists in managing cravings and withdrawal
            symptoms for those battling addiction.
          </li>
          <li>
            <span>Weight Management: </span>Supports weight loss by reducing
            appetite and improving metabolism.
          </li>
          <li>
            <span>Stress Relief:</span>Calms the nervous system, reducing stress
            and promoting relaxation.
          </li>
          <li>
            <span>Better Sleep:</span> Improves sleep quality by addressing
            underlying issues like stress and anxiety.
          </li>
        </ul>
      </p>
      <p>
        {" "}
        Experience the transformative power of Auricular Acupuncture and take a
        step towards better health and well-being today.
      </p>
      <div className="session-booking-button p-5">
      <button className="btn col-12 col-sm-8 col-md-6"> Book your Session </button>
      </div>
    </section>
  );
}

export default AuricularAcupunctuer;
