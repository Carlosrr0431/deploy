import {Router} from 'express';
import {getPosts, createPost, updatingPost, deletePost, gettingPost} from '../controllers/posts.controllers.js';

const router = Router();

router.get('/posts', getPosts );

router.post('/posts', createPost );

router.put('/posts/:id', updatingPost );

router.delete('/posts/:id', deletePost );

router.get('/posts/:id', gettingPost );

export default router; 