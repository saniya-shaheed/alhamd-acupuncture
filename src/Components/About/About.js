import React from 'react'
import './About.css'

function About() {
  return (
      <section className='about-section p-md-4 pt-md-5'>
        <div className="">
        <div className='d-md-flex align-items-end'>
          <div className='p-4 col-md-6 pb-md-2 pe-md-1'>
          <div className='about-clinic p-3 p-md-5'>
            <p>
            <span>Al Hamd Acupuncture</span>, where traditional healing meets
             modern wellness was inaugurated on February 19, 2024 by the renowned healer 
             <b style={{color: "var(--darker-main-green)"}}> Rahman,
              founder of Rahman's Acupuncture Academy</b>. Our clinic is dedicated to offering
               a diverse range of therapies that cater to your holistic health needs. We 
               specialize in Cupping Therapy, Sujok Therapy, Perineural Injection Therapy,
                Moxibustion, and Auricular Acupuncture. Each therapy is designed 
                to address various health concerns, from chronic pain and stress to
                 digestive issues and respiratory problems. Our serene and supportive 
                 environment ensures that every patient receives personalized care,
                  promoting natural healing and overall well-being.
            </p>
          </div>
          </div>
          <div className='p-4 pt-0 col-md-6 ps-md-1 pb-md-2'>
          <div className='inaugration-img'>
            <img src='inaugration.png' alt='Inaugration' className='w-100' />
          </div>
          </div>
        </div>
        <hr className='d-md-none' />
        <div className='d-md-flex align-items-start'>
        <div className='p-4 col-md-6 pe-md-1 pt-md-0'>
          <div className='healer-img'>
            <img src='healer_home.jpg' alt='Healer' className='w-100'/>
          </div>
          </div>
          <div className='p-4 pt-0 ps-md-1'>
          <div className='healer-details p-3'>
            <p>
            Our esteemed healer, <span>Shaheera Jareesh</span>, brings a wealth of knowledge and
             expertise to our clinic. A graduate with a diploma in Acupuncture and 
             a DaSc degree, Shaheera has been practicing while pursuing her studies, 
             earning the Best Practitioner’s Certificate for her exceptional skills. 
          Her dedication to holistic healing has garnered her a loyal patient base even
           before her graduation. Shaheera’s compassionate approach and deep understanding
            of both traditional and modern wellness practices create a nurturing 
            environment where patients feel relaxed and valued. Her goal is to alleviate
             pain, restore balance, and enhance overall well-being, ensuring that every
              patient leaves feeling rejuvenated and at ease.
            </p>

          </div>
          </div>
        </div>
        </div>
        </section>
  )
}

export default About
