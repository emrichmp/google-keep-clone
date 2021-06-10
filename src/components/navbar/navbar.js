import React from "react";
import './navbar.css';

import { connect } from 'react-redux';

class Navbar extends React.Component {

    handleClick = () => {
        this.props.dispatch({ type:"CLICKVIEW" })
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
                            <i className={this.props.clicked ? 'fas fa-grip-horizontal' : 'fas fa-bars'}></i>
                        </div>
                        <i className="fas fa-cog"></i>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.viewReducer.clicked
})

export default connect(mapStateToProps)(Navbar);