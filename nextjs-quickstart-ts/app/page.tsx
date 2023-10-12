"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./style.css";
export default function Home() {
  let starCount = 0;
  const maxStars = 5;
  let isAnimationRunning = false;

  const startAnimation = () => {
    if (isAnimationRunning) {
      return;
    }

    let a = document.getElementById("charging");

    const intervalId = setInterval(function () {
      if (starCount < maxStars) {
        (a as HTMLElement).innerHTML +=
          '<img src="./star-fill.svg" style="width:44px; padding:0.7rem " alt="1">';
        starCount++;
      } else {
        clearInterval(intervalId);
        isAnimationRunning = false;
      }
    }, 1200);

    isAnimationRunning = true;
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          <div className="hero-section">
            <div className="logo">
              <img src="./icon-primeract.svg" alt="logo" />
              <img
                src="./text-primereact.svg"
                style={{ width: "156.25px", height: "46.25px" }}
                alt="logo-text"
              />
            </div>
            <div className="hero-content">
              <h1>Start your next project with powerful PrimeReact</h1>
              <span>
                We strongly advise you to explore the&nbsp;
                <a
                  href="https://primereact.org/configuration/"
                  target="_blank"
                  className="doc-text"
                >
                  PrimeReact documentation
                </a>
                &nbsp;to enhance your skills.
              </span>
            </div>
          </div>

          <div className="grid-section">
            <div id="components" className="card forms">
              <div className="form-wrapper">
                <div className="deneme">
                  <span className="p-float-label form-input-wrapper">
                    <InputText id="username" className="form-input" />
                    <label htmlFor="username">Username</label>
                  </span>
                  <Button
                    className="form-button cyan-400"
                    label="Button"
                    style={{ marginTop: "2rem" }}
                  />
                </div>
              </div>

              <a
                href="https://primereact.org/installation"
                target="_blank"
                className="card-footer-link"
              >
                <span>Components</span>
                <i className="pi pi-arrow-right"></i>
              </a>
            </div>

            <div className="card primeland">
              <a href="https://discord.gg/j2DQFtPD8z" target="_blank">
                <img src="./primeland.svg" alt="primeland" />
              </a>
            </div>

            <div className="card discussions">
              <a
                href="https://github.com/orgs/primefaces/discussions"
                target="_blank"
              >
                <img src="./discussions.svg" alt="primeland" />
              </a>
            </div>

            <div className="card github">
              <div className="github-wrapper" onMouseEnter={startAnimation}>
                <img className="git-image" src="./github.svg" alt="github" />
                <div id="charging" className="stars"></div>
              </div>
              <a
                href="https://github.com/primefaces/primereact"
                target="_blank"
                className="card-footer-link"
              >
                <span>Please star PrimeReact on GitHub</span>
                <i className="pi pi-arrow-right"></i>
              </a>
            </div>

            <div className="card templates">
              <img
                src="./primetemplates.png"
                alt="prime-template"
                className="box-image"
              />
              <a
                href="https://primereact.org/templates/"
                target="_blank"
                className="card-footer-link"
              >
                <span>React Templates Powered by PrimeReact</span>
                <i className="pi pi-arrow-right"></i>
              </a>
            </div>

            <div className="card blocks">
              <img
                src="./primeblocks.png"
                alt="prime-template"
                className="box-image"
              />

              <a
                href="https://blocks.primereact.org/"
                target="_blank"
                className="card-footer-link"
              >
                <span>400+ Ready to Use UI Blocks</span>
                <i className="pi pi-arrow-right"></i>
              </a>
            </div>

            <div className="card primeone">
              <img
                src="./primeone.png"
                alt="prime-template"
                className="box-image"
              />
              <a
                href="https://primereact.org/uikit/"
                target="_blank"
                className="card-footer-link"
              >
                <span>Figma UI Kit</span>
                <i className="pi pi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-content">
            <a href="" className="license">
              PrimeReact - MIT License
            </a>

            <a className="footer-logo">
              <img src="./icon-primeract.svg" alt="logo" />
            </a>

            <div className="socials">
              <a href="">
                <i className="pi pi-github"></i>
              </a>
              <a href="">
                <i className="pi pi-discord"></i>
              </a>
              <a href="">
                <i className="pi pi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
