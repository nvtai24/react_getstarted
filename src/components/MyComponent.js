// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Buiblue', age: '16'},
            {id: 2, name: 'Nvtai', age: '20'},
            {id: 3, name: 'MeoDev', age: '24'}
        ]
    }

    handleAddNewUser = (userObject) => {
        this.setState({
            listUsers: [...this.state.listUsers, userObject]
        })
    }

    // JSX
    render() {
        // DRY: dont repeat yourself

        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/> 
                <br/>     
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }

}


export default MyComponent;
