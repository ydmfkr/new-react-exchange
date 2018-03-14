import React from 'react'
import './Home.css'
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = (props) => {

    return (
        <div>
            <div className="TopComponent">
                <div className="TopModal">
                    {console.log(props)}
                    <HomeBanner {...props}/>
                </div>
            </div>
        </div>
    )
}

export default Home