import '@/lib/mongodb'; // Importing library to connect to MongoDB
import type { LocalizedString } from '@/lib/i18n-config';

export class ItemClass {
    static readonly fields = ['name', 'description', 'sizes', 'price', 'image'];

    public name!: LocalizedString;

    /**
     * Ingredients of the item, e.g. milk, sugar, etc.
     * or whatever else you want to tell about given item
     */
    public description?: LocalizedString;

    /**
     * Price in lari. If no sizes are specified, then only first element of the array is used.
     */
    public price!: (number | null)[];

    public image?: string;
}
