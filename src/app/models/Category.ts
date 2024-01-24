import { ItemClass } from "./Item";

export type SimpleCategory = {
    _id: string;
    name: string;
    depth: number;
    index?: number;
    items: ItemClass[];
};