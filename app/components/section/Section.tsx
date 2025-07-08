import { JSX } from "react";
import styles from "./Section.module.css";
import { SectionProps } from "./SectionProps";
import { Title } from "../title/Title";

export const Section = ({title, children}: SectionProps): JSX.Element => {
    return(
        <section className={styles.section}>
            <div className="container">
                <Title level="h2" className={styles.sectionTitle}>{title}</Title>
            </div>
            {children}
        </section>
    );
}