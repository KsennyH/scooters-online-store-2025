import { ReactNode } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    level?: "h1" | "h2" | "h3" | "h4";
    children: ReactNode;
}