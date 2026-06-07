import { FC, ReactNode } from "react";
import '../../style/section.css';

const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="hero-section">
      {children}
    </section>
  );
};

export default Section;