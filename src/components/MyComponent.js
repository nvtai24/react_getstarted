// class component
// functional component (thường được ưu tiên hơn, ngắn gọn hơn, dễ đọc hơn)

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Buiblue", age: "16" },
      { id: 2, name: "Nvtai", age: "20" },
      { id: 3, name: "MeoDev", age: "24" },
    ],
  };

  handleAddNewUser = (userObject) => {
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUsers;
    listUserClone = listUserClone.filter((user) => user.id != userId);
    this.setState({
      listUsers: listUserClone,
    });
  };

  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>

        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
