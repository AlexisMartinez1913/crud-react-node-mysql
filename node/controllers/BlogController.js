import BlogModel from "../models/BlogModel.js";

//Metodos para el CRUD

//mostrar los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({message: error.message})
    }

}

//registro en particular
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id:req.params.id
            }
        });
        res.json(blog[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un registro

export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado"
        })
    } catch (error) {
        res.json({message: error.message})
    }

}

//actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado "
        })
    } catch (error) {
        res.json({message: message.error})
    }
}

//eliminar un registro
export const deleteBlog = async(req, res) => {
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro Eliminado! "
        })
    } catch (error) {
        res.json({message: message.error})
    }
}