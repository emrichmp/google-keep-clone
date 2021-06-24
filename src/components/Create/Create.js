import React from 'react';
import './create.css';

class Create extends React.Component {

    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
        console.log(this.state.clicked)
    }

    render(){
        if (this.state.clicked === true){
            return(
                <div onClick={this.clickHandler}>
                    <form>
                        <input type="text" placeholder="Title" name="title"/>
                        <p>
                            <textarea name="content"
                            placeholder="Take a note...">
                            </textarea>
                        </p>
                    </form>
                </div>
            )
        } else {
            return(
                <div onClick={this.clickHandler}>
                    <form>
                        <input type="text" placeholder="Title" name="title"/>
                    </form>
                </div>
            )
        }
    }
}

export default (Create);