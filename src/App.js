/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as GithubLogo } from './images/githubLogo.svg';
import { ReactComponent as HomeDiagram } from './images/home_diagram.svg';

const bannerSectionStyles = css`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    161.94deg,
    rgb(255, 140, 90) 7.34%,
    rgb(255, 84, 213) 21.14%,
    rgb(128, 142, 253) 68.19%,
    rgb(107, 215, 204) 96.01%
  );
  padding: 16px 0;

  a {
    color: white;
    text-decoration: none;
    padding: 4px 0;
  }
`;

const heroStyles = css`
  background: url(/globe.svg) center -50px / cover no-repeat,
    linear-gradient(rgba(45, 55, 72, 0.8) 0%, rgba(45, 55, 72, 0) 100%),
    rgb(26, 32, 44);
  display: flex;
  justify-content: center;
`;

const wrapperStyles = css`
  max-width: 1200px;
  width: 100%;
`;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px 0;
`;

const navigationMenuListStyles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 40px;

  li > a {
    text-decoration: none;
    color: white;
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const heroSectionStyles = css`
  display: flex;
  color: white;
  margin: 96px 16px;
  gap: 64px;
`;

const heroHeadingStyles = css`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 110%;
  margin: 0;
  margin-bottom: 32px;
`;

const heroParagraphStyles = css`
  font-size: 1.25rem;

  strong {
    color: #9ae6b4;
    font-weight: 700;
  }
`;

const heroLinksContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`;

const greyHeroLinkStyles = css`
  text-decoration: none;
  color: white;
  background-color: #4a5568;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1.25rem;
  font-weight: 500;

  &:hover {
    background-color: #718096;
    transform: scale(0.99);
  }
`;

const whiteSectionStyles = css`
  max-width: 1200px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const whiteSectionHeading = css`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

const whiteSectionParagraph = css`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0px auto;
  width: 50%;
  text-align: center;
`;

const frameworksContainerStyles = css`
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 7%) 0px 20px 53px, rgb(0 0 0 / 4%) 0px 4px 15.9779px,
    rgb(0 0 0 / 2%) 0px 2px 6.63642px, rgb(0 0 0 / 1%) 0px 0px 2.40026px;
  background-color: white;
  padding: 32px 0;
  margin-top: 16px;

  h3 {
    padding: 0 32px;
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
  }

  > p {
    padding: 16px 32px;
    margin: 0;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 400;
    color: #4a5568;
  }
`;

const frameworksGridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px 16px;
`;

const frameworkLinkStyles = css`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.1s ease-in 0s;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
    line-height: 32px;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: #4a5568;
    margin: 0;
  }

  &:hover {
    background-color: #faf5ff;

    h4 {
      color: #6b46c1;
    }
  }
`;

const frameworkImageContainerStyles = css`
  border-radius: 5px;
  background-color: #000;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const pinkFrameworkImageContainerStyles = css`
  border-radius: 5px;
  background-color: #f9c4e7;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const frameworksLinksContainerStyles = css`
  border-top: 1px solid rgb(237, 242, 247);
  display: flex;
  justify-content: center;
  padding: 32px 0 0;
