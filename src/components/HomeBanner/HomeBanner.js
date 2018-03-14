import React from 'react'
import Button from "../UI/Button/Button";
import './HomeBanner.css'

const HomeBanner = (props) => {

    let openAccountButtonHandler = () => {
        console.log(props)
        console.log(props.history)
        props.history.push({
            pathname: '/register'
            /*

            search: '?' + any string

            * */
        })
    }

    const viewDemoButtonHandler = () => {
        props.history.push({
            pathname: 'markets/BTCUSD'
        })
    }

    return (
        <div>

            <h1 className="HomeBanner">
                DE-EXG
            </h1>
            <h1 className="HomeBanner">
                The most Advanced Decentralized Crypto-Currency Exchange

            </h1>
            <Button
                buttonType="Primary"
                clicked={viewDemoButtonHandler}>
                View Demo
            </Button>
            <Button
                buttonType="Primary"
                clicked={openAccountButtonHandler}>
                Open Account
            </Button>
        </div>
    )
}

export default HomeBanner