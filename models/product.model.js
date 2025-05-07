import express from 'express';
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const productModel = mongoose.model('Product', productSchema)

export default productModel;