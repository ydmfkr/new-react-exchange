import React, {Component} from 'react'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './Layout.css'

class Layout extends Component {

    state = {}

    render() {
        return (
            <div>
                <div>
                    <Toolbar items={this.props.items}/>


                </div>

                <main className="Content">
                    {this.props.children}
                </main>
            </div>)
    }
}

export default Layout