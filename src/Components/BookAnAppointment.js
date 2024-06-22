import React, { useState } from "react";
import "./BookAnAppointment.css";

const BookAnAppointment = ({ handleSubmit, handleClose }) => {
  const showHideClass = "modal display-block";

  const [day, setDay] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[new Date().getMonth()];
  const year = new Date().getFullYear();

  const [timeSlot, setTimeSlot] = useState("");

  const handleTimeSlot = (event) => {
    setTimeSlot(event.target.value);
  };

  const validateForm = () => {
    if (!timeSlot) {
      alert("Please select a time slot");
      return false; 
    }
    return true; 
  };

  return (
    <div className={showHideClass}>
      <section className="p-1 pb-2">
        <h4 className="p-4">Book An Appointment</h4>
        <hr />
        <form
          className="g-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (validateForm()) {
              handleSubmit(); 
            }
          }}
        >
          <div className="col-10 modal-label-container p-1">
            <label htmlFor="mobileNumber" className="form-label modal-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control modal-input"
              id="mobileNumber"
              required
            />
          </div>
          <div className="col-10 modal-label-container p-1">
            <label htmlFor="fullName" className="form-label modal-label">
              Name
            </label>
            <input
              type="text"
              className="form-control modal-input"
              id="fullName"
              required
            />
          </div>
          <div className="col-10 modal-label-container pt-1 pb-1 ps-1">
            <label htmlFor="selectDay" className="form-label modal-label">
              Address
            </label>
            <div className="day-container d-flex">
              <select
                id="day"
                className="form-control day-width"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              >
                <option value="">Date</option>
                {days.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select id="month" className="form-control day-width " disabled>
                <option value="">{currentMonth}</option>
              </select>
              <select id="year" className="form-control day-width" disabled>
                <option value="">{year}</option>
              </select>
            </div>
          </div>
          <div className="col-10 modal-label-container align-items-start p-1">
            <label htmlFor="timeSlot" className="form-label modal-label">
              Select a Time Slot:
            </label>
            <div className="modal-input">
              <label>
                <input
                  type="radio"
                  value="nineToEleven"
                  checked={timeSlot === "nineToEleven"}
                  onChange={handleTimeSlot}
                />
                9:00 AM - 11:00 PM
              </label>
              <label>
                <input
                  type="radio"
                  value="ElevenToOne"
                  checked={timeSlot === "ElevenToOne"}
                  onChange={handleTimeSlot}
                />
                11:00 AM - 01:00 PM
              </label>
              <label>
                <input
                  type="radio"
                  value="twoToFour"
                  checked={timeSlot === "twoToFour"}
                  onChange={handleTimeSlot}
                />
                02:00 PM - 04:00 PM
              </label>
              <label>
                <input
                  type="radio"
                  value="fourToSix"
                  checked={timeSlot === "fourToSix"}
                  onChange={handleTimeSlot}
                />
                04:00 PM - 06:00 PM
              </label>
            </div>
          </div>
          <div className="col-10 buttons-container p-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookAnAppointment;
