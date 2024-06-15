// const express = require('express');
import express from 'express'
const app = express()
import cors from 'cors';
// const cors = require('cors')

app.use(cors());
app.get('/', async (req, res) => {
    try {
        let items = [
            {
                id: 10023983,
                hero_pid: 41619267,
                name: "Chitrarekha Voguish Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 304,
                min_product_price: 304,
                max_product_discount: 12,
                original_price: 345,
                description: "Chitrarekha Voguish Sarees",
                full_details:
                    "Saree Fabric: Net\nBlouse: Running Blouse\nBlouse Fabric: Net\nPattern: Self-Design\nBlouse Pattern: Same as Pallu\nMultipack: Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-3 Days",
                share_text:
                    "Catalog Name:*Chitrarekha Voguish Sarees*\nSaree Fabric: Net\nBlouse: Separate Blouse Piece\nBlouse Fabric: Net\nPattern: Product Dependent\nBlouse Pattern: Same as Saree\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/10023983/cover/1/2/fd3290ff3c15bc9059847680dce2cbc36e41a655849bc755020708cc308ca312a882c403a88377818b161f40b276b829c69ffb59c6fe23dc3de197ee8d20af8d_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/10023983/collages/1/1/fd3290ff3c15bc9059847680dce2cbc36e41a655849bc755020708cc308ca312a882c403a88377818b161f40b276b829c69ffb59c6fe23dc3de197ee8d20af8d.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2021-07-13 18:13:47",
                created_iso: "2021-07-13T18:13:47+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 69,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.8,
                    absolute_average_rating: 0,
                    average_rating_str: "3.8",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 4535,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "2Gga53jtPTWgiALUfa9QZw==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 41619267,
                        url: "https://images.meesho.com/images/products/41619267/miv9j_512.jpg",
                    },
                    {
                        id: 41619259,
                        url: "https://images.meesho.com/images/products/41619259/spxgq_512.jpg",
                    },
                    {
                        id: 41619263,
                        url: "https://images.meesho.com/images/products/41619263/fnvmc_512.jpg",
                    },
                    {
                        id: 41619262,
                        url: "https://images.meesho.com/images/products/41619262/igbwp_512.jpg",
                    },
                    {
                        id: 41619261,
                        url: "https://images.meesho.com/images/products/41619261/hrx2p_512.jpg",
                    },
                    {
                        id: 41619260,
                        url: "https://images.meesho.com/images/products/41619260/lf3n0_512.jpg",
                    },
                    {
                        id: 41619266,
                        url: "https://images.meesho.com/images/products/41619266/8nmwo_512.jpg",
                    },
                    {
                        id: 41619265,
                        url: "https://images.meesho.com/images/products/41619265/s0gew_512.jpg",
                    },
                    {
                        id: 41619264,
                        url: "https://images.meesho.com/images/products/41619264/qghzt_512.jpg",
                    },
                ],
                activated: "2021-07-14 05:32:41",
                activated_iso: "2021-07-14T05:32:41+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹284 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 20,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/os1mr?utm_source=s",
                product_attributes: ["Color: Blue"],
                hero_product_name: "Charvi Pretty Sarees",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },

            {
                id: 2324303,
                hero_pid: 12153332,
                name: "Banarasi Silk Jacquard Saree With Blouse",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 462,
                min_product_price: 462,
                max_product_discount: 15,
                original_price: 543,
                description: "Kashvi Petite Sarees",
                full_details:
                    "Saree Fabric: Banarasi Silk\nBlouse: Running Blouse\nBlouse Fabric: Banarasi Silk\nPattern: Zari Woven\nBlouse Pattern: Solid\nMultipack: Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\n\n\nDispatch: 1 Day",
                share_text:
                    "Catalog Name:*Banarasi Silk Jacquard Saree With Blouse*\nSaree Fabric: Banarasi Silk\nBlouse: Product Dependent\nBlouse Fabric: Product Dependent\nPattern: Product Dependent\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 21,
                image:
                    "https://images.meesho.com/images/catalogs/2324303/cover/1/2/f014f842d54992726633d3712c8c2755dfab85b7bd20453044cf3139d08d10e511a80192b8a7201c39fab73c8f6c2b68f1f8019469d1d9cb2ce4fd7fe0d44fe6_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/2324303/collages/1/1/f014f842d54992726633d3712c8c2755dfab85b7bd20453044cf3139d08d10e511a80192b8a7201c39fab73c8f6c2b68f1f8019469d1d9cb2ce4fd7fe0d44fe6.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2020-11-20 12:52:15",
                created_iso: "2020-11-20T12:52:15+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 92,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 4,
                    absolute_average_rating: 0,
                    average_rating_str: "4.0",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 89911,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "kugyzQBokjaNRJ1fWZ2mFw==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 12153332,
                        url: "https://images.meesho.com/images/products/12153332/y7wre_512.jpg",
                    },
                    {
                        id: 141351176,
                        url: "https://images.meesho.com/images/products/141351176/rqril_512.jpg",
                    },
                    {
                        id: 58656344,
                        url: "https://images.meesho.com/images/products/58656344/jj2er_512.jpg",
                    },
                    {
                        id: 58918955,
                        url: "https://images.meesho.com/images/products/58918955/hp3tv_512.jpg",
                    },
                    {
                        id: 141351173,
                        url: "https://images.meesho.com/images/products/141351173/sw6wc_512.jpg",
                    },
                    {
                        id: 58918954,
                        url: "https://images.meesho.com/images/products/58918954/tdlff_512.jpg",
                    },
                    {
                        id: 141351174,
                        url: "https://images.meesho.com/images/products/141351174/mkwav_512.jpg",
                    },
                    {
                        id: 58656339,
                        url: "https://images.meesho.com/images/products/58656339/eubhc_512.jpg",
                    },
                    {
                        id: 12153333,
                        url: "https://images.meesho.com/images/products/12153333/d600d_512.jpg",
                    },
                    {
                        id: 12153335,
                        url: "https://images.meesho.com/images/products/12153335/zumoy_512.jpg",
                    },
                    {
                        id: 12153334,
                        url: "https://images.meesho.com/images/products/12153334/bqwsi_512.jpg",
                    },
                    {
                        id: 58656367,
                        url: "https://images.meesho.com/images/products/58656367/wwlne_512.jpg",
                    },
                    {
                        id: 58656335,
                        url: "https://images.meesho.com/images/products/58656335/0oahd_512.jpg",
                    },
                    {
                        id: 58918962,
                        url: "https://images.meesho.com/images/products/58918962/qftck_512.jpg",
                    },
                    {
                        id: 58656365,
                        url: "https://images.meesho.com/images/products/58656365/mvert_512.jpg",
                    },
                    {
                        id: 89155650,
                        url: "https://images.meesho.com/images/products/89155650/xo285_512.jpg",
                    },
                    {
                        id: 58918961,
                        url: "https://images.meesho.com/images/products/58918961/exntk_512.jpg",
                    },
                    {
                        id: 58656364,
                        url: "https://images.meesho.com/images/products/58656364/jswjh_512.jpg",
                    },
                    {
                        id: 58918964,
                        url: "https://images.meesho.com/images/products/58918964/i5b64_512.jpg",
                    },
                    {
                        id: 58918968,
                        url: "https://images.meesho.com/images/products/58918968/fqgsv_512.jpg",
                    },
                    {
                        id: 89155631,
                        url: "https://images.meesho.com/images/products/89155631/bw6ck_512.jpg",
                    },
                ],
                activated: "2023-02-26 08:58:49",
                activated_iso: "2023-02-26T08:58:49+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹434 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 28,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/78hkk?utm_source=s",
                hero_product_name:
                    "Pure Bright Red Colour Gold Toned Beautiful Trendy Banarasi Silk Woven Designer Saree",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 93682263,
                hero_pid: 321932771,
                name: "Adrika Refined Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 497,
                min_product_price: 497,
                description: "Adrika Refined Sarees",
                full_details:
                    "Saree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Cotton Silk\nPattern: Woven Design\nBlouse Pattern: Jacquard\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Adrika Refined Sarees*\nSaree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Cotton Silk\nPattern: Product Dependent\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 6,
                image:
                    "https://images.meesho.com/images/catalogs/93682263/cover/1/2/8b84f7691694eedd0f4a9e7a1569e89702da04f844529328655db5c2d82233895915221b035875460d2abf554b04d3666b90d520ac5193730cd0365b9ba4b000_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/93682263/collages/1/1/8b84f7691694eedd0f4a9e7a1569e89702da04f844529328655db5c2d82233895915221b035875460d2abf554b04d3666b90d520ac5193730cd0365b9ba4b000.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2023-08-11 14:13:11",
                created_iso: "2023-08-11T14:13:11+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: true,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 96,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 4,
                    absolute_average_rating: 0,
                    average_rating_str: "4.0",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 2983,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "0nKRhERnv1Aqo+ARBhbVIw==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 321932771,
                        url: "https://images.meesho.com/images/products/321932771/hntkm_512.jpg",
                    },
                    {
                        id: 321932772,
                        url: "https://images.meesho.com/images/products/321932772/fdfwh_512.jpg",
                    },
                    {
                        id: 321932773,
                        url: "https://images.meesho.com/images/products/321932773/z9ugz_512.jpg",
                    },
                    {
                        id: 321932774,
                        url: "https://images.meesho.com/images/products/321932774/hjcud_512.jpg",
                    },
                    {
                        id: 321932775,
                        url: "https://images.meesho.com/images/products/321932775/y5mwa_512.jpg",
                    },
                    {
                        id: 321932776,
                        url: "https://images.meesho.com/images/products/321932776/udkbb_512.jpg",
                    },
                ],
                activated: "2023-08-12 12:26:27",
                activated_iso: "2023-08-12T12:26:27+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹468 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 29,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/5bo4wz?utm_source=s",
                product_attributes: ["Net Quantity (N): Single"],
                hero_product_name:
                    "Blue/Top Trending Saree/Wedding Wear Sarees/Assam/Woven/Cotton Silk Saree/Jacquard/Gadwal/Banarasi/Khadi/Assam/Paithani/Kanjivaram/Dola/Tassels/Zari/Traditional/Uniform/Soft/Kashvi/Kanjeevaram/Party Wear Sarees",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 12209417,
                hero_pid: 49030100,
                name: "ETP  satin silk  Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 266,
                min_product_price: 266,
                description: "Aagam Drishya Sarees",
                full_details: "Aagam Drishya Sarees",
                share_text:
                    "Catalog Name:*ETP  satin silk  Sarees*\nSaree Fabric: Satin Silk\nBlouse: Separate Blouse Piece\nBlouse Fabric: Jacquard\nPattern: Solid\nBlouse Pattern: Printed\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 1,
                image:
                    "https://images.meesho.com/images/catalogs/12209417/cover/1/2/3bd6c4b7f7a9d154b32d60327548702cae1ba370d8f1833c0702e765a5d4c498185b9b8f363718a81fed42f7ea7fabf2210b16b4e01cc07238894067a5ef4c0b_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/12209417/collages/1/1/3bd6c4b7f7a9d154b32d60327548702cae1ba370d8f1833c0702e765a5d4c498185b9b8f363718a81fed42f7ea7fabf2210b16b4e01cc07238894067a5ef4c0b.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2021-09-05 14:03:28",
                created_iso: "2021-09-05T14:03:28+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 69,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.9,
                    absolute_average_rating: 0,
                    average_rating_str: "3.9",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 99896,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 49030100,
                        url: "https://images.meesho.com/images/products/49030100/j1zmg_512.jpg",
                    },
                ],
                activated: "2022-09-23 16:04:01",
                activated_iso: "2022-09-23T16:04:01+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹246 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 20,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/t6vv8?utm_source=s",
                product_attributes: ["Type: Sana Silk"],
                hero_product_name: "sana silk satin silk purple   saree with Blouse",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 102507695,
                hero_pid: 353555155,
                name: "Abhisarika Pretty Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 390,
                min_product_price: 390,
                description: "Abhisarika Pretty Sarees",
                full_details:
                    "Saree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Cotton Silk\nPattern: Woven Design\nBlouse Pattern: Same as Border\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Abhisarika Pretty Sarees*\nSaree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Cotton Silk\nPattern: Woven Design\nBlouse Pattern: Same as Border\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/102507695/cover/1/2/501a74542dfedea210a6bbc83d89a2725ba9e1c592770cc204d77306cfd85c301df686bf6610531b7342fb7d903c896fc48ec9de289f4fe2d09b665d51fcd156_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/102507695/collages/1/1/501a74542dfedea210a6bbc83d89a2725ba9e1c592770cc204d77306cfd85c301df686bf6610531b7342fb7d903c896fc48ec9de289f4fe2d09b665d51fcd156.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2023-10-23 03:00:14",
                created_iso: "2023-10-23T03:00:14+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: true,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 78,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.8,
                    absolute_average_rating: 0,
                    average_rating_str: "3.8",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 915,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "XySIeqhonuNVpnq7rGojBQ==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 353555155,
                        url: "https://images.meesho.com/images/products/353555155/ojoam_512.jpg",
                    },
                    {
                        id: 353555158,
                        url: "https://images.meesho.com/images/products/353555158/8i0ie_512.jpg",
                    },
                    {
                        id: 353555159,
                        url: "https://images.meesho.com/images/products/353555159/ncxpt_512.jpg",
                    },
                    {
                        id: 353555156,
                        url: "https://images.meesho.com/images/products/353555156/o6ppi_512.jpg",
                    },
                    {
                        id: 353555157,
                        url: "https://images.meesho.com/images/products/353555157/7yby3_512.jpg",
                    },
                    {
                        id: 353555162,
                        url: "https://images.meesho.com/images/products/353555162/yygvk_512.jpg",
                    },
                    {
                        id: 353555163,
                        url: "https://images.meesho.com/images/products/353555163/zivht_512.jpg",
                    },
                    {
                        id: 353555160,
                        url: "https://images.meesho.com/images/products/353555160/xhiph_512.jpg",
                    },
                    {
                        id: 353555161,
                        url: "https://images.meesho.com/images/products/353555161/m7g1i_512.jpg",
                    },
                ],
                activated: "2023-10-23 10:51:29",
                activated_iso: "2023-10-23T10:51:29+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹367 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 23,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/5uhwwj?utm_source=s",
                product_attributes: ["Net Quantity (N): Single"],
                hero_product_name:
                    " Hathi Saree Cotton Silk - Running Blouse Piece - 2023",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 40806132,
                hero_pid: 137796271,
                name: "Chitrarekha Superior Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 296,
                min_product_price: 296,
                description: "Chitrarekha Superior Sarees",
                full_details:
                    "Saree Fabric: Lycra Blend\nBlouse: Separate Blouse Piece\nBlouse Fabric: Velvet\nPattern: Solid\nBlouse Pattern: Sequence\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.3 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Chitrarekha Superior Sarees*\nSaree Fabric: Lycra Blend\nBlouse: Separate Blouse Piece\nBlouse Fabric: Velvet\nPattern: Solid\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/40806132/cover/1/2/6e56e373c5badcd92a2be481eabc99d6a97ab93a4a33ca52fea0f151c571a723b96fe1e4fc4fef76633daabd04aa8dc8982baba81ee505a933fc983cadf81002_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/40806132/collages/1/1/6e56e373c5badcd92a2be481eabc99d6a97ab93a4a33ca52fea0f151c571a723b96fe1e4fc4fef76633daabd04aa8dc8982baba81ee505a933fc983cadf81002.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2022-07-09 21:05:42",
                created_iso: "2022-07-09T21:05:42+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 68,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.7,
                    absolute_average_rating: 0,
                    average_rating_str: "3.7",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 13631,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 137796271,
                        url: "https://images.meesho.com/images/products/137796271/rzic1_512.jpg",
                    },
                    {
                        id: 137796263,
                        url: "https://images.meesho.com/images/products/137796263/xio2a_512.jpg",
                    },
                    {
                        id: 137796270,
                        url: "https://images.meesho.com/images/products/137796270/wp0am_512.jpg",
                    },
                    {
                        id: 137796268,
                        url: "https://images.meesho.com/images/products/137796268/degcf_512.jpg",
                    },
                    {
                        id: 137796269,
                        url: "https://images.meesho.com/images/products/137796269/frh1t_512.jpg",
                    },
                    {
                        id: 137796266,
                        url: "https://images.meesho.com/images/products/137796266/2kqzy_512.jpg",
                    },
                    {
                        id: 137796267,
                        url: "https://images.meesho.com/images/products/137796267/g4wqp_512.jpg",
                    },
                    {
                        id: 137796264,
                        url: "https://images.meesho.com/images/products/137796264/iixtm_512.jpg",
                    },
                    {
                        id: 137796265,
                        url: "https://images.meesho.com/images/products/137796265/oprjh_512.jpg",
                    },
                ],
                activated: "2022-10-07 17:54:00",
                activated_iso: "2022-10-07T17:54:00+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹271 with 2 Special Offers",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 20,
                        },
                        {
                            type: "return_options",
                            amount: 5,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/2a1ga7?utm_source=s",
                product_attributes: ["Color: Purple"],
                hero_product_name:
                    "Ready To Wear Lycra Blend Purple Ruffle Saree With Blouse",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 20998111,
                hero_pid: 75657072,
                name: "Aakarsha Alluring Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 412,
                min_product_price: 412,
                description: "Aakarsha Alluring Sarees",
                full_details:
                    "Saree Fabric: Net\nBlouse: Separate Blouse Piece\nBlouse Fabric: Velvet\nPattern: Embroidered\nBlouse Pattern: Same as Border\nMultipack: Pack of 2\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-3 Days",
                share_text:
                    "Catalog Name:*Aakarsha Alluring Sarees*\nSaree Fabric: Net\nBlouse: Separate Blouse Piece\nBlouse Fabric: Velvet\nPattern: Product Dependent\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 7,
                image:
                    "https://images.meesho.com/images/catalogs/20998111/cover/1/2/9de194a3a0e4f11627170b41beb26db07d1788b3d56ff88b6fa9bdd625b8f59b168dcc7f08e8e07c0068e013a75a7030091ed95eb6eafad67404fe6bac205b61_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/20998111/collages/1/1/9de194a3a0e4f11627170b41beb26db07d1788b3d56ff88b6fa9bdd625b8f59b168dcc7f08e8e07c0068e013a75a7030091ed95eb6eafad67404fe6bac205b61.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2022-02-01 16:07:56",
                created_iso: "2022-02-01T16:07:56+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 70,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 4,
                    absolute_average_rating: 0,
                    average_rating_str: "4.0",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 13144,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                has_same_price_products: true,
                product_images: [
                    {
                        id: 75657072,
                        url: "https://images.meesho.com/images/products/75657072/rcm5h_512.jpg",
                    },
                    {
                        id: 75657074,
                        url: "https://images.meesho.com/images/products/75657074/tvy8n_512.jpg",
                    },
                    {
                        id: 75657075,
                        url: "https://images.meesho.com/images/products/75657075/bs1ip_512.jpg",
                    },
                    {
                        id: 75657073,
                        url: "https://images.meesho.com/images/products/75657073/ybvjr_512.jpg",
                    },
                    {
                        id: 75657078,
                        url: "https://images.meesho.com/images/products/75657078/auxhw_512.jpg",
                    },
                    {
                        id: 75657076,
                        url: "https://images.meesho.com/images/products/75657076/56zmr_512.jpg",
                    },
                    {
                        id: 75657077,
                        url: "https://images.meesho.com/images/products/75657077/coxlo_512.jpg",
                    },
                ],
                activated: "2022-02-01 22:26:50",
                activated_iso: "2022-02-01T22:26:50+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹392 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 20,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/191ldc?utm_source=s",
                product_attributes: ["Color: Black"],
                hero_product_name: "UNIQUE DESIGN SAREE ",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 13594414,
                hero_pid: 53526573,
                name: "Chitrarekha Attractive Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 442,
                min_product_price: 442,
                description: "Chitrarekha Attractive Sarees",
                full_details:
                    "Saree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Cotton Silk\nPattern: Woven Design\nBlouse Pattern: Jacquard\nMultipack: Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-3 Days",
                share_text:
                    "Catalog Name:*Chitrarekha Attractive Sarees*\nSaree Fabric: Cotton Silk\nBlouse: Product Dependent\nBlouse Fabric: Cotton Silk\nPattern: Woven Design\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/13594414/cover/1/2/de5cc4362e89e2269d35bdb46ea9d7184688df41521f2e5e80ef48c54cf97f9cf44d0db938ea25766e78996be84a833bc0c94e4b95112ea6af80f1483b1f356c_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/13594414/collages/1/1/de5cc4362e89e2269d35bdb46ea9d7184688df41521f2e5e80ef48c54cf97f9cf44d0db938ea25766e78996be84a833bc0c94e4b95112ea6af80f1483b1f356c.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2021-09-30 09:31:15",
                created_iso: "2021-09-30T09:31:15+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 87,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.8,
                    absolute_average_rating: 0,
                    average_rating_str: "3.8",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 15350,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "Rm4aNCeR67uNRJ1fWZ2mFw==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 53526573,
                        url: "https://images.meesho.com/images/products/53526573/tuqv3_512.jpg",
                    },
                    {
                        id: 53526567,
                        url: "https://images.meesho.com/images/products/53526567/hz5lu_512.jpg",
                    },
                    {
                        id: 53526568,
                        url: "https://images.meesho.com/images/products/53526568/3gomh_512.jpg",
                    },
                    {
                        id: 53526569,
                        url: "https://images.meesho.com/images/products/53526569/h0fwd_512.jpg",
                    },
                    {
                        id: 53526570,
                        url: "https://images.meesho.com/images/products/53526570/6apmk_512.jpg",
                    },
                    {
                        id: 53526571,
                        url: "https://images.meesho.com/images/products/53526571/mrysd_512.jpg",
                    },
                    {
                        id: 53526572,
                        url: "https://images.meesho.com/images/products/53526572/ukl22_512.jpg",
                    },
                    {
                        id: 53526574,
                        url: "https://images.meesho.com/images/products/53526574/5aay0_512.jpg",
                    },
                    {
                        id: 53526575,
                        url: "https://images.meesho.com/images/products/53526575/j5gqq_512.jpg",
                    },
                ],
                activated: "2022-10-04 19:14:00",
                activated_iso: "2022-10-04T19:14:00+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹416 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 26,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/vv9d9?utm_source=s",
                product_attributes: ["Color: Beige"],
                hero_product_name:
                    "Winklecart Designer Jaccaurd Work Pure Cotton Silk Woven Saree With Blouse",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 101602392,
                hero_pid: 350321912,
                name: "Aagyeyi Superior Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 356,
                min_product_price: 356,
                description: "Aagyeyi Superior Sarees",
                full_details:
                    "Saree Fabric: Chiffon\nBlouse: Separate Blouse Piece\nBlouse Fabric: Variable (Product Dependent)\nPattern: Variable (Product Dependent)\nBlouse Pattern: Solid\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Aagyeyi Superior Sarees*\nSaree Fabric: Chiffon\nBlouse: Separate Blouse Piece\nBlouse Fabric: Product Dependent\nPattern: Product Dependent\nBlouse Pattern: Solid\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 6,
                image:
                    "https://images.meesho.com/images/catalogs/101602392/cover/1/2/fd390db474ddfb565080a742f7ebf639200949193fe173598e4899687a379a179d251cc47d1d127732c56e09339ca06b01c1aafd1edd479d75dc36412650f5cf_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/101602392/collages/1/1/fd390db474ddfb565080a742f7ebf639200949193fe173598e4899687a379a179d251cc47d1d127732c56e09339ca06b01c1aafd1edd479d75dc36412650f5cf.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2023-10-14 18:51:36",
                created_iso: "2023-10-14T18:51:36+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 77,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.8,
                    absolute_average_rating: 0,
                    average_rating_str: "3.8",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 6243,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                has_same_price_products: true,
                product_images: [
                    {
                        id: 350321912,
                        url: "https://images.meesho.com/images/products/350321912/ko8zw_512.jpg",
                    },
                    {
                        id: 350321913,
                        url: "https://images.meesho.com/images/products/350321913/l1wyf_512.jpg",
                    },
                    {
                        id: 350321915,
                        url: "https://images.meesho.com/images/products/350321915/jfuwl_512.jpg",
                    },
                    {
                        id: 350321914,
                        url: "https://images.meesho.com/images/products/350321914/errva_512.jpg",
                    },
                    {
                        id: 350321917,
                        url: "https://images.meesho.com/images/products/350321917/c67m8_512.jpg",
                    },
                    {
                        id: 350321916,
                        url: "https://images.meesho.com/images/products/350321916/rh11v_512.jpg",
                    },
                ],
                activated: "2023-10-20 18:57:50",
                activated_iso: "2023-10-20T18:57:50+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹333 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 23,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/5skm48?utm_source=s",
                product_attributes: ["Net Quantity (N): Single"],
                hero_product_name: "chiffon ki sadiyan",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 101200563,
                hero_pid: 348921100,
                name: "Chitrarekha Pretty Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 511,
                min_product_price: 511,
                description: "Chitrarekha Pretty Sarees",
                full_details:
                    "Saree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Variable (Product Dependent)\nPattern: Variable (Product Dependent)\nBlouse Pattern: Variable (Product Dependent)\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Chitrarekha Pretty Sarees*\nSaree Fabric: Cotton Silk\nBlouse: Running Blouse\nBlouse Fabric: Product Dependent\nPattern: Product Dependent\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.5 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/101200563/cover/1/2/e454743c960434b2c1b3e882c93c171513e36072bf3f486d34bca823d9b41569ec75ce8836de1bf7f9cf06035bc35a302bb21ebe71600a1f45c4dc51455088c4_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/101200563/collages/1/1/e454743c960434b2c1b3e882c93c171513e36072bf3f486d34bca823d9b41569ec75ce8836de1bf7f9cf06035bc35a302bb21ebe71600a1f45c4dc51455088c4.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2023-10-11 13:49:12",
                created_iso: "2023-10-11T13:49:12+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: true,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 96,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 4.1,
                    absolute_average_rating: 0,
                    average_rating_str: "4.1",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 1424,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "K0M0KaSPC9lVpnq7rGojBQ==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 348921100,
                        url: "https://images.meesho.com/images/products/348921100/rmh7m_512.jpg",
                    },
                    {
                        id: 348921101,
                        url: "https://images.meesho.com/images/products/348921101/4fqc1_512.jpg",
                    },
                    {
                        id: 348921102,
                        url: "https://images.meesho.com/images/products/348921102/qn1vx_512.jpg",
                    },
                    {
                        id: 348921103,
                        url: "https://images.meesho.com/images/products/348921103/0rjam_512.jpg",
                    },
                    {
                        id: 348921108,
                        url: "https://images.meesho.com/images/products/348921108/sonxg_512.jpg",
                    },
                    {
                        id: 348921104,
                        url: "https://images.meesho.com/images/products/348921104/im5vc_512.jpg",
                    },
                    {
                        id: 348921105,
                        url: "https://images.meesho.com/images/products/348921105/ih2qk_512.jpg",
                    },
                    {
                        id: 348921106,
                        url: "https://images.meesho.com/images/products/348921106/h2hbc_512.jpg",
                    },
                    {
                        id: 348921107,
                        url: "https://images.meesho.com/images/products/348921107/s3ihi_512.jpg",
                    },
                ],
                activated: "2023-10-12 11:46:01",
                activated_iso: "2023-10-12T11:46:01+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹482 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 29,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/5rql8s?utm_source=s",
                product_attributes: ["Net Quantity (N): Single"],
                hero_product_name:
                    "Traditional Design Paithani Sico Silk Saree with running blouse piece ( Gold & Black )",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 34103616,
                hero_pid: 117025846,
                name: "Trendy Ensemble Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 368,
                min_product_price: 368,
                description: "Trendy Ensemble Sarees",
                full_details:
                    "Saree Fabric: Cotton\nBlouse: Without Blouse\nBlouse Fabric: Cotton\nPattern: Self-Design\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.6 m) \n\nDispatch: 2-3 Days",
                share_text:
                    "Catalog Name:*Trendy Ensemble Sarees*\nSaree Fabric: Cotton\nBlouse: Without Blouse\nBlouse Fabric: Cotton\nPattern: Woven Design\nBlouse Pattern: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size\nDispatch: 1 Day\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 9,
                image:
                    "https://images.meesho.com/images/catalogs/34103616/cover/1/2/69906982a513b791bc940dbd50a971d162da4c23e23a71aa63261195a6e7bdba7160db6730cf2ca62a89ce0b6fafa68dc145c65cda8baee14e6bc1831e9de47e_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/34103616/collages/1/1/69906982a513b791bc940dbd50a971d162da4c23e23a71aa63261195a6e7bdba7160db6730cf2ca62a89ce0b6fafa68dc145c65cda8baee14e6bc1831e9de47e.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2022-05-25 19:14:21",
                created_iso: "2022-05-25T19:14:21+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 69,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 3.9,
                    absolute_average_rating: 0,
                    average_rating_str: "3.9",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 2651,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [
                    {
                        name: "NEXT DAY DISPATCH",
                    },
                ],
                gray_tags: [],
                value_prop_tag: {
                    name: "NEXT DAY DISPATCH",
                },
                ad: {
                    active: true,
                    tag: "Ad",
                    metadata: "EVGvBlGU3euNRJ1fWZ2mFw==",
                },
                has_same_price_products: true,
                product_images: [
                    {
                        id: 117025846,
                        url: "https://images.meesho.com/images/products/117025846/v4inn_512.jpg",
                    },
                    {
                        id: 117025849,
                        url: "https://images.meesho.com/images/products/117025849/icsi8_512.jpg",
                    },
                    {
                        id: 117025848,
                        url: "https://images.meesho.com/images/products/117025848/hk2ze_512.jpg",
                    },
                    {
                        id: 117025851,
                        url: "https://images.meesho.com/images/products/117025851/mhgge_512.jpg",
                    },
                    {
                        id: 117025850,
                        url: "https://images.meesho.com/images/products/117025850/bbekv_512.jpg",
                    },
                    {
                        id: 117025853,
                        url: "https://images.meesho.com/images/products/117025853/egnuh_512.jpg",
                    },
                    {
                        id: 117025852,
                        url: "https://images.meesho.com/images/products/117025852/wk0ui_512.jpg",
                    },
                    {
                        id: 117025845,
                        url: "https://images.meesho.com/images/products/117025845/jo1ij_512.jpg",
                    },
                    {
                        id: 117025847,
                        url: "https://images.meesho.com/images/products/117025847/1b1a7_512.jpg",
                    },
                ],
                activated: "2022-05-26 02:07:12",
                activated_iso: "2022-05-26T02:07:12+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹348 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 20,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/1xo9py?utm_source=s",
                product_attributes: ["Color: Pink"],
                hero_product_name:
                    "Jamdani Dhakai Designer Cotton Silk Jaquared Rani Pink Saree For Women ",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
            {
                id: 109100531,
                hero_pid: 375286758,
                name: "Abhisarika Alluring Sarees",
                category_id: 1004,
                sub_sub_category_name: "Sarees",
                min_catalog_price: 296,
                min_product_price: 296,
                description: "Abhisarika Alluring Sarees",
                full_details:
                    "Saree Fabric: Georgette\nBlouse: Running Blouse\nBlouse Fabric: Georgette\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.3 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2-2 Days",
                share_text:
                    "Catalog Name:*Abhisarika Alluring Sarees*\nSaree Fabric: Chiffon / Georgette\nBlouse: Running Blouse\nBlouse Fabric: Product Dependent\nNet Quantity (N): Single\nSizes: \nFree Size (Saree Length Size: 5.3 m, Blouse Length Size: 0.8 m) \n\nDispatch: 2 Days\n\n*Proof of Safe Delivery! Click to know on Safety Standards of Delivery Partners- https://ltl.sh/y_nZrAV3",
                hot: false,
                type: "catalog",
                pre_booking: false,
                priority: 0,
                num_suppliers: 0,
                num_designs: 5,
                image:
                    "https://images.meesho.com/images/catalogs/109100531/cover/1/2/66105a992c9b976998a4d37b3254b12cfbc002f9958375cc3e1885e5284045a04e3a8163f04d92e4e3894774be3d65ecd2a8b017413a316a13c1889b269ab73a_512.jpg",
                collage_image:
                    "https://images.meesho.com/images/catalogs/109100531/collages/1/1/66105a992c9b976998a4d37b3254b12cfbc002f9958375cc3e1885e5284045a04e3a8163f04d92e4e3894774be3d65ecd2a8b017413a316a13c1889b269ab73a.jpg",
                image_aspect_ratio: 1.77,
                collage_image_aspect_ratio: 1.48,
                created: "2023-12-27 19:55:38",
                created_iso: "2023-12-27T19:55:38+0530",
                valid: true,
                trend: "",
                popular: false,
                has_mrp: true,
                is_added_to_wishlist: false,
                assured_details: {
                    is_assured: false,
                    message: "Best quality products from trusted suppliers.",
                },
                mall_verified: false,
                shipping_charges_adjustment: 77,
                story_images: [],
                catalog_reviews_summary: {
                    average_rating: 4,
                    absolute_average_rating: 0,
                    average_rating_str: "4.0",
                    rating_scale: 5,
                    review_count: 0,
                    rating_count: 5742,
                },
                shipping: {
                    charges: 0,
                    discount: 0,
                },
                shipping_2: {
                    charges: 0,
                    discount: 0,
                },
                tags: [],
                gray_tags: [],
                has_same_price_products: true,
                product_images: [
                    {
                        id: 375286758,
                        url: "https://images.meesho.com/images/products/375286758/z22jh_512.jpg",
                    },
                    {
                        id: 375286762,
                        url: "https://images.meesho.com/images/products/375286762/g9w3z_512.jpg",
                    },
                    {
                        id: 375286760,
                        url: "https://images.meesho.com/images/products/375286760/ozypz_512.jpg",
                    },
                    {
                        id: 375286761,
                        url: "https://images.meesho.com/images/products/375286761/qouw7_512.jpg",
                    },
                    {
                        id: 375286759,
                        url: "https://images.meesho.com/images/products/375286759/qcn9k_512.jpg",
                    },
                ],
                activated: "2023-12-28 12:22:33",
                activated_iso: "2023-12-28T12:22:33+0530",
                num_shares: "0 Shares",
                margin: {
                    enabled: false,
                },
                price_type_id: "premium_return_price",
                special_offers: {
                    display_text: "₹273 with 1 Special Offer",
                    offers: [
                        {
                            type: "cod_unbundling",
                            amount: 23,
                        },
                    ],
                },
                consumer_share_text:
                    "Shop now on Meesho! \nhttps://www.meesho.com/s/p/67fp46?utm_source=s",
                product_attributes: ["Net Quantity (N): Single"],
                hero_product_name: "Best georget silk printed saree(georget)",
                high_asp_enabled: false,
                markers: [
                    {
                        text: "Free Delivery",
                    },
                ],
            },
        ];
        res.json(items);
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(8000, () => {
    console.log('server run port 8000');
});