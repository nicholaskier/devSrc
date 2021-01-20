// User fills out SignupForm
// Hits route with a post request
// Into controllers where we have a function that will store the users token.
// Must communicate with the authService function in the frontend

// Now that the user has been authenticated

// User is able to view information such as:
// name, email, password that was entered in the signupForm
// Alias?, Bio?

// In App.jsx we must import
// import Login from "../Login/Login";
// import Signup from "../Signup/Signup";
// import authService from "../../services/authService";
//and return a Route

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import UserInfo from '../UserInfo/UserInfo'

class UserProfile extends Component {
  state = {
    user: []
  };

  render() {
    return (
      <>
        <h1>User Profile</h1>
        <img src="http://theoldreader.com/kittens/320/240/" alt="" />
        <p>Name: {this.state.user.name}</p>
        <UserInfo />
        <p>
          <Link
            to={{
              pathname: "/UpdateProfile",
            }}
          >
            Connect
          </Link>
        </p>
        <p>
          <Link
            to={{
              pathname: "/UpdateProfile",
            }}
          >
            Update
          </Link>
        </p>
      </>
    );
  }
}

export default UserProfile;

// const UserProfile = ({ user }) => {
//   return (
//     <>
//       <h1>User Profile</h1>
//       <div id="avatar-img">
//       <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
//       </div>
//       <h2>{user.email}</h2>
//       <p>
//         <Link
//           to={{
//             pathname: "/UpdateProfile",
//             state: { user },
//           }}
//         >
//           Update Profile
//         </Link>
//       </p>
//     </>
//   );
// };

// export default UserProfile;
