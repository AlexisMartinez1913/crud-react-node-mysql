import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js';

const router = express.Router();
//RUTAS DE LOS METODOS
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog)

export default router;