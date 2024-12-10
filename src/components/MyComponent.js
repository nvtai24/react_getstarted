// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'MeoDev',
        age: 20,
        address: 'Nghean'
    };


    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
            </div>
        );
    }
}


export default MyComponent;