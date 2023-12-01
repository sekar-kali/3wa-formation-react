import React, { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import CreateBlog from './pages/CreateBlog';
import DetailBlog from './pages/DetailPage';
import Header from './components/Header';

function Button(props){
  return <button className='bg-gray-50 p-4' onClick={props.onClick}>{props.title}</button>
}

function Home(){
  return <h1>HOME PAGE</h1>;
}

function Blog(){
  return <h1>BLOG PAGE</h1>;
}

export default function App() {
  return (
    // <Fragment>
    //   <h1>Title</h1>
    //   <p>Hello world</p>
    //   <Button onClick></Button>
      
    // </Fragment>
    <div>
      <Header />
      <Routes>
        {/* 
      `Route` permet de définir un chemin et le composant à afficher sur ce dernier
      Dans la version v5 de `react-router-dom` element était nommé `component`
    */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* 
        Les chemins imbriquées permettent d'avoir des chemins
        qui vont s'imbriquer par rapport à leur chemin principe
        exemple :
        /blogs => Page avec tous les articles
        /blogs/1 => Accéder a un article à partir du chemin `/blogs`
        /blogs/new => un formulaire pour crée un blog
        */}
        <Route path="/blogs">
          {/* 
          La propriété `index` permet de définir le composant principal
          */}
          <Route index element={<BlogPage />} />
          {/* 
          Quand on utilise pour le chemin des liens 'enfant' juste le nom sans '/' devant
        */}
          <Route path="new" element={<CreateBlog />} />
          {/* 
          Les chemins dynamique permettent d'accéder à une page de façon automatique
          */}
          <Route path=":id" element={<DetailBlog />} />
        </Route>
      </Routes>
</div>
  );
}
