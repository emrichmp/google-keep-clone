import React from 'react';
import './create.css';


class Create extends React.Component {
    render(){
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
    }
}

export default Create;