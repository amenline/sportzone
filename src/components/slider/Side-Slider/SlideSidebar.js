import React from 'react';
import './SlideSidebar.css';

// Component serves as Club news updates (lastest news from each club)
const SlideSidebar = props => {
    return (
        <div className='slidebar'>
            <div>
                <h3>Title Here</h3>
                <p>Short discription here</p>
                <p><small>CATEGORY</small></p>
            </div>
            <hr/>
            <div>
                <h3>Title Here</h3>
                <p>Short discription here</p>
                <p><small>CATEGORY</small></p>
            </div>
            <hr/>
            <div>
                <h3>Title Here</h3>
                <p>Short discription here</p>
                <p><small>CATEGORY</small></p>
            </div>
            <hr/>
            <div>
                <h3>Title Here</h3>
                <p>Short discription here</p>
                <p><small>CATEGORY</small></p>
            </div>
            <hr/>
            <div>
                <h3>Title Here</h3>
                <p>Short discription here</p>
                <p><small>CATEGORY</small></p>
            </div>
        </div>
    )
}

export default SlideSidebar;