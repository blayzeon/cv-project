import React from "react";

export default function Reference() {
  return (
    <div id="cv-background">
      <div id="cv-container">
        <div className="flex-container">
          <div className="cv-general">
            <h1>Your Name</h1>
            <p className="cv-subtext">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </p>
          </div>
          <div>
            <div>
              <h3 className="cv-accent">EXPERIENCE</h3>
              <ul>
                <li>
                  <h4>
                    <strong>Company</strong>, Location - <em>Job Title</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
                <li>
                  <h4>
                    <strong>Company</strong>, Location - <em>Job Title</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="cv-accent">EDUCATION</h3>
              <ul>
                <li>
                  <h4>
                    <strong>School Name</strong>, Location - <em>Degree</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
                <li>
                  <h4>
                    <strong>School Name</strong>, Location - <em>Degree</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="cv-accent">PROJECTS</h3>
              <ul>
                <li>
                  <h4>
                    <strong>Project Name</strong> - <em>Detail</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
                <li>
                  <h4>
                    <strong>School Name</strong>, Location - <em>Degree</em>
                  </h4>
                  <p className="cv-info">MONTH 20XX - PRESENT</p>
                  <p className="cv-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div className="cv-general">
            123 Your Street
            <br />
            Your City, ST 12345
            <br />
            <strong>
              123-456-7890
              <br />
              no_reply@example.com
            </strong>
          </div>
          <div>
            <div>
              <h3 className="cv-accent">SKILLS</h3>
              <ul>
                <li className="cv-info">Lorem ipsum dolor sit amet.</li>
                <li className="cv-info">Consectetuer adipiscing elit.</li>
                <li className="cv-info">
                  Sed diam nonummy nibh euismod tincidunt.
                </li>
                <li className="cv-info">
                  L​​​‌​aoreet dolore magna aliquam erat volutpat.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="cv-accent">LANGUAGES</h3>
              <ul>
                <li className="cv-info">
                  Lorem ipsum, Dolor sit amet, Consectetuer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
