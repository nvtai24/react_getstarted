import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        // props => viết tắt của properties (nên dịch là tài sản)
        // props là một object chứa các thuộc tính của component
        // props là read-only, không thể thay đổi giá trị của props

        // destructuring props
        const {name, age} = this.props;

        console.log(this.props);

        return (
            <div>
                <div>My name is {name}</div>
                <div>I'm {age} years old</div>
            </div>
        )
    }
}

export default DisplayInfor;