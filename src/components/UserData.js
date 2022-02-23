import React,{ useState, useEffect } from 'react'
import Table from "./Table.js"
import {setUser} from "../reducers/action.js"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

 function UserData({ setUser, users}) {
   
const getData = () => {
  fetch('https://reqres.in/api/users?page=1')
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setUser(res.data)
    })
}
useEffect(() => {
  getData()
}, [])

return (
  <>
   <Table users={users.users}/>
  </>
)
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setUser: setUser,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData);