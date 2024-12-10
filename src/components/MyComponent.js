// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component {

    // JSX
    render() {

        const myInfor = ['Nvtai', 20, 'Nghean'];

        return (
            <div>
                <UserInfor/> 
                <br/>     
                <DisplayInfor name="Nvtai old" age="19"/>
                <hr/>
                <DisplayInfor name="Nvtai new" age={21} myInfor={myInfor}/>
            </div>
        );
    }

}


export default MyComponent;
