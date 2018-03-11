import React from "react"
import { render } from "react-dom"

const NavBar = ({ }) =>
    <div className="jw nav">
        <a className="jw nav link">Home</a>
        <a className="jw nav link">Installation</a>
        <a className="jw nav link">Document</a>
        <a className="jw nav link right">Login</a>
    </div>

const Bottons = ({ }) =>
    <div>
        <div className="jw button primary">Primary</div>
        <div className="jw button secondary">Secondary</div>
        <div className="jw button positive">Positive</div>
        <div className="jw button negative">Negative</div>
    </div>

const InvertButton = ({ }) =>
    <div>
        <div className="jw button invert primary">Primary</div>
        <div className="jw button invert secondary">Secondary</div>
        <div className="jw button invert positive">Positive</div>
        <div className="jw button invert negative">Negative</div>
    </div>

const Icons = ({ }) =>
    <div>
        <div className="icon blogger">HI</div>
    </div>

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="jw message">Message</div>
                <div className="jw error">Error</div>
                <div className="jw success">Success</div>
                <div className="jw warning">Warning</div>
                <Bottons />
                <InvertButton />
                <Icons />
            </div>
        );
    }
}

const el = document.getElementById("root")
render(<App />, el)