import React from 'react';
import './create.css';

//onClick={this.setState({clicked: false})}

class Create extends React.Component {

    state = {
        clicked: true
    }

    clickHandler(){
        console.log("yo")
    }

    render(){
        if (this.state.clicked === true){
            return(
                <div>
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
                <div>
                    <form>
                        <input type="text" placeholder="Title" name="title"/>
                    </form>
                </div>
            )
        }
    }
}

export default Create;