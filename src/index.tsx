import React from "react"
import { render } from "react-dom"

const NavBar = ({ }) =>
    <nav>
        <ul>
            <li><a>Home</a></li>
            <li><a>Installation</a></li>
            <li><a>Document</a></li>
        </ul>
    </nav>

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="message">Message</div>
                <div className="error">Error</div>
                <div className="success">Success</div>
                <div className="warning">Warning</div>
            </div>
        );
    }
}

const el = document.getElementById("root")
render(<App />, el)