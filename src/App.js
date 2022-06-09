import React, { useState, useEffect } from 'react';
import './App.css';
import { Client } from './Client';
import Posts from './components/Posts'

function App() {
   const [article, setArticle] = useState([]);

   useEffect (() => {
       Client.getEntries()
       .then((res) => {
           setArticle(res.items);
       })
       .catch(console.error);
   }, []);

        return (
            <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='logo'>React and Contentful</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={article} />
                        </div>
                    </main>
                </div>
            </div>
        );
    
        }

export default App;
