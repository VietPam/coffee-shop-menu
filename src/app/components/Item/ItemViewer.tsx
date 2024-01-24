import { ItemClass } from '../../models/Item';
import { Item } from './Item';
import { ImageViewer } from '@/app/components/Item/Image/ImageViewer';
import { SimpleCategory } from '../../models/Category';
import { PriceSelectorViewer } from '../PriceSelector/PriceSelectorViewer';
export function ItemViewer({
    item,
}: {
    item: ItemClass;
    itemIndex: number;
    category: SimpleCategory;
}) {
    return (
        <Item
            image={
                item.image && (
                    <ImageViewer
                        src={item.image}
                        alt={item.name}
                    />
                )
            }
            title={
                <h3 className="card-title text-2xl">
                    {item.name}
                </h3>
            }
            description={
                <p className="text-base text-stone-950	 font-bold">{item.description}</p>
            }
            priceSelector={
                <PriceSelectorViewer
                    name={item.name}
                    price={item.price}
                />
            }
        />
    );
}
