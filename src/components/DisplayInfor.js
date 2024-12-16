import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log("constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      document.title = "Meo thich code";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("current props:", this.props);
    console.log("previous props:", prevProps);

    if (this.props.listUsers != prevProps.listUsers) {
      this.props.listUsers.length > 5 && alert(`You have ${this.props.listUsers.length} users`);
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  // template + logic js
  render() {
    console.log("render");
    const { listUsers } = this.props;
    // console.table(listUsers);
    return (
      <div className="display-infor-container">
        {/* <img src={logo}></img> */}

        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser ? "Hide" : "Show"} Users
          </button>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age} years old</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisplayInfor;
