import React, { useState } from "react";
import "./Home.css";
import "../Header/Header.css";
import { useModal } from "../Hooks/useModal";
import BookAnAppointment from "../BookAnAppointment";
import { Link } from "react-router-dom";

function Home() {
  const {
    modalShow,
    confirmationWindow,
    handleShow,
    handleSubmit,
    handleClose,
    closeConfirmation,
  } = useModal();
  return (
    <section className="home-section pt-lg-5">
      {/* HOME SECTION ONE */}
      <div className="home-section-one ">
        <div className="left-side-content col-lg-6 pb-5">
          <h1 className="pt-5 ps-4 pe-5 ps-sm-5">
            This is where traditional healing meets modern wellness
          </h1>
          <h4 className="pt-2 pb-3 ps-4 pe-5 ps-sm-5">
            Experience the rejuvenating power of acupuncture in a serene and
            supportive environment. Your journey to better health starts here.
          </h4>
          <button
            className="btn w-50 ms-auto me-auto p-1 d-flex align-items-center justify-content-center"
            onClick={handleShow}
          >
            Book an Appointment
          </button>
        </div>
        <div className="right-side-no-content col-lg-6 d-none d-lg-flex"></div>
      </div>
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
      {/* HOME SECTION TWO  */}
      <div className="home-section-two d-sm-flex pt-3 pb-3">
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          Holistic Healing Solutions{" "}
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          Personalized Wellness Plans{" "}
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          Compassionate Expert Care{" "}
        </p>
      </div>

      {/* HOME SECTION THREE  */}
      <div className="home-section-three p-md-5 p-3 ">
        <div className="row">
          <Link to='/tcmacupuncture' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/tsm_acup.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> TSM Acupuncture </h5>
                <p class="card-text">
                  Experience the timeless wisdom of Traditional Chinese Medicine
                  with our TCM Acupuncture, designed to restore balance and
                  harmony to your body.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/auricularacupuncture' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/auricular_acup.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Sculp & Auricular Acupuncture </h5>
                <p class="card-text">
                  Discover the benefits of Auricular Acupuncture, a specialized
                  therapy targeting key points in the ear to promote overall
                  health and wellness.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/mastertungsacupuncture' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/master_tungs.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Master Tung's Acupuncture </h5>
                <p class="card-text">
                  Unlock the healing power of Master Tung's Acupuncture,
                  renowned for its rapid and effective pain relief using unique
                  points and techniques.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/moxibustion' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/moxibustion.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Moxibustion </h5>
                <p class="card-text">
                  Experience the soothing warmth of Moxibustion, a traditional
                  therapy that uses heat to stimulate healing and enhance your
                  vitality.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/cuppingtherapy' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/cupping_therapy.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Cupping Therapy </h5>
                <p class="card-text">
                  Revitalize your body with our ancient Cupping Therapy, known
                  for its ability to improve circulation, reduce pain, and
                  remove toxins.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/sujoktherapy' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/sujok.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Sujok Therapy </h5>
                <p class="card-text">
                  Benefit from Sujok Therapy, a unique and effective treatment
                  that balances your body’s energy through specific points on
                  the hands and feet.
                </p>
              </div>
            </div>
          </Link>

          <Link to='/pnsttherapy' className="col-12 col-md-6 col-lg-4 p-3">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/pnst.jpg"}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  Peripheral Nerve Stimulation Therapy{" "}
                </h5>
                <p class="card-text">
                  Enhance your wellness with PNST, a cutting-edge therapy that
                  provides targeted relief for nerve pain and promotes optimal
                  nervous system function.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="achieve-balance-container p-3">
        <h3>
          Achieve <i>Balance</i> and Live <i>Pain-Free</i> at Every Stage of
          Life
        </h3>
      </div>

      {/* HOME SECTION FIVE */}
      <div className="home-section-five d-md-flex align-items-center">
        <div className="col-md-6 left-part-home-section-five  ">
          <h2 className="pt-5">
            {" "}
            Experience the Healing Power of Acupuncture{" "}
          </h2>
          <p className="p-4 p-md-5  pb-0 pt-3">
            {" "}
            Our mission is to help you find harmony and well-being, no matter
            your age or lifestyle. We provide compassionate and effective
            acupuncture and holistic health services. We are dedicated to
            helping you achieve optimal wellness, balance, and a pain-free life
            through personalized care and natural healing methods. Your
            well-being is our priority, and we strive to support you in every
            stage of life with expert guidance and treatments.
          </p>
          <ul className="p-4 p-md-5 pt-1 ms-5">
            <li className="">Painfree living</li>
            <li>Enhanced Digestion & Immune Function</li>
            <li>Balanced Hormones</li>
            <li>Improved Mental Wellbeing</li>
            <li>Radiant Glowing Skin</li>
            <li>Restored Sleep & Energy Levels</li>
            <li>Balanced Stress Levels</li>
          </ul>
        </div>
        <div className="col-md-6 right-part-home-section-five p-4 p-md-5 pt-3 pt-md-5">
          <img src={process.env.PUBLIC_URL + '/Images/home_ mission.jpg'}  alt="Treating" />
          <p className="pt-5">
            {" "}
            We uses a holistic approach to restore your body's natural balance.
            Through personalized acupuncture sessions, Healer Shaheera target
            specific points to alleviate pain,reduce stress, and promote overall
            well-being. Each treatment is tailored to your unique needs,
            ensuring a compassionate and effective healing experience. Trust us
            to guide you on your journey to health and harmony.{" "}
          </p>
        </div>
      </div>

      {/* HOME SECTION SIX */}
      <div className="home-section-six d-md-flex">
        <div className="healers-image p-4 p-md-0">
          <img
            src={process.env.PUBLIC_URL + '/Images/healer_home.jpg'} 
            alt="Healer"
            className="img-fluid"
          />
        </div>
        <Link to='/about'>
          <div className="p-4 pt-1 healers-detail-container">
            <div className="healers-detail p-3 pt-4">
              <h1 className="">Hr. Shaheera Jareesh</h1>
              <h3 className="">Licensed Acupuncturist</h3>
              <p>
                Healer Shaheera Jareesh is dedicated to providing compassionate
                and personalized care to each patient. With a deep understanding
                of traditional and modern wellness practices, their aim is to
                create a nurturing and supportive environment where patients
                feel relaxed and valued. The goal is to alleviate pain, restore
                balance, and enhance overall well-being, ensuring every patient
                leaves feeling rejuvenated and at ease.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* HOME SECTION SEVEN */}
      <div className="home-section-seven testimonials ">
        <h2 className="p-4">
          <i> Great Responses are our Motivation ...</i>
        </h2>
        <div className="d-flex flex-wrap">
          <div className="col-md-6">
            <p className="p-5 pt-2 pb-1">
              <i>
                "After struggling with chronic pain for years, I found relief
                and healing at this acupuncture clinic. The skilled
                practitioners tailored a treatment plan just for me, and I'm
                amazed at the results. Highly recommend!"
              </i>
            </p>
          </div>
          <div className="col-md-6">
            <p className="p-5 pt-2 pb-1">
              <i>
                "I was skeptical about acupuncture at first, but this clinic
                changed my mind completely. The calming atmosphere, combined
                with the expertise of the practitioners, made my sessions
                incredibly relaxing and effective. I'm grateful for the positive
                impact it's had on my health."
              </i>
            </p>
          </div>
          <div className="col-md-6">
            <p className="p-5 pt-2">
              <i>
                "As someone who suffers from anxiety, I was looking for
                alternative therapies to manage my symptoms. Acupuncture at this
                clinic has become an essential part of my self-care routine. It
                helps me find balance and tranquility in the midst of life's
                chaos."
              </i>
            </p>
          </div>
          <div className="col-md-6">
            <p className="p-5 pt-2">
              <i>
                "I've been coming to this acupuncture clinic for years, and I
                can't imagine my life without it. Whether it's managing pain,
                boosting my immune system, or simply finding a moment of peace,
                acupuncture has been a game-changer for me. Thank you to the
                wonderful team here for their expertise and compassion."
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