`;

function App() {
  return (
    <div>
      <section css={bannerSectionStyles}>
        <a href="/">
          <strong>Join us on Prisma Day!</strong> June 15 - 16 | Berlin &amp;
          Online
        </a>
      </section>
      <main>
        <div css={heroStyles}>
          <div css={wrapperStyles}>
            <header css={headerStyles}>
              <svg
                width="90"
                height="29"
                viewBox="0 0 90 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.209637 19.5075C-0.0659575 19.0728 -0.0701211 18.5191 0.198904 18.0802L10.3282 1.55731C10.8916 0.638316 12.252 0.718671 12.7033 1.69759L21.9569 21.7708C22.3002 22.5156 21.905 23.3919 21.1194 23.6276L6.72474 27.946C6.14558 28.1197 5.52155 27.8869 5.19781 27.3762L0.209637 19.5075ZM11.4969 6.38848C11.5945 5.90241 12.2605 5.83232 12.4572 6.28741L18.8402 21.0573C18.9603 21.3354 18.8108 21.6561 18.5205 21.7427L8.57492 24.7116C8.20935 24.8207 7.85916 24.5013 7.93428 24.1272L11.4969 6.38848ZM48.4948 21.6373H51.3226V11.2722H48.4948V21.6373ZM48.3744 8.59301C48.3744 7.67245 48.8878 7.21184 49.9137 7.21184C50.9394 7.21184 51.4527 7.67245 51.4527 8.59301C51.4527 9.03201 51.3244 9.37345 51.068 9.61767C50.8114 9.86189 50.4267 9.98367 49.9137 9.98367C48.8878 9.98367 48.3744 9.52011 48.3744 8.59301ZM87.1709 16.8352L86.0768 16.8722C85.2548 16.8971 84.6429 17.0457 84.2412 17.3174C83.8392 17.5895 83.6386 18.0033 83.6386 18.5598C83.6386 19.3569 84.0959 19.7557 85.0106 19.7557C85.6656 19.7557 86.1897 19.5674 86.5819 19.19C86.9744 18.8132 87.1709 18.3126 87.1709 17.688V16.8352ZM88.0053 21.6377L87.4583 20.2284H87.384C86.908 20.8281 86.4182 21.2439 85.9144 21.4757C85.4109 21.7074 84.7542 21.823 83.9446 21.823C82.9491 21.823 82.1661 21.5388 81.5941 20.9702C81.0226 20.4019 80.7368 19.592 80.7368 18.5411C80.7368 17.4412 81.1214 16.63 81.8907 16.1075C82.6607 15.5853 83.8209 15.2963 85.3723 15.2406L87.1709 15.185V14.7306C87.1709 13.6801 86.633 13.1546 85.5576 13.1546C84.7293 13.1546 83.7558 13.4047 82.6371 13.9056L81.7009 11.9957C82.8938 11.3718 84.2167 11.0592 85.6689 11.0592C87.0596 11.0592 88.1258 11.3623 88.8676 11.9679C89.6091 12.5736 89.98 13.4948 89.98 14.7306V21.6377H88.0053ZM72.4802 21.6377H69.6524V15.5836C69.6524 14.8359 69.527 14.2752 69.2772 13.901C69.0265 13.5271 68.6326 13.3399 68.0948 13.3399C67.3719 13.3399 66.8465 13.606 66.5188 14.1373C66.1911 14.669 66.0275 15.5437 66.0275 16.7612V21.6377H63.1996V11.2725H65.3599L65.74 12.5984H65.8978C66.1757 12.1227 66.5778 11.7502 67.1029 11.4814C67.6283 11.2123 68.231 11.0778 68.9109 11.0778C70.4623 11.0778 71.5128 11.5848 72.0631 12.5984H72.3132C72.5915 12.1162 73.001 11.7423 73.5419 11.4765C74.0827 11.2107 74.6929 11.0778 75.3728 11.0778C76.5471 11.0778 77.4359 11.3793 78.0382 11.9819C78.6409 12.5846 78.9421 13.5504 78.9421 14.8788V21.6377H76.1051V15.5836C76.1051 14.8359 75.9798 14.2752 75.73 13.901C75.4792 13.5271 75.0854 13.3399 74.5475 13.3399C73.8555 13.3399 73.3379 13.5874 72.9945 14.0817C72.6517 14.5763 72.4802 15.361 72.4802 16.4364V21.6377ZM60.17 20.9887C60.9088 20.4325 61.2781 19.6229 61.2781 18.5596C61.2781 18.047 61.1887 17.6047 61.0093 17.2338C60.8299 16.8629 60.5517 16.5355 60.1749 16.251C59.7981 15.9669 59.2046 15.6611 58.3946 15.3334C57.4862 14.9687 56.8976 14.6934 56.6285 14.5081C56.3601 14.3228 56.2252 14.1035 56.2252 13.8498C56.2252 13.3987 56.6426 13.1731 57.477 13.1731C57.9465 13.1731 58.4071 13.2445 58.8582 13.3862C59.3093 13.5286 59.7948 13.7106 60.314 13.9333L61.1668 11.8938C59.9863 11.35 58.7718 11.078 57.5232 11.078C56.2127 11.078 55.2009 11.3297 54.4872 11.8335C53.7729 12.3373 53.416 13.0497 53.416 13.9703C53.416 14.5081 53.5012 14.9612 53.6714 15.3288C53.841 15.6965 54.113 16.0225 54.4872 16.3067C54.8607 16.5912 55.4467 16.9002 56.2438 17.2338C56.8 17.4688 57.2453 17.6744 57.5788 17.8505C57.9128 18.0267 58.1475 18.1845 58.2837 18.3233C58.4195 18.4624 58.4876 18.6431 58.4876 18.8657C58.4876 19.4589 57.9743 19.7555 56.9483 19.7555C56.4478 19.7555 55.8684 19.672 55.2103 19.5054C54.5517 19.3384 53.9601 19.1315 53.4347 18.884V21.2205C53.8983 21.4182 54.3959 21.5681 54.9275 21.6703C55.4591 21.7721 56.1014 21.8231 56.8557 21.8231C58.3266 21.8231 59.4314 21.5449 60.17 20.9887ZM46.9948 11.1612C46.7414 11.1056 46.4232 11.0778 46.0398 11.0778C45.3969 11.0778 44.8021 11.2555 44.2554 11.611C43.708 11.9666 43.2739 12.4347 42.9524 13.0154H42.8136L42.3962 11.2725H40.2546V21.6377H43.0824V16.3624C43.0824 15.528 43.3341 14.8788 43.8376 14.4153C44.3418 13.9517 45.0446 13.7199 45.9472 13.7199C46.2749 13.7199 46.5528 13.751 46.7817 13.8126L46.9948 11.1612ZM31.9317 14.4616H32.8774C33.7613 14.4616 34.4223 14.2871 34.8613 13.9378C35.3003 13.5888 35.5196 13.0801 35.5196 12.4126C35.5196 11.7392 35.3356 11.2416 34.968 10.9201C34.6 10.5986 34.0239 10.4379 33.2388 10.4379H31.9317V14.4616ZM38.4214 12.3108C38.4214 13.7696 37.9657 14.8852 37.0537 15.6575C36.1423 16.4304 34.8459 16.8164 33.1649 16.8164H31.9317V21.6375H29.0577V8.0832H33.3872C35.0315 8.0832 36.2814 8.43708 37.1375 9.14485C37.9936 9.85262 38.4214 10.9081 38.4214 12.3108Z"
                  fill="#F7FAFC"
                />
              </svg>
              <nav>
                <ul css={navigationMenuListStyles}>
                  <li>
                    <a href="/">Products</a>
                  </li>
                  <li>
                    <a href="/">Quickstart</a>
                  </li>
                  <li>
                    <a href="/">Docs</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Community</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">
                      <GithubLogo />
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <section css={heroSectionStyles}>
              <div>
                <h1 css={heroHeadingStyles}>
                  Next-generation Node.js and TypeScript ORM
                </h1>
                <p css={heroParagraphStyles}>
                  Prisma helps app developers <strong>build faster</strong>{' '}
                  and&nbsp;<strong>make fewer errors</strong> with an open
                  source database toolkit for PostgreSQL, MySQL, SQL Server,
                  SQLite, MongoDB and CockroachDB.
                </p>
                <div css={heroLinksContainerStyles}>
                  <a href="/" css={greyHeroLinkStyles}>
                    Try Prisma in the Cloud
                  </a>
                  <a href="/" css={greyHeroLinkStyles}>
                    Try locally
                  </a>
                </div>
              </div>
              <img src="/hero-illustration.svg" alt="" />
            </section>
          </div>
        </div>
        <section css={whiteSectionStyles}>
          <h2 css={whiteSectionHeading}>
            How does Prisma fit into your stack?
          </h2>
          <p css={whiteSectionParagraph}>
            Prisma is a <strong>server-side</strong> library that helps your app
            read and write data to the database in an intuitive and safe way.
          </p>
          <HomeDiagram />
          <div css={frameworksContainerStyles}>
            <h3>The ORM that plays well with any framework</h3>
            <p>
              Easy to integrate into your framework of choice, Prisma simplifies
              database access, saves repetitive CRUD boilerplate and increases
              type safety. It's the perfect database toolkit for building robust
              and scalable web APIs.
            </p>
            <div css={frameworksGridContainer}>
              <a href="/" css={frameworkLinkStyles}>
                <div css={frameworkImageContainerStyles}>
                  <svg
                    width="152"
                    height="91"
                    viewBox="0 0 152 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.9385 23.9477H64.546V26.2092H38.5608V43.2301H62.9964V45.4916H38.5608V64.179H64.844V66.4405H35.9385V23.9477ZM67.1088 23.9477H70.1483L83.6177 42.635L97.3851 23.9477L116.111 0.210449L85.3461 44.5989L101.199 66.4405H98.0407L83.6177 46.5629L69.1352 66.4405H66.036L82.0085 44.5989L67.1088 23.9477ZM102.332 26.2092V23.9477H134.933V26.2092H119.914V66.4405H117.291V26.2092H102.332Z"
                      fill="white"
                    />
                    <path
                      d="M0.149414 23.9478H3.42736L48.6283 91.2225L29.9489 66.4406L2.89097 27.1615L2.77177 66.4406H0.149414V23.9478Z"
                      fill="white"
                    />
                    <path
                      d="M134.668 63.4964C135.21 63.4964 135.606 63.0835 135.606 62.5499C135.606 62.0164 135.21 61.6035 134.668 61.6035C134.132 61.6035 133.73 62.0164 133.73 62.5499C133.73 63.0835 134.132 63.4964 134.668 63.4964ZM137.245 61.0064C137.245 62.5817 138.387 63.6107 140.051 63.6107C141.824 63.6107 142.896 62.5499 142.896 60.7078V54.2223H141.467V60.7015C141.467 61.7242 140.951 62.2704 140.038 62.2704C139.222 62.2704 138.667 61.7623 138.648 61.0064H137.245ZM144.765 60.9238C144.867 62.5626 146.238 63.6107 148.279 63.6107C150.46 63.6107 151.825 62.5118 151.825 60.7586C151.825 59.3802 151.047 58.618 149.159 58.1797L148.145 57.9319C146.946 57.6525 146.461 57.2777 146.461 56.6234C146.461 55.7976 147.214 55.2577 148.343 55.2577C149.414 55.2577 150.154 55.7849 150.288 56.6298H151.679C151.596 55.0862 150.231 54 148.362 54C146.353 54 145.013 55.0862 145.013 56.7187C145.013 58.0653 145.772 58.8657 147.437 59.2532L148.624 59.539C149.842 59.8249 150.378 60.2441 150.378 60.9428C150.378 61.7559 149.536 62.3467 148.388 62.3467C147.157 62.3467 146.302 61.794 146.181 60.9238H144.765Z"
                      fill="#D4D4D4"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Next.js</h4>
                  <p>
                    Easiest way to work with a database for this popular React
                    framework.
                  </p>
                </div>
              </a>
              <a href="/" css={frameworkLinkStyles}>
                <div css={pinkFrameworkImageContainerStyles}>
                  <img src="/graphqlLogo.svg" alt="graphQL logo" />
                </div>
                <div>
                  <h4>GraphQL</h4>
                  <p>
                    Query databases from your GraphQL servers easily with
                    Prisma.
                  </p>
                </div>
              </a>
              <a href="/" css={frameworkLinkStyles}>
                <div css={frameworkImageContainerStyles}>
                  <svg
                    width="152"
                    height="91"
                    viewBox="0 0 152 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.9385 23.9477H64.546V26.2092H38.5608V43.2301H62.9964V45.4916H38.5608V64.179H64.844V66.4405H35.9385V23.9477ZM67.1088 23.9477H70.1483L83.6177 42.635L97.3851 23.9477L116.111 0.210449L85.3461 44.5989L101.199 66.4405H98.0407L83.6177 46.5629L69.1352 66.4405H66.036L82.0085 44.5989L67.1088 23.9477ZM102.332 26.2092V23.9477H134.933V26.2092H119.914V66.4405H117.291V26.2092H102.332Z"
                      fill="white"
                    />
                    <path
                      d="M0.149414 23.9478H3.42736L48.6283 91.2225L29.9489 66.4406L2.89097 27.1615L2.77177 66.4406H0.149414V23.9478Z"
                      fill="white"
                    />
                    <path
                      d="M134.668 63.4964C135.21 63.4964 135.606 63.0835 135.606 62.5499C135.606 62.0164 135.21 61.6035 134.668 61.6035C134.132 61.6035 133.73 62.0164 133.73 62.5499C133.73 63.0835 134.132 63.4964 134.668 63.4964ZM137.245 61.0064C137.245 62.5817 138.387 63.6107 140.051 63.6107C141.824 63.6107 142.896 62.5499 142.896 60.7078V54.2223H141.467V60.7015C141.467 61.7242 140.951 62.2704 140.038 62.2704C139.222 62.2704 138.667 61.7623 138.648 61.0064H137.245ZM144.765 60.9238C144.867 62.5626 146.238 63.6107 148.279 63.6107C150.46 63.6107 151.825 62.5118 151.825 60.7586C151.825 59.3802 151.047 58.618 149.159 58.1797L148.145 57.9319C146.946 57.6525 146.461 57.2777 146.461 56.6234C146.461 55.7976 147.214 55.2577 148.343 55.2577C149.414 55.2577 150.154 55.7849 150.288 56.6298H151.679C151.596 55.0862 150.231 54 148.362 54C146.353 54 145.013 55.0862 145.013 56.7187C145.013 58.0653 145.772 58.8657 147.437 59.2532L148.624 59.539C149.842 59.8249 150.378 60.2441 150.378 60.9428C150.378 61.7559 149.536 62.3467 148.388 62.3467C147.157 62.3467 146.302 61.794 146.181 60.9238H144.765Z"
                      fill="#D4D4D4"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Next.js</h4>
                  <p>
                    Easiest way to work with a database for this popular React
                    framework.
                  </p>
                </div>
              </a>
              <a href="/" css={frameworkLinkStyles}>
                <div css={frameworkImageContainerStyles}>
                  <svg
                    width="152"
                    height="91"
                    viewBox="0 0 152 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.9385 23.9477H64.546V26.2092H38.5608V43.2301H62.9964V45.4916H38.5608V64.179H64.844V66.4405H35.9385V23.9477ZM67.1088 23.9477H70.1483L83.6177 42.635L97.3851 23.9477L116.111 0.210449L85.3461 44.5989L101.199 66.4405H98.0407L83.6177 46.5629L69.1352 66.4405H66.036L82.0085 44.5989L67.1088 23.9477ZM102.332 26.2092V23.9477H134.933V26.2092H119.914V66.4405H117.291V26.2092H102.332Z"
                      fill="white"
                    />
                    <path
                      d="M0.149414 23.9478H3.42736L48.6283 91.2225L29.9489 66.4406L2.89097 27.1615L2.77177 66.4406H0.149414V23.9478Z"
                      fill="white"
                    />
                    <path
                      d="M134.668 63.4964C135.21 63.4964 135.606 63.0835 135.606 62.5499C135.606 62.0164 135.21 61.6035 134.668 61.6035C134.132 61.6035 133.73 62.0164 133.73 62.5499C133.73 63.0835 134.132 63.4964 134.668 63.4964ZM137.245 61.0064C137.245 62.5817 138.387 63.6107 140.051 63.6107C141.824 63.6107 142.896 62.5499 142.896 60.7078V54.2223H141.467V60.7015C141.467 61.7242 140.951 62.2704 140.038 62.2704C139.222 62.2704 138.667 61.7623 138.648 61.0064H137.245ZM144.765 60.9238C144.867 62.5626 146.238 63.6107 148.279 63.6107C150.46 63.6107 151.825 62.5118 151.825 60.7586C151.825 59.3802 151.047 58.618 149.159 58.1797L148.145 57.9319C146.946 57.6525 146.461 57.2777 146.461 56.6234C146.461 55.7976 147.214 55.2577 148.343 55.2577C149.414 55.2577 150.154 55.7849 150.288 56.6298H151.679C151.596 55.0862 150.231 54 148.362 54C146.353 54 145.013 55.0862 145.013 56.7187C145.013 58.0653 145.772 58.8657 147.437 59.2532L148.624 59.539C149.842 59.8249 150.378 60.2441 150.378 60.9428C150.378 61.7559 149.536 62.3467 148.388 62.3467C147.157 62.3467 146.302 61.794 146.181 60.9238H144.765Z"
                      fill="#D4D4D4"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Next.js</h4>
                  <p>
                    Easiest way to work with a database for this popular React
                    framework.
                  </p>
                </div>
              </a>
            </div>
            <div css={frameworksLinksContainerStyles}>Links container</div>
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
