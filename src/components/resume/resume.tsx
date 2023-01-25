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
              <h1>{t("resume.projects.title").toUpperCase()}</h1>
              <div id="timeline">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <div id="expcontent">
                <div class="entry">
                  <h1>{formatDate("11/01/2022", { month: "long" }).capitalize()} 2022 –</h1>
                  <div class="title">
                    <p class="jobtitle">CropManager, SEGES</p>
                    <p class="employment">frontend</p>
                  </div>
                  <p>{t("resume.projects.cropmanager")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("05/01/2022", { month: "long" }).capitalize()} 2022 –{" "}
                    {formatDate("10/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <div class="title">
                    <p class="jobtitle">StoreForecast, BESTSELLER</p>
                    <p class="employment">frontend</p>
                  </div>
                  <p>{t("resume.projects.perci")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("02/01/2022", { month: "long" }).capitalize()} 2022 –{" "}
                    {formatDate("04/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <div class="title">
                    <p class="jobtitle">LabTerm2, CGI</p>
                    <p class="employment">frontend</p>
                  </div>
                  <p>{t("resume.projects.npu")}</p>
                </div>

                <div class="entry">
                  <h1>
                    {formatDate("08/01/2021", { month: "long" }).capitalize()} 2021 –{" "}
                    {formatDate("01/01/2022", { month: "long" }).capitalize()} 2022
                  </h1>
                  <div class="title">
                    <p class="jobtitle">GEPARD, CGI</p>
                    <p class="employment">full stack</p>
                  </div>
                  <p>{t("resume.projects.gepard")}</p>
                </div>

                <div class="entry timeline-footer">
                  <p>... og mange flere</p>
                </div>
              </div>
            </div>

            <div id="skills">
              <h1>KOMPETENCER</h1>
              <div class="content">
                <div class="entry">
                  <h1>SPROG</h1>
                  <p>TS/JS, HTML, CSS/Sass, C#, SQL, Java, Python, C, C++</p>
                </div>

                <div class="entry">
                  <h1>TEKNOLOGIER</h1>
                  <p>Angular, React, RxJS, ASP.NET, Docker, Vue, GraphQL, REST, Node.js, Qwik, Unix, Kubernetes</p>
                </div>

                <div class="entry">
                  <h1>VÆRKTØJER</h1>
                  <p>
                    Git, Scrum, Neovim, zsh, UML, C4, <Latex />
                  </p>
                </div>
              </div>
            </div>

            <div id="education">
              <h1>UDDANNELSE</h1>
              <div class="content">
                <p>Aarhus School of Engineering</p>
                <p>Softwareteknologi</p>
              </div>
            </div>

            <div id="interests">
              <h1>INTERESSER</h1>
              <div class="content">
                <p>Når der skal slappes af</p>
                <p>Formel 1, klaver og gaming</p>
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
