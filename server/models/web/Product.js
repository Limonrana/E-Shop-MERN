const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        model: String,
        price: { type: Number, required: true },
        discountPrice: Number,
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        stocks: { type: Number, required: true },
        size: [ 
            { 
                value: String,
            },
        ],
        bokkingPercent: Number,
        deliveryInfo: { 
            appiAgent: { type: Boolean, default: true },
            appiHubs: { type: Boolean, default: true },
            home: { type: Boolean, default: true },
        },
        image: String,
        images: [
            {
                url: String,
            },
        ],
        offerInfo: [
            {
                title: String,
                description: [ String ],
            },
        ],
        features: [
            {
                title: String,
                description: String,
            },
        ],
        description: String,
        banner: [
            {
                title: String,
                info: String,
                image: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = model('Product', productSchema);
