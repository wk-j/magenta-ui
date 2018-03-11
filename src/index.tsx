import React from "react"
import { render } from "react-dom"

const NavBar = ({ }) =>
    <div className="nav">
        <a className="link">Home</a>
        <a className="link">Installation</a>
        <a className="link">Document</a>
        <a className="link right">Login</a>
    </div>

const Bottons = ({ }) =>
    <div>
        <div className="button primary">Primary</div>
        <div className="button secondary">Secondary</div>
        <div className="button positive">Positive</div>
        <div className="button negative">Negative</div>
    </div>

const InvertButton = ({ }) =>
    <div>
        <div className="button invert primary">Primary</div>
        <div className="button invert secondary">Secondary</div>
        <div className="button invert positive">Positive</div>
        <div className="button invert negative">Negative</div>
    </div>

class App extends React.Component {
    render() {
        return (
            <div className="jw">
                <NavBar />
                <div className="message">Message</div>
                <div className="error">Error</div>
                <div className="success">Success</div>
                <div className="warning">Warning</div>
                <Bottons />
                <InvertButton />
            </div>
        );
    }
}

const el = document.getElementById("root")
render(<App />, el)