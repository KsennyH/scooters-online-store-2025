import { Product } from "@prisma/client";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BreadcrumbsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeProduct: Product,
    breadcrumbs: { name: string; slug: string },
}