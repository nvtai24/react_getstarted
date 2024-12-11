// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Nvtai', age: 20},
            {id: 2, name: 'MeoDev', age: 22},
            {id: 3, name: 'Buiblue', age: 24}
        ]
    }

    // JSX
    render() {
        // DRY: dont repeat yourself

        return (
            <div>
                <UserInfor/> 
                <br/>     
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }

}


export default MyComponent;
