import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    level: 'h1' | 'h2' | 'h3' | 'h4';
    children: ReactNode
}