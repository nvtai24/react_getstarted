// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'MeoDev',
        age: 20,
        address: 'Nghean'
    };

    handleClick(event) {
        console.log('My name is ', this.state.name);
    }

    handleHover(event) {
        console.log(event.pageX);
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                <br/>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleHover}>Hover me</button>
            </div>
        );
    }

}


export default MyComponent;