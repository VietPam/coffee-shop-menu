import {Drawer} from '@/app/components/Drawer/Drawer';
import { CategoryViewer } from '@/app/components/Category/CategoryViewer';
import '../globals.scss';
export type SimpleCategory = {
    _id: string;
    name: string;
    depth: number;
    index?: number;
    items: ItemClass[];
};
export type ItemClass ={
    name: string;
    description: string;
    price: number;
    image: string;
};
async function getCategories() {
    const staticCategories: SimpleCategory[] = [
        {
            _id: '1',
            name: 'Category 1',
            depth: 1,
            index: 1,
            items: [
                {
                    name: 'item 1',
                    description: 'description 1',
                    price: 1,
                    image: 'data:image/jpeg;base64,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',
                },
            ],
        },
    ];
    return staticCategories;
}

export const revalidate = false;

export default async function Home() {
    const categories = await getCategories();
    return (
        <Drawer
            name='Name'
            navbarElements={
                <>
                    {/* <LanguagePickerViewer selectedLang={lang} />
                    <CartDisplay /> */}
                </>
            }
            navbarChangeOnScroll={true}
            headers={categories
                .sort((a, b) => (b.index ?? 0) - (a.index ?? 0))
                .map((category) => {
                    return {
                        name: category.name,
                        id: category.name,
                        depth: category.depth,
                    };
                })}
        >
            <div
                className="min-h-s-screen hero relative -top-16"
                style={{
                    backgroundImage: `url("/static/backgroundPlaceholder.webp")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                        Name
                        </h1>
                        <p className="mb-5">Name</p>
                    </div>
                </div>
                <a
                    className="btn-instagram group btn-square btn absolute bottom-4 right-4 flex gap-2 focus:w-auto focus:px-4 sm:w-auto sm:px-4"
                    href="https://www.instagram.com/slivki_coffee_ge/"
                    target="_blank"
                >
                    <span className="hidden group-focus:inline sm:inline">
                        @slivki_coffee_ge
                    </span>
                    <img
                        alt="Instagram logo"
                        src="/static/instagram.svg"
                        className="inline h-6 w-6"
                    />
                </a>
            </div>
            <main className="vertical-list w-full max-w-screen-lg p-4">
                {categories
                    ?.sort((a, b) => (b.index ?? 0) - (a.index ?? 0))
                    .map((category, index) => (
                        <CategoryViewer
                            id={category.index?.toString()}
                            key={index}
                            category={category}
                        />
                    ))}
            </main>
        </Drawer>
    );
}
