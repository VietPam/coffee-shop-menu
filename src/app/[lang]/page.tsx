//import { Drawer } from '@/components/Drawer/Drawer';
import {Drawer} from '@/app/components/Drawer/Drawer';
import { CategoryViewer } from '@/app/components/Category/CategoryViewer';

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
                    image: 'image 1',
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
                .map((category, index) => {
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
