import React, { Component } from 'react';

class Nested extends Component {
    constructor () {
        super();
        this.state = {
            showDropdown: false,
        }
    }

    showDropdownMenu = (event) => {
		event.preventDefault();
		this.setState({ showDropdown: true }, () => {
			document.addEventListener('click', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu = () => {
		this.setState({ showDropdown: false }, () => {
		  document.removeEventListener('click', this.hideDropdownMenu);
		});
	}

    render() {
        return (
            <React.Fragment>
                <span onClick={this.showDropdownMenu}>
                    {this.props.children[0]}
                </span>
                <span>
                    {this.state.showDropdown ?
                        (this.props.children[1]) : (null)
                    }
                </span>
            </React.Fragment>
        )
    }
}

export default Nested;