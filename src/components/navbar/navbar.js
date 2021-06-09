import React from "react";
import './navbar.css'

class Navbar extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return (
            <div>
                <nav className="Navbar">
                    <h1 className="Navbar-header"><i className="far fa-lightbulb"></i> Keep</h1>
                        <input type="text" placeholder="Search"></input>
                        <i className="fas fa-redo"></i>
                        <br></br>
                        <div className="view-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-grip-horizontal' : 'fas fa-bars'}></i>
                        </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;