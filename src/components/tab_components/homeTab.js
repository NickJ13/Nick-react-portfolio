import React, { useState } from "react";

const HomeTab = (props) => {

    const style1 = {
        backgroundColor: 'blue'
    }

    const style2 = {
        backgroundColor: 'lightblue'
    }

    const [style, setStyle] = useState(style1)

    // state hook that keeps track of the style
    // the current state will be the style you want for all buttons
    // onMouseEnter setState to style2
    // apply the style to that element

    // onMouseLeave setState to style1
    //
    const tabHovered = () => {
        setStyle(style2)
    }
    const unHovered = () => {
        setStyle(style1)
    }


    return (
        <li
            onMouseEnter={tabHovered}
            onMouseLeave={unHovered}
            style={style}
            className='link'
            name="home"
            value="home"
            onClick={() => props.setPage('home')}>Home
        </li>
    )
}

export default HomeTab;