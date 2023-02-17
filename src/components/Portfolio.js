import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import "./Portfolio.css"


const Portfolio = (props) => {
    
    const renderPage = (page) => {
        

        // swtich --> test waht is the value of "currentPage"
        if (page === 'home') {
            return <Home />
        } else if (page === 'projects') {
            return <Projects />
        } else {
            return <Contact />
        }
    }

    let page = props.page


    // Based on the state of props.currentPage we display the corresponding componenet

    return (
        <div className="portfolio-container">
            <div>
            {renderPage(page)}
            </div>

        </div>
    )
}



export default Portfolio;