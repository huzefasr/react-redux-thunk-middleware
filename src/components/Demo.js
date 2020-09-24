import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getbranchDetails, postBranchDetails, getbranchReports, postBranchReports } from '../middleware/actions';

class Posts extends Component {

  componentWillMount() {
    this.props.postBranchReports("Versova")
    // this.props.postBranchDetails({
    //   "Branch": "Demo",
    //   "Camera_count": 10
    // })
    // this.props.getbranchDetails();
  }
  handleSubmitData(data){
    alert("called" + data)
  }
  render() {
    const { branches } = this.props;
    const Allbranch = branches && branches.map(branch => (
        <h3>{branch}</h3>
    ))
    return (
      <div>
        {/* <button onClick={this.handleSubmitData("boy")}>POST BRANCH</button> */}
        <h1>Branches:</h1>
        {console.log(this.props.postBranchDetailsResponse)}
        {/* {Allbranch} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  branches: state.branches,
  postBranchResponse: state.postBranchResponse,
  branchReport: state.branchReport
});

const mapDispatchToProps = { getbranchDetails,postBranchDetails, getbranchReports, postBranchReports };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);