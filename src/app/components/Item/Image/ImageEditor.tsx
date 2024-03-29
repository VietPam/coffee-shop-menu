import { DeleteButton } from '../../buttons/DeleteButton';
import { ImageViewer } from './ImageViewer';
import { ImageView } from './ImageView';

export interface EditableImageProps {
    image?: string;
    itemIndex: number;
    categoryId: string;
}

export function ImageEditor({
    image,
    itemIndex,
    categoryId,
}: EditableImageProps) {
    return (
        <>
            {image && (
                <ImageView>
                    <div className="invisible absolute left-1 top-1 z-30 flex gap-1 group-hover:visible">
                        <DeleteButton
                            aria-label="Delete image"
                            fetchUrl={`/api/category/${categoryId}/items/${itemIndex}/image`}
                        />
                    </div>
                    <ImageViewer src={image} />
                </ImageView>
            )}
        </>
    );
}
