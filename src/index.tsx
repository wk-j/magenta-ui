import React from "react"
import { render } from "react-dom"

const NavBar = ({ }) =>
    <div className="jw-nav">
        <a className="jw-nav-link">Home</a>
        <a className="jw-nav-link">Installation</a>
        <a className="jw-nav-link">Document</a>
        <a className="jw-nav-link jw-right">Login</a>
    </div>

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