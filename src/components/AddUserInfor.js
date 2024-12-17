import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: 'Nghean'
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age} years old

//                 <form onSubmit={ (event) => {this.handleOnSubmit(event)} }>
//                     <label>Your name:</label>
//                     <input type='text'
//                     value={this.state.name}
//                     onChange={ (event) => {
//                         this.handleOnChangeInput(event)
//                         }
//                     }></input>

//                     <label>Your age:</label>
//                     <input type='text'
//                     value={this.state.age}
//                     onChange={ (event) => {
//                         this.handleOnChangeAge(event)
//                         }
//                     }></input>
//                     <button>Submit</button>
//                 </form>

//             </div>
//         )
//     }

// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("Nghe An");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm {age} years old
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Your name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        ></input>

        <label>Your age:</label>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
