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

        console.log('My name is', this.state.name);

        // merge state => react class
        // nó tự động merge state, không cần phải ghi đè lại toàn bộ state
        // nó phân biệt được state nào thay đổi, state nào không thay đổi
        this.setState( {
            name: 'Nvtai24',
            age: Math.floor(Math.random()*100) + 1
            // age: 24,
            // address: 'Hanoi'
        })
        
        // this.setState( {
        //     age: Math.floor(Math.random()*100) + 1
        // })



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
                <button onClick={(event) => {this.handleClick(event)} }>Click me</button>
                <button onMouseOver={this.handleHover}>Hover me</button>
            </div>
        );
    }

}


export default MyComponent;
