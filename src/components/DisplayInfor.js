import React from 'react';
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUsers } = this.props;
        // console.table(listUsers);
        return (
            <div className='display-infor-container'>

                <img src={logo}></img>

                <div>
                    <button onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowListUser ? 'Hide' : 'Show'} Users
                    </button>
                </div>

                {this.state.isShowListUser && 
                    <div> 
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>I'm {user.age} years old</div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
                
        )
    }
}

export default DisplayInfor;