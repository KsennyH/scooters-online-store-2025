import { ReactNode } from "react";

export default interface TitleProps {
    level: 'h1' | 'h2' | 'h3' | 'h4';
    children: ReactNode
}