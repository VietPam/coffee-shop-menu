import {Drawer} from '@/app/components/Drawer/Drawer';
import { CategoryViewer } from '@/app/components/Category/CategoryViewer';
import bg from './image/home/bg.jpg'
import clickhere from './image/home/clickhere.png'
import { getCategories } from './data';
import '../globals.scss';

export default async function Home() {
    const categories = await getCategories();
    return (
        <Drawer
            name='Xem Menu'
            navbarElements={
                <>
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
                    backgroundImage: `url(${bg.src})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                        Cỏ
                        </h1>
                        <p className="mb-5">Cà phê Điện Bàn</p>
                    </div>
                </div>
                <a
                    className="btn-instagram group btn-square btn absolute bottom-4 right-4 flex gap-2 focus:w-auto focus:px-4 sm:w-auto sm:px-4"
                    href="https://dev-quangviet.click/"
                    target="_blank"
                >
                    <span className="hidden group-focus:inline sm:inline">
                    dev-quangviet
                    </span>
                    <img
                        alt="Instagram logo"
                        src={clickhere.src}
                        className="inline h-6 w-6"
                    />
                </a>
            </div>
            <main className="vertical-list w-full max-w-screen-lg p-4">
                {categories
                    ?.sort((a, b) => (b.index ?? 0) - (a.index ?? 0))
                    .map((category, index) => (
                        <CategoryViewer
                            id={index.toString()}
                            key={index}
                            category={category}
                        />
                    ))}
            </main>
        </Drawer>
    );
}
