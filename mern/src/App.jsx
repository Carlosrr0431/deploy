import { PostProvider} from './context/PostContext';
import { HomePage, PostForm, NotFound } from './pages/index'
import { Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import axios from 'axios';

axios.defaults.baseURL = "https://deploy-production-5e67.up.railway.app/";

export const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className='px-10 container m-auto'>
        <PostProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/news' element={<PostForm />} />
            <Route path='/posts/:id' element={<PostForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Toaster/>
        </PostProvider>
      </div>
    </div>
  )
}
