import React from 'react';
import './Tabs.css';
import ContactTab from './tab_components/contactTab';
import HomeTab from './tab_components/homeTab';
import ProjectTab from './tab_components/projectTab';





const Tabs = (props) => {
    console.log(props) // { page: "home", setPage: fn() }
    //const pages = ["home", "projects", "contact"]
    //const [currentPage, setCurrentPage] = useState('home');

    // const [currentPage, setCurrentPage] = useState(pages[0]);
    // if we want to style the ACTIVE link different
    // const [activePage, setActivePage] = useState(props.page)  // "home"

   

    return (
        <div className="tabs-container">
            <ul>
            <HomeTab page={props.page} setPage={props.setPage}/>
            <ProjectTab page={props.page} setPage={props.setPage}/>
            <ContactTab page={props.page} setPage={props.setPage}/>

            </ul>
        </div>
    )
}



export default Tabs;