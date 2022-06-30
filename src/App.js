import './App.scss';
import { Routes, Route } from 'react-router-dom'
import {Home, Contact, About, PageNotFound, Blog, BlogPost} from './views'
import {MainHeader} from './components'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Blog />} />
        <Route path='/posts/:id' element={<BlogPost />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
