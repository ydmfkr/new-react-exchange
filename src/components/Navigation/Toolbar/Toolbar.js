import React from 'react'
import NavigationItems from "../NavigationItems/NavigationItems";
import './Toolbar'

const Toolbar = (props) => {

    /*   drawer toggle and the logo here*/
    return (
        <header className="Toolbar">

            <nav className="DextopOnly">
                <NavigationItems navigationItems={props.items}/>
            </nav>
        </header>
    )
}

export default Toolbar