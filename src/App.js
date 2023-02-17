import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Portfolio from './components/Portfolio';

function App() {

    // we may need some piece of STATE to decide whwat Component is being rendere
    /*const [pages, setPages] = useState([
        { 
            title: "home"
        },
        { 
            title: "projects"
        },
        { 
            title: "contact"
        },
    ]);
    */
    const pages = ["home", "projects", "contact"]

    const [currentPage, setCurrentPage] = useState(pages[0]);  // { title: "home" }
// in css add flex to portfolio-main and 100%
// flex-direction column
// justifycontent space-between
// Portfolio component 80vh

    return (
        <div className="portfolio-main">
            <header className="Header">
                <h1 className='name-title'>Nick S</h1>
                <p className='header-description'>FullStack developer</p>
                <Tabs page={currentPage} setPage={setCurrentPage}/>
            </header>
            <Portfolio  page={currentPage} />
           
        </div>
    )
}

export default App;