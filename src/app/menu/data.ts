import { SimpleCategory } from "../models/Category";
export async function getCategories() {
    const staticCategories: SimpleCategory[] = [
        cafe_truyen_thong,
        tra
    ];
    return staticCategories;
}
const cafe_truyen_thong: SimpleCategory = 
    {
        _id: 'cafe_truyen_thong',
        name: 'CAFÉ TRUYỀN THỐNG',
        depth: 1,
        index: 2,
        items: [
            {
                name: 'Cà phê đen',
                description: 'Nóng | Đá',
                price: `12.000đ`,
                image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/cafe_truyen_thong/black.jpg',
            },
            {
                name: 'Cà phê Sữa',
                description: 'Nóng | Đá',
                price: `24.000đ`,
                image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/cafe_truyen_thong/black-milk.jpg',
            },
            // {
            //     name: 'Bạc xỉu',
            //     description: 'Nóng | Đá',
            //     price: `17.000đ`,
            //     image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/cafe_truyen_thong/bac-xiu.jpg',
            // },
        ],
    };

    const tra: SimpleCategory = 
    {
        _id: 'tra',
        name: 'TRÀ',
        depth: 1,
        index: 1,
        items: [
            {
                name: 'Trà gừng cam thảo',
                description: 'Nóng',
                price: `15.000đ`,
                image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/tra/tra_gung_cam_thao.png',
            },
            {
                name: 'Trà đào cam sả',
                description: 'Đá',
                price: `25.000đ`,
                image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/tra/tra_dao_cam_sa.png',
            },
            // {
            //     name: 'Trà Lipton',
            //     description: 'Đá',
            //     price: `15.000đ`,
            //     image: 'https://raw.githubusercontent.com/phamquangviet891/coffee-shop-menu/master/data-image/category/tra/lip-ton-da.jpg',
            // },
        ],
    };