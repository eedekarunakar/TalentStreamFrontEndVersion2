import React from 'react'

function RecruiterPostJob() {
  return (
    <div>
       <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Post A New Job</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-post flat-dashboard-setting">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="post-new profile-setting bg-white">
            <h3 className="title-img">
              Featured Image <span className="color-red">*</span>{" "}
            </h3>
            <div className="btn-wrap button-wrap flex2">
              <div className="tt-button button-browse">
                <a href="#">Browse</a>
              </div>
              <div className="fs-16 ">
                <a className="color-4">Upload image</a>{" "}
              </div>
            </div>
            <div className="wrap-titles">
              <h3 className="title-img">
                Job Title <span className="color-red">*</span>{" "}
              </h3>
              <fieldset className="info-wd">
                <input
                  type="text"
                  className="input-form"
                  defaultValue="UI UX Designer"
                />
              </fieldset>
            </div>
            <div className="text-editor-wrap">
              <h3 className="title-img">
                Job Description <span className="color-red">*</span>{" "}
              </h3>
              <div className="text-editor-main">
                <div className="options">
                  <button className="my-text-btn" data-command="undo">
                    <i className="fas fa-undo" />
                  </button>
                  <button className="my-text-btn" data-command="redo">
                    <i className="fas fa-redo" />
                  </button>
                  <button className="my-text-btn" data-command="bold">
                    <i className="fas fa-bold" />
                  </button>
                  <button className="my-text-btn" data-command="italic">
                    <i className="fas fa-italic" />
                  </button>
                  <button className="my-text-btn" data-command="underline">
                    <i className="fas fa-underline" />
                  </button>
                  <button className="my-text-btn" data-command="strikeThrough">
                    <i className="fas fa-strikethrough" />
                  </button>
                  <button
                    className="my-text-btn"
                    data-command="formatBlock"
                    data-block="H1"
                  >
                    H1
                  </button>
                  <button
                    className="my-text-btn"
                    data-command="formatBlock"
                    data-block="H2"
                  >
                    H2
                  </button>
                  <button
                    className="my-text-btn"
                    data-command="formatBlock"
                    data-block="H3"
                  >
                    H3
                  </button>
                  <button className="my-text-btn" data-command="justifyLeft">
                    <i className="fas fa-align-left" />
                  </button>
                  <button className="my-text-btn" data-command="justifyCenter">
                    <i className="fas fa-align-center" />
                  </button>
                  <button className="my-text-btn" data-command="justifyRight">
                    <i className="fas fa-align-right" />
                  </button>
                  <button className="my-text-btn" data-command="justifyFull">
                    <i className="fas fa-align-justify" />
                  </button>
                  <button className="my-text-btn" data-command="insertImage">
                    <i className="fas fa-images" />
                  </button>
                  <button className="my-text-btn" data-command="createLink">
                    <i className="fas fa-link" />
                  </button>
                </div>
                <div className="contentOutput" contentEditable="true" />
              </div>
            </div>
            <div className="form-infor flex flat-form">
              <div className="info-box info-wd">
                <div id="item_category" className="dropdown titles-dropdown">
                  <label className="title-user fw-7">Category</label>
                  <a className="btn-selector nolink input-form">
                    {" "}
                    Accountng/ Finance
                  </a>
                  <ul>
                    <li>
                      <span>Accountng/ Finance</span>
                    </li>
                    <li>
                      <span>User/ Finance</span>
                    </li>
                    <li>
                      <span>Admin/ Finance</span>
                    </li>
                  </ul>
                </div>
                <fieldset>
                  <label className="title-user fw-7">Tag</label>
                  <input type="text" className="input-form" required="" />
                </fieldset>
                <div id="item_apply" className="dropdown titles-dropdown">
                  <label className="title-user fw-7">Job Apply Type</label>
                  <a className="btn-selector nolink input-form"> Internal</a>
                  <ul>
                    <li>
                      <span>Internal</span>
                    </li>
                    <li>
                      <span>Junior</span>
                    </li>
                    <li>
                      <span>Mid Level</span>
                    </li>
                    <li>
                      <span>Senior</span>
                    </li>
                  </ul>
                </div>
                <fieldset>
                  <label className="title-user fw-7">Job Apply Email</label>
                  <input type="email" className="input-form" required="" />
                </fieldset>
                <fieldset>
                  <label className="title-user fw-7">Min. Salary</label>
                  <input type="tel" className="input-form" required="" />
                </fieldset>
                <div id="item_date" className="dropdown titles-dropdown">
                  <label className="title-user fw-7">Experience</label>
                  <a className="btn-selector nolink input-form"> 3 Years </a>
                  <ul>
                    <li>
                      <span>1 Years</span>
                    </li>
                    <li>
                      <span>3 Years</span>
                    </li>
                    <li>
                      <span>5 Years</span>
                    </li>
                  </ul>
                </div>
                <div
                  id="item_qualification"
                  className="dropdown titles-dropdown"
                >
                  <label className="title-user fw-7">Qualification</label>
                  <a className="btn-selector nolink input-form">
                    {" "}
                    Certificate{" "}
                  </a>
                  <ul>
                    <li>
                      <span>Certificate</span>
                    </li>
                    <li>
                      <span>University</span>
                    </li>
                    <li>
                      <span>College</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info-box info-wd">
                <div id="item_1" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Type</label>
                  <a className="btn-selector nolink input-form"> Freelance </a>
                  <ul>
                    <li>
                      <span>Online</span>
                    </li>
                    <li>
                      <span>Freelance</span>
                    </li>
                    <li>
                      <span>Offline</span>
                    </li>
                  </ul>
                </div>
                <div id="item_2" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Gender</label>
                  <a className="btn-selector nolink input-form"> Male</a>
                  <ul>
                    <li>
                      <span>10 - 50</span>
                    </li>
                    <li>
                      <span>50 - 120</span>
                    </li>
                    <li>
                      <span>120 - 500</span>
                    </li>
                  </ul>
                </div>
                <fieldset>
                  <label className="title-user fw-7">
                    External URL for Apply Job
                  </label>
                  <input type="url" className="input-form" required="" />
                </fieldset>
                <div id="item_3" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Salary Type</label>
                  <a className="btn-selector nolink input-form"> Month</a>
                  <ul>
                    <li>
                      <span>1</span>
                    </li>
                    <li>
                      <span>6</span>
                    </li>
                    <li>
                      <span>12</span>
                    </li>
                  </ul>
                </div>
                <fieldset>
                  <label className="title-user fw-7">Max. Salary</label>
                  <input
                    type="text"
                    className="input-form"
                    defaultValue="Master Degree"
                    required=""
                  />
                </fieldset>
                <div id="item_4" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Career Level</label>
                  <a className="btn-selector nolink input-form"> Manager</a>
                  <ul>
                    <li>
                      <span>Managerial</span>
                    </li>
                    <li>
                      <span>Manager</span>
                    </li>
                    <li>
                      <span>Personnel</span>
                    </li>
                  </ul>
                </div>
                <fieldset>
                  <label className="title-user fw-7">
                    Introduction Video URL
                  </label>
                  <input type="url" className="input-form" required="" />
                </fieldset>
              </div>
            </div>
            <div className="wrap-date">
              <fieldset className="info-wd">
                <h5 className="title-url fw-7">Applicant Deadline Date</h5>
                <input type="date" className="input-form" />
              </fieldset>
            </div>
            <div className="photo-wrap">
              <h3>Photo</h3>
              <ul className="flex">
                <li className="file-delete">
                  <img src="../images/dashboard/photo-1.jpg" alt="" />
                  <a className="icon-clear remove-file" />{" "}
                </li>
                <li className="file-delete">
                  <img src="../images/dashboard/photo-2.jpg" alt="" />{" "}
                  <a className="icon-clear remove-file" />{" "}
                </li>
                <li className="file-delete">
                  <img src="../images/dashboard/photo-1.jpg" alt="" />{" "}
                  <a className="icon-clear remove-file" />{" "}
                </li>
              </ul>
            </div>
            <div className="btn-wrap button-wrap flex2">
              <div className="tt-button button-browse">
                <a href="#" className="btn-3">
                  Browse
                </a>
              </div>
              <div className="fs-16">
                <a>Upload image, video</a>{" "}
              </div>
            </div>
            <div className="contact-wrap info-wd">
              <h3>Location</h3>
              <div className="form-map form-wg flex flat-form">
                <div className="form-box  wg-box">
                  <fieldset className="">
                    <label className="title-user fs-16"> Address</label>
                    <input
                      type="text"
                      className="input-form"
                      defaultValue="Las Vegas, NV 89107, USA"
                    />
                  </fieldset>
                </div>
                <div className="form-box  wg-box">
                  <div id="item_category2" className="dropdown titles-dropdow">
                    <label className="title-user fs-16">Location</label>
                    <a className="btn-selector nolink input-form"> Tokyo </a>
                    <ul>
                      <li>
                        <span>VietNam</span>
                      </li>
                      <li>
                        <span>Tokyo</span>
                      </li>
                      <li>
                        <span>USA</span>
                      </li>
                      <li>
                        <span>England</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <fieldset className="address-box">
                <label className="title-user fs-16">Map Location</label>
                <input type="text" className="input-form" />
              </fieldset>
            </div>
            <div className="map-content">
              <iframe
                className="map-box"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="area-wrap info-wd">
              <div className="form-social form-wg flex flat-form">
                <div className="form-box  wg-box">
                  <fieldset className="">
                    <input
                      type="text"
                      className="input-form input-style"
                      defaultValue="40.69499198068389"
                    />
                  </fieldset>
                </div>
                <div className="form-box  wg-box">
                  <fieldset className="">
                    <input
                      type="text"
                      className="input-form input-style"
                      defaultValue="-73.9959976171989"
                    />
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="wrap-video">
              <fieldset className="info-wd">
                <label className="title-url fw-4 fs-16 color-4">
                  Introduction Video
                </label>
                <input
                  type="url"
                  className="input-form input-style"
                  defaultValue="https://www.youtube.com/watch?v=I6ZLgk_bq90"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</div>
  )
}

export default RecruiterPostJob;