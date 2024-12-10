import React from 'react';


class UserInfor extends React.Component {
    state = {
        name: 'MeoDev',
        age: 20,
        address: 'Nghean'
    };


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        // !!! BAD CODE
        // cách code này phá vỡ quy trình quản lí state của react, không được phép thay đổi state trực tiếp
        // this.state.age = event.target.value;
        // luôn sử dụng setState để cập nhật state nhằm đảm bảo React hoạt động chính xác và UI được đồng bộ
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old

                <form onSubmit={ (event) => {this.handleOnSubmit(event)} }>
                    <label>Your name:</label>
                    <input type='text' 
                    value={this.state.name}
                    onChange={ (event) => {
                        this.handleOnChangeInput(event)
                        }
                    }></input>

                    <label>Your age:</label>
                    <input type='text' 
                    value={this.state.age}
                    onChange={ (event) => {
                        this.handleOnChangeAge(event)
                        }
                    }></input>
                    <button>Submit</button>
                </form>   

            </div>
        )
    }


}

export default UserInfor;