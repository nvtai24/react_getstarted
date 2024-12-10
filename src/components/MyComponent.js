// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from 'react';
import UserInfor from './UserInfor';

class MyComponent extends React.Component {

    // JSX
    render() {
        return (
            <div>
                <UserInfor/>       
            </div>
        );
    }

}


export default MyComponent;
