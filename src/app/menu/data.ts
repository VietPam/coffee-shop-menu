import { SimpleCategory } from "./page";
import black from "./image/category/cafe_truyen_thong/black.jpg"
export async function getCategories() {
    const staticCategories: SimpleCategory[] = [
        cafe_truyen_thong
    ];
    return staticCategories;
}
const cafe_truyen_thong: SimpleCategory = 
    {
        _id: 'cafe_truyen_thong',
        name: 'CAFÉ TRUYỀN THỐNG',
        depth: 1,
        index: 1,
        items: [
            {
                name: 'Cà phê đen',
                description: 'Nóng | Đá',
                price: `12.000đ`,
                image: 'https://github.com/phamquangviet891/coffee-shop-menu/blob/master/data-image/category/cafe_truyen_thong/black.jpg',
            },
            {
                name: 'Cà phê Sữa SG',
                description: 'description 1',
                price: `24.000đ`,
                image: '',
            },
        ],
    };