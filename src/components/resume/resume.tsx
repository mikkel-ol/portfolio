import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import Latex from "components/latex";
import { $translate as t, formatDate } from "qwik-speak";
import { useFavicon } from "src/hooks/useFavicon";

import stylesPseudo from "./resume-pseudo.scss?inline";
import styles from "./resume.scss?inline";

export default component$(() => {
  useStyles$(stylesPseudo);
  useStylesScoped$(styles);

  useFavicon("/favicon/resume.ico");

  // custom attribute hack
  const page = { size: "A4" };

  return (
    <>
      <div id="cvRoot">
        <div class="errorMsg">
          <h1 class="error">
            Please view on a desktop computer
            <br />
            🤷🏻‍♂️
          </h1>
        </div>

        <div id="cv">
          <div class="page" {...page}>
            <div id="website">
              <a target="_blank" rel="noopener noreferrer" href="https://mikkel.website/resume">
                portfolio.ikkel.dk/resume
              </a>
            </div>
            <img src="/img/profile.jpg" alt="Profile picture" id="profilepic" />
            <h1 id="name">MIKKEL O. LAURSEN</h1>
            <h1 id="title">{t("resume.title").toUpperCase()}</h1>

            <div id="contact">
              <img src="/img/social/email.png" alt="E-mail" />
              <a href="mailto:m@ikkel.dk?Subject=Let's%20do%20something%20together!">m@ikkel.dk</a>
              <img src="/img/social/phone-book.png" alt="Phone" />
              <a href="tel:26789090">+45 26 78 90 90</a>
              <img src="/img/social/linkedin.png" alt="LinkedIn" />
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mikkellaursen">
                mikkellaursen
              </a>
            </div>

            <div id="about">
              <p>Passion for arkitektur, design og clean code</p>
              <p>Engageret samarbejdspartner</p>
              <p>Drevet af nysgerrighed og forståelse</p>
              <p>Interesseret i ny teknologi og state-of-the-art</p>
              <p>Bidrager med ansvarlighed og snilde</p>
            </div>

            <div id="experience">
              <h1>PROJECTS</h1>
              <div id="timeline">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <div id="expcontent">
                <div class="entry">
                  <h1>{formatDate("11/01/2022", { month: "long" }).capitalize()} 2022 –</h1>
                  <p class="jobtitle">CropManager, SEGES</p>
                  <p>{t("resume.projects.cropmanager")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("05/01/2022", { month: "long" }).capitalize()} 2022 –{" "}
                    {formatDate("10/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <p class="jobtitle">StoreForecast, BESTSELLER</p>
                  <p>{t("resume.projects.perci")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("02/01/2022", { month: "long" }).capitalize()} 2022 –{" "}
                    {formatDate("04/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <p class="jobtitle">LabTerm2, CGI</p>
                  <p>{t("resume.projects.npu")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("08/01/2021", { month: "long" }).capitalize()} 2021 –{" "}
                    {formatDate("01/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <p class="jobtitle">GEPARD, CGI</p>
                  <p>{t("resume.projects.gepard")}</p>
                </div>
              </div>
            </div>

            <div id="skills">
              <h1>KOMPETENCER</h1>
              <div class="content">
                <div class="entry">
                  <h1>SPROG</h1>
                  <p>C, C++, C#, XAML, Java, Python, HTML, CSS, JS, SQL, VHDL, Assembly</p>
                </div>

                <div class="entry">
                  <h1>VÆRKTØJER</h1>
                  <p>Scrum, Git, V-model, GNU Make, PlantUML</p>
                </div>

                <div class="entry">
                  <h1>DOKUMENTATION</h1>
                  <p>
                    <Latex />, UML, SysML, Doxygen
                  </p>
                </div>

                <div class="entry">
                  <h1>ANDET</h1>
                  <p>RESTful API, Node.js, Unix, .NET Core, CI, Kaffebryg ☕️</p>
                </div>
              </div>
            </div>

            <p id="footer">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/mikkel-ol/">
                <img src="/img/social/039-github.png" />
                <b>mikkel-ol</b>
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <LangSelect /> */}
    </>
  );
});
