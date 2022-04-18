import { Container } from "../../Design";
import { Figure } from "../../Design/Figure";

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
        <div>image</div>
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
