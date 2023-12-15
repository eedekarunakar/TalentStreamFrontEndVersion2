import React from 'react'

function RecruiterChangePassword() {
  return (
    <div>

<>
<div class="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Change Passwords</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-password">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="change-password bg-white">
            <form action="https://themesflat.co/html/jobtex/dashboard/dashboard.html">
              <div className="form-password">
                <h3>Change Password</h3>
                <div className="pass-box">
                  <div className="inner info-wd">
                    <label className="title-url fs-16">Old Password</label>
                    <div className="inputs-group auth-pass-inputgroup relative flex2">
                      <input
                        type="password"
                        className="input-form password-input"
                        defaultValue="123456789abcd123"
                        required=""
                      />
                      <a className="icon-eye-off password-addon" />
                    </div>
                  </div>
                  <div className="inner info-wd">
                    <label className="title-url fs-16">New Password</label>
                    <div className="inputs-group auth-pass-inputgroup relative flex2">
                      <input
                        type="password"
                        className="input-form password-input"
                        defaultValue="123456789flat123"
                        required=""
                      />
                      <a className="icon-eye-off password-addon" />
                    </div>
                  </div>
                  <div className="inner info-wd">
                    <label className="title-url fs-16">
                      Retype New Password
                    </label>
                    <div className="inputs-group auth-pass-inputgroup relative flex2">
                      <input
                        type="password"
                        className="input-form password-input"
                        defaultValue="123456789flat123"
                        required=""
                      />
                      <a
                        className="icon-eye-off password-addon"
                        id="password-addon"
                      />
                    </div>
                  </div>
                  <div className="tt-button submit">
                    <a className="btn-3">Change Password</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</>






    </div>
  )
}

export default RecruiterChangePassword;