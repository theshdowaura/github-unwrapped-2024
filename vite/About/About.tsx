import { Stars } from "../Home/Stars";
import { RadialGradient } from "../RadialGradient";
import { AboutItem } from "./AboutItem";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { content } from "./content";
import styles from "./styles.module.css";

const headerProps = {
  description:
    "With this page we hope to answer all your questions about GitHub Unwrapped 2024.",
  title: "About",
};

const About = () => {
  return (
    <div className={styles.wrapper}>
      <RadialGradient />
      <Stars />
      <div className={styles.contentWrapper}>
        <MobileHeader {...headerProps} />
        <DesktopHeader {...headerProps} />
        <div className={styles.content}>
          {content.map((item) => (
            <div key={item.id} id={item.id}>
              <AboutItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
