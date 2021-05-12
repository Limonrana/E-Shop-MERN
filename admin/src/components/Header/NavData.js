import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';

const NavData = [
    {
        id: 1,
        title: 'Dashboards',
        path: '/admin/dashboard',
        icon: <FiIcons.FiHome />,
    },
    {
        id: 2,
        title: 'Inventory',
        path: '/admin/inventory',
        icon: <FiIcons.FiHome />,
        iconOpen: <RiIcons.RiStore2Line />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Category',
                path: '/admin/inventory/category',
            },
            {
                title: 'Subcategory',
                path: '/admin/inventory/subcategory',
            },
            {
                title: 'Discount',
                path: '/admin/inventory/discount',
            },
            {
                title: 'Stock',
                path: '/admin/inventory/stock',
            },
        ],
    },
    {
        id: 3,
        title: 'Products',
        path: '/admin/products',
        icon: <RiIcons.RiStore2Line />,
        iconOpen: <RiIcons.RiArrowDownSLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Products',
                path: '/admin/products',
            },
            {
                title: 'New Product',
                path: '/admin/products/add',
            },
        ],
    },
    {
        id: 4,
        title: 'Orders',
        path: '/admin/orders',
        icon: <RiIcons.RiShoppingCart2Line />,
    },
    {
        id: 5,
        title: 'Customers',
        path: '/admin/customers',
        icon: <RiIcons.RiUserReceived2Line />,
        iconOpen: <RiIcons.RiArrowDownSLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Customers',
                path: '/admin/customers',
            },
            {
                title: 'New Customer',
                path: '/admin/customers/add',
            },
        ],
    },
    {
        id: 6,
        title: 'Sellers',
        path: '/admin/sellers',
        icon: <RiIcons.RiStore2Line />,
        iconOpen: <RiIcons.RiDashboardLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Sellers',
                path: '/admin/sellers',
            },
            {
                title: 'New Seller',
                path: '/admin/sellers/add',
            },
        ],
    },
    {
        id: 7,
        title: 'Reviews',
        path: '/admin/product/review',
        icon: <BiIcons.BiCommentCheck />,
    },
    {
        id: 8,
        title: 'Chat',
        path: '/admin/product/review',
        icon: <BiIcons.BiChat />,
    },
    {
        id: 9,
        title: 'Settings',
        path: '/admin/settings',
        icon: <RiIcons.RiSettings2Line />,
        iconOpen: <RiIcons.RiDashboardLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Users',
                path: '/admin/users',
            },
            {
                title: 'Profile',
                path: '/admin/profile',
            },
        ],
    },
    {
        id: 10,
        title: 'Purchase',
        path: '/admin/purchase',
        icon: <RiIcons.RiStore2Line />,
        iconOpen: <RiIcons.RiDashboardLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Purchase',
                path: '/admin/purchase',
            },
            {
                title: 'New Purchase',
                path: '/admin/purchase/add',
            },
        ],
    },
    {
        id: 11,
        title: 'Sales',
        path: '/admin/sales',
        icon: <RiIcons.RiStore2Line />,
        iconOpen: <RiIcons.RiDashboardLine />,
        iconeClose: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Sales',
                path: '/admin/sales',
            },
            {
                title: 'New Sales',
                path: '/admin/sales/add',
            },
        ],
    },
];

export default NavData;
