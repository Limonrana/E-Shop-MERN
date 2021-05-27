const bcrypt = require('bcrypt');

const data = {
    admin: [
        {
            name: 'Limon Rana',
            email: 'admin@gmail.com',
            phone: '+8801303112233',
            status: true,
            role: 'Admin',
            password: bcrypt.hashSync('Admin@1122', 8),
        },
        {
            name: 'Md Rana',
            email: 'editor@gmail.com',
            phone: '+8801303112234',
            status: true,
            role: 'Editor',
            password: bcrypt.hashSync('Editor@1122', 8),
        },
    ],
    customers: [
        {
            name: 'Md Customer1',
            email: 'customer1@gmail.com',
            phone: '+8801303112233',
            status: true,
            password: bcrypt.hashSync('Customer@1122', 8),
        },
        {
            name: 'Md Customer2',
            email: 'customer2@gmail.com',
            phone: '+8801303112234',
            status: true,
            password: bcrypt.hashSync('Customer@1122', 8),
        },
    ],
    products: [
        {
            name: 'A4TECH Headphone',
            model: 'HS-19',
            price: 11999,
            discountPrice: 10999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 10,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/headphone.png',
            images: [
                { url: '/images/headphone.png' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: '1:18 RC',
            model: 'SUNNY RACING CAR',
            price: 55999,
            discountPrice: 50999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 12,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/car.png',
            images: [
                { url: '/images/car.png' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: "Men's Jacket (Black)",
            model: '- MJ-07 (XS)',
            price: 7999,
            discountPrice: 5999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 6,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/man3.jpg',
            images: [
                { url: '/images/man3.jpg' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: 'Samsung Galaxy Tab',
            model: 'A 7.0',
            price: 18999,
            discountPrice: 15999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 3,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/phone2(1).jpg',
            images: [
                { url: '/images/phone2(1).jpg' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: 'Original Leather Wallet for Men',
            model: '(Brown)',
            price: 3999,
            discountPrice: 2999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 0,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/man1.png',
            images: [
                { url: '/images/man1.png' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: 'AHAVA All in One Cream Face Illuminator',
            model: '8ml - Light',
            price: 5000,
            discountPrice: 4500,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 22,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/Beauty1.jpg',
            images: [
                { url: '/images/Beauty1.jpg' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: "Nine West Women's Strap Watch",
            model: '- NW/2116TPRG',
            price: 11999,
            discountPrice: 10999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 11,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/women.png',
            images: [
                { url: '/images/women.png' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
        {
            name: 'Asus X543UA- Core i3 8th Gen Transparent Silver',
            model: '(DM1490T)',
            price: 42999,
            discountPrice: 38999,
            category: 'Phones & tablets',
            subCategory: 'Earphone & Headsets',
            stocks: 10,
            size: [
                {value: 'M'},
                {value: 'L'},
                {value: 'XL'},
                {value: 'XXL'},
            ],
            bokkingPercent: 10,
            deliveryInfo: [
                { appiAgent: true },
                { appiHubs: true, },
                { home: true },
            ],
            image: '/images/pc.png',
            images: [
                { url: '/images/pc.png' },
                { url: '/images/mob1.webp' },
                { url: '/images/mob2.webp' },
                { url: '/images/mob3.webp' },
                { url: '/images/mob4.webp' },
                { url: '/images/mob5.webp' },
                { url: '/images/mob6.webp' },
                { url: '/images/mob7.webp' },
                { url: '/images/mob8.webp' },
            ],
            offerInfo: [
                {
                    title: 'General Conditions:',
                    description: [
                        'One customer can availonly one promotion at a time.',
                        '12 months Warranty.',
                    ],
                },
                {
                    title: 'Exciting Offers:',
                    description: [
                        'Discounts and freebies with Wuntu app',
                        'Free roaming in 70+ worldwide destinations',
                    ],
                },
            ],
            features: [
                {
                    title: 'RAM_Size (GB)',
                    description: '12',
                },
                {
                    title: 'ROM Size (GB)',
                    description: '256',
                },
                {
                    title: 'Available Memory (GB)*',
                    description: '224.2',
                },
                {
                    title: 'Video Recording Resolution',
                    description: 'UHD 4K (3840 x 2160)@60fps',
                },
                {
                    title: 'Rear Camera - Resolution (Multiple)',
                    description: '12.0 MP + 16.0 MP + 12.0 MP + VGA',
                },
                {
                    title: 'Front Camera - Resolution',
                    description: '10.0 MP',
                },
            ],
            description: '/images/ss6.png',
            banner: [
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss1.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss2.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss3.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss4.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss5.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    image: '/images/ss7.png',
                },
                {
                    title: 'with Ultra-Wide Dual Rear Camera',
                    info: 'Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera.',
                    videoTitle: 'Made in Banglaedsh',
                    videoId: 'cevRxLV54Rk',
                },
            ],
        },
    ],
};

module.exports = data;
