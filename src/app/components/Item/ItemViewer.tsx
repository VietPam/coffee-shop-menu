import { ItemClass } from '@/app/[lang]/page';
import { Item } from './Item';
import { ImageViewer } from '@/app/components/Item/Image/ImageViewer';
import { SimpleCategory } from '@/app/[lang]/page';

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
                <p>{item.description}</p>
            }
        />
    );
}
