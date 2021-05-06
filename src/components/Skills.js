import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  ariaValuenow="100"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  ariaValuenow="90"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  ariaValuenow="75"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  ariaValuenow="80"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i class="val">90%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  ariaValuenow="90"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                Photoshop <i class="val">55%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  ariaValuenow="55"
                  ariaValuemin="0"
                  ariaValuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
