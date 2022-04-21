import { Container } from "../../Design";
import { Figure } from "../../Design/Figure";
import { Image } from "../../Design/Img";

//image
// import imgProfile from "../../img/imgProfile.png";

export const MyWrapper = () => {
  return (
    <Container
      variant={{
        "@initial": "containerWrapper",
        "@lg": "containerWrapperMobile",
      }}
    >
      <Figure
        figureWrapper={{
          "@initial": "defaultStyles",
          "@sm": "responsiveStyles",
        }}
      >
        <Container
          containerImageWrapper={{
            "@initial": "defaultStyles",
            "@sm": "mobileStyles",
          }}
        >
          <Image src="https://avatars.githubusercontent.com/u/97963191?v=4" alt="image profile" />
        </Container>
      </Figure>
      <article>
        <div>
          <h1>Hello I'm Davi ⚡</h1>
          <div>
            <a href="#testing" target="_blank">
              Instagram
            </a>
            <a href="#testing" target="_blank">
              Twitter
            </a>
            <a href="#testing" target="_blank">
              GitHub
            </a>
            <a href="#testing" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h1>
            Front-End Developer <span>🛸</span>
          </h1>
          <p>
            <span>👨🏻‍💻</span>|Web developer
          </p>
          <p>
            <span>📑</span>|Analysis and systems development
          </p>
          <p>
            <span>🐻</span>|
            <a
              href="https://github.com/davi-sant"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub Account
            </a>
          </p>
        </div>
      </article>
    </Container>
  );
};
