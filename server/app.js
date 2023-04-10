import express from 'express';
import postRouter from './routes/posts.routes.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';


const app = express();

app.use(cors());

//middlewears
app.use(express.json());


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

//rutas
app.use(postRouter);

export default app;