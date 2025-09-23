import { JSX } from "react";
import styles from "./Section.module.css";
import { SectionProps } from "./SectionProps";
import { Title } from "../title/Title";
import cn from "classnames";

export const Section = ({title, level='h1', children, className, ...props}: SectionProps): JSX.Element => {
    return(
        <section className={cn(styles.section, className)} {...props}>
            <div className="container">
                <Title level={level} className={styles.sectionTitle}>{title}</Title>
            </div>
            {children}
        </section>
    );
}