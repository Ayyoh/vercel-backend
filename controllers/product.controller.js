import productModel from '../models/product.model.js'


export const getProducts = async (req, res) => {
    const allProducts = await productModel.find({}).sort({ createdAt: -1 });

    try {
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(400).json({ error: `Error in fetching all products` })
    }
}

export const createProduct = async (req, res) => {
    const userProduct = req.body; // user will send data here and model will get it
    
    const newProduct = await productModel.create(userProduct)

    try {
        await newProduct.save()
        res.status(200).json({ success: true, data: newProduct })
    } catch (error) {
        res.status(400).json({ error: `Error in posting product` })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteProduct = await productModel.findByIdAndDelete(id);
        res.status(200).json(deleteProduct)
    } catch (error) {
        res.status(400).json({ error: `Error in deleting product` })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const userProduct = req.body;
    
    try {
        const update = await productModel.findByIdAndUpdate(id, userProduct, {new: true})
        res.status(200).json({ success: true, data: update })
    } catch (error) {
        res.status(400).json({ error: `Error in updating product` })
    }
}