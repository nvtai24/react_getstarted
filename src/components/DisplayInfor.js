import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props;

  // const [stateName, setStateName] = useState(initialState);
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log("call me render");

  useEffect(() => {
    if (listUsers.length == 0) {
      alert("List user is empty");
    }
    console.log("call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <button onClick={() => handleShowHideListUser()}>
          {isShowHideListUser ? "Hide" : "Show"}
        </button>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>I'm {user.age} years old</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
