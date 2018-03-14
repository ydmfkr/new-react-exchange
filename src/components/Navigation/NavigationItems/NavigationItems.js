import React from 'react'
import NavigationItem from "../NavigationItem/NavigationItem";
import './NavigationItems.css'

const NavigationItems = (props) => {

    let navItems = props.navigationItems.map(item => {
        return (
            <NavigationItem
                key={item.heading}
                link={item.link}
                exact={item.exact}>
                {item.heading}
            </NavigationItem>
        )
    })

    return (

        <ul className="NavigationItems">
            {navItems}
        </ul>
    )
}

export default NavigationItems