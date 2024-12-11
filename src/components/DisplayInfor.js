import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        // props => viết tắt của properties (nên dịch là tài sản)
        // props là một object chứa các thuộc tính của component
        // props là read-only, không thể thay đổi giá trị của props

        // destructuring props
        const { listUsers } = this.props;
        // const listUsers = this.props.listUsers;

        console.log(listUsers);

        return (
            <div> 
                {listUsers.map((user) => {
                    return (
                        <div key={user.index}>
                            <div>My name is {user.name}</div>
                            <div>I'm {user.age} years old</div>
                            <hr/>
                        </div>
                    )
                })}

                {/* <div>My name is {name}</div>
                <div>I'm {age} years old</div>
                <hr/>
                <div>My name is {name}</div>
                <div>I'm {age} years old</div>
                <hr/>
                <div>My name is {name}</div>
                <div>I'm {age} years old</div> */}
            </div>
        )
    }
}

export default DisplayInfor;