import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Note </h1>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles" element={<ArticlePage/>} />
          <Route path="/articles/:articleId" element={<ArticlesListPage/>} />
        </Routes>
         </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
