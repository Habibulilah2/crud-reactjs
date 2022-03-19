import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUserList, deleteDataUser } from '../actions/userActions'

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getUserList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div className="py-4">
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
