import React from 'react';
import './create.css';


class Create extends React.Component {
    render(){
        return(
            <div>
                <textarea className="new-note" placeholder="Take a note..."></textarea>
            </div>
        )
    }
}

export default Create;