import React from 'react'
import resume from '../../images/myresume.jpg';

export default function ApplicantResume() {
  return (
    <div>

<div class="dashboard__content">
    <section class="page-title-dashboard">
      <div class="themes-container">
        <div class="row">
          <div class="col-lg-12 col-md-12 ">
            <div class="title-dashboard">
              <div class="title-dash flex2">My Resume</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flat-dashboard-detele flat-dashboard-password">
      <div class="themes-container">
        <img src={resume}></img>
      </div>
    </section>
    </div>
    </div>
  )
}
