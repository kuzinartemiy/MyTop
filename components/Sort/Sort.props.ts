import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sortType: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price
}