import React from 'react'

function RecruiterMyOrganization() {
  return (
    <div>
<div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">My Organization</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="profile-setting bg-white">
            <div className="author-profile flex2 border-bt">
              <div className="wrap-img flex2">
                <div className="img-box relative">
                  <img
                    className="avatar "
                    id="profileimg"
                    src="../images/dashboard/image-up.jpg"
                    alt=""
                  />
                </div>
                <div id="upload-profile">
                  <h5 className="fw-6">Upload a Logo:</h5>
                  <h6>JPG 80x80px</h6>
                  <input
                    className="up-file"
                    id="tf-upload-img"
                    type="file"
                    name="profile"
                    required=""
                  />
                </div>
              </div>
              <div className="wrap-img flex2">
                <div className="img-box relative">
                  <img
                    className="avatar "
                    id="profileimg2"
                    src="../images/dashboard/image-up.jpg"
                    alt=""
                  />
                </div>
                <div id="upload-profile2">
                  <h5 className="fw-6">Upload a new cover:</h5>
                  <h6>JPG 1920x460px</h6>
                  <input
                    className="up-file"
                    id="tf-upload-img2"
                    type="file"
                    name="profile"
                    required=""
                  />
                </div>
              </div>
              <div className="tt-button button-style">
                <a href="#" className="btn-3">
                  Save Profile
                </a>
              </div>
            </div>
            <div className="form-infor-profile">
              <h3 className="title-info">Information</h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                    <label className="title-user fw-7">Employer Name</label>
                    <input
                      type="text"
                      className="input-form"
                      defaultValue="Avitex Agency"
                      required=""
                    />
                  </fieldset>
                  <fieldset>
                    <label className="title-user fw-7">Phone Number</label>
                    <input
                      type="tel"
                      className="input-form"
                      defaultValue="123  456  7890"
                      required=""
                    />
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <label className="title-user fw-7">Founded Date</label>
                    <a className="btn-selector nolink input-form"> 2018</a>
                    <ul>
                      <li>
                        <span>2018</span>
                      </li>
                      <li>
                        <span>2019</span>
                      </li>
                      <li>
                        <span>2020</span>
                      </li>
                      <li>
                        <span>2021</span>
                      </li>
                      <li>
                        <span>2022</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <label className="title-user fw-7">Email</label>
                    <input
                      type="email"
                      className="input-form"
                      defaultValue="hi.avitex@gmail.com"
                      required=""
                    />
                  </fieldset>
                  <fieldset>
                    <label className="title-user fw-7">Website</label>
                    <input type="url" className="input-form" required="" />
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                    <label className="title-user fw-7">Company Size</label>
                    <a className="btn-selector nolink input-form"> 50 - 120</a>
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
                </div>
              </div>
              <div className="show-wrap ">
                <h5 className=" fw-7">Show profile</h5>
                <div className="show-box flex">
                  <div className="show-inner flex2">
                    <input type="radio" id="r1" name="rr" />
                    <label htmlFor="r1">
                      <span />
                      Show
                    </label>
                  </div>
                  <div className="show-inner flex2">
                    <input type="radio" id="r2" name="rr" />
                    <label htmlFor="r2">
                      <span />
                      Hidden
                    </label>
                  </div>
                </div>
              </div>
              <div className="tag-wrap">
                <h5 className="title-tag fw-7">
                  Categories <span className="color-red">*</span>
                </h5>
                <div className="tag-area">
                  <ul>
                    <li>
                      <input type="text" className="tag-input" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wrap-url border-bt">
                <fieldset className="info-wd">
                  <label className="title-url fw-7">Profile URL</label>
                  <input type="url" className="input-form" />
                </fieldset>
              </div>
              <div className="text-editor-wrap border-bt">
                <h3>About Company</h3>
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
                    <button
                      className="my-text-btn"
                      data-command="strikeThrough"
                    >
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
                    <button
                      className="my-text-btn"
                      data-command="justifyCenter"
                    >
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
              <div className="photo-wrap">
                <h3>Profile Photo</h3>
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
              <div className="button-wrap flex2">
                <div className="tt-button button-browse">
                  <a href="#">Browse</a>
                </div>
                <div className="fs-16">
                  <a>Upload image</a>{" "}
                </div>
              </div>
              <div className="wrap-url border-bt">
                <fieldset className="info-wd">
                  <label className="title-url fw-7">Introduction Video</label>
                  <input
                    type="url"
                    className="input-form"
                    defaultValue="https://www.youtube.com/watch?v=I6ZLgk_bq90"
                  />
                </fieldset>
              </div>
              <div className="social-wrap border-bt">
                <h3>Social Network</h3>
                <div className="form-social form-wg flex flat-form">
                  <div className="form-box info-wd wg-box">
                    <fieldset className="flex2">
                      <span className="icon-facebook" />
                      <input
                        type="url"
                        className="input-form"
                        defaultValue="http://www.facebook.com/avitex"
                      />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-twitter" />
                      <input
                        type="url"
                        className="input-form2"
                        placeholder="URL"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-instagram1" />
                      <input
                        type="url"
                        className="input-form2"
                        placeholder="URL"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="form-box info-wd wg-box">
                    <fieldset className="flex2">
                      <span className="icon-linkedin2" />
                      <input
                        type="url"
                        className="input-form2"
                        placeholder="URL"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-pinterest" />
                      <input
                        type="url"
                        className="input-form2"
                        placeholder="URL"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-youtube" />
                      <input
                        type="url"
                        className="input-form2"
                        placeholder="URL"
                        required=""
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="member-wrap border-bt">
                <div className="member-box">
                  <h3>Member</h3>
                  <div className="form-info info-wd">
                    <div className="form-member flex2">
                      <input
                        type="text"
                        className="fw-7 input-form"
                        defaultValue="Member 1"
                      />
                      <a className="icon-write1" />
                    </div>
                    <div className="info-box ">
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Name</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="Maverick Nguyen"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Designation</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="Manager"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Experience</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="2 years"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">
                          Social Network
                        </label>
                        <input
                          type="url"
                          className="input-form"
                          defaultValue="http://www.facebook.com/avitex"
                        />
                      </fieldset>
                      <div className="upload-wrap flex2">
                        <label className="fw-6">Profile Image</label>
                        <input
                          className="up-file"
                          type="file"
                          name="profile"
                          required=""
                        />
                      </div>
                      <fieldset className="message-wrap flex">
                        <label className="fw-6">Description</label>
                        <textarea
                          name="message"
                          rows={3}
                          tabIndex={3}
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="form-member flex2">
                      <input
                        type="text"
                        className="fw-7 input-form"
                        defaultValue="Member 2"
                      />
                      <a className="icon-write1 loadmore2" />
                    </div>
                    <div className="info-box fl-item">
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Name</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="Maverick Nguyen"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Designation</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="Manager"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">Experience</label>
                        <input
                          type="text"
                          className="input-form"
                          defaultValue="2 years"
                        />
                      </fieldset>
                      <fieldset className="flex2">
                        <label className="title-user fw-7">
                          Social Network
                        </label>
                        <input
                          type="url"
                          className="input-form"
                          defaultValue="http://www.facebook.com/avitex"
                        />
                      </fieldset>
                      <div className="upload-wrap flex2">
                        <label className="fw-6">Profile Image</label>
                        <input
                          className="up-file"
                          type="file"
                          name="profile"
                          required=""
                        />
                      </div>
                      <fieldset className="message-wrap flex">
                        <label className="fw-6">Description</label>
                        <textarea
                          id="comment-message"
                          name="message"
                          rows={3}
                          tabIndex={3}
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="member-button">
                      <a href="#" className="">
                        <h4 className="fw-7">Member</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-wrap info-wd border-bt">
                <h3>Contact Information</h3>
                <fieldset className="address-box">
                  <label className="title-user fw-7">Address</label>
                  <input
                    type="text"
                    className="input-form input-style"
                    defaultValue="71  St. Takayamio, Tokyo"
                  />
                </fieldset>
                <div className="form-social form-wg flex flat-form">
                  <div className="form-box  wg-box">
                    <div
                      id="item_category2"
                      className="dropdown titles-dropdow"
                    >
                      <label className="title-user color-1 fw-7">
                        Location
                      </label>
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
                  <div className="form-box  wg-box">
                    <fieldset className="">
                      <label className="title-user fw-7">Map Location</label>
                      <input
                        type="text"
                        className="input-form input-style"
                        defaultValue="243- 235  St. Takayamio, Tokyo"
                      />
                    </fieldset>
                  </div>
                </div>
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
                        className="input-form "
                        defaultValue="40.69499198068389"
                      />
                    </fieldset>
                  </div>
                  <div className="form-box  wg-box">
                    <fieldset className="">
                      <input
                        type="text"
                        className="input-form "
                        defaultValue="-73.9959976171989"
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
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

export default RecruiterMyOrganization;