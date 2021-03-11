import React, { Component } from "react";
import "reactjs-popup/dist/index.css";
import { fetchData } from "./emissionsdata/blocCarbonService";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { GiClawSlashes } from "react-icons/gi";
import classes from "../../style/building.module.css";
class ViewEmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessOperations: null,
      sites: null,
      title: "",
      checkbox: false,
      value: "",
      isOpen: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handle = (event) => {
    var count = 10;
    event.preventDefault();
    if (this.state.title && this.state.value) {
      const obj = {
        id: count++,
        title: this.state.title,
        checkbox: this.state.checkbox,
        value: this.state.value,
      };

      count++;
      var newArray = [];
      newArray.push(obj);
      console.log(newArray);
      var abc = this.state.businessOperations;
      abc.push(obj);
      console.log(abc);
      this.setState({
        businessOperations: abc,
      });

      this.closeModal();
      Swal.fire("Update Success!", "Business Operations Added", "success");
    } else {
      Swal.fire("Update Failed!", "Please put some values in fields", "error");
    }
  };

  handleDelete = (businessOperation, site) => {
    const businessOperations = this.state.businessOperations.filter(
      (m) => m._id !== businessOperation._id
    );
    const sites = this.state.sites.filter((m) => m._id !== site._id);
    this.setState({ businessOperations });
    this.setState({ sites });
  };

  computeData = () => {
    fetchData(this.props.endpoint, {}, (x) => {
      const { businessOperations, sites } = x;
      this.setState({ businessOperations, sites });
    });
  };

  componentWillMount() {
    this.computeData();
  }

  render() {
    if (this.state.businessOperations === null || this.state.sites === null) {
      return <span>Loading...</span>;
    }

    const { length: count } = this.state.businessOperations;
    const { businessOperation, sites } = this.state;

    return (
      <React.Fragment>
        <br />
        <div className="container">
          <table className="table col-sm-12">
            <tbody style={{ textAlign: "left", fontSize: "20px" }}>
              <b style={{ fontSize: "20px" }}>Business Operations</b>
              {this.state.businessOperations.map((businessOperation) => (
                <tr key={businessOperation.title}>
                  <td className={classes.tabledata}>
                    {businessOperation.title}
                  </td>
                  <td className={classes.tabledata}>
                    <span
                      style={{ border: "1px solid #ccc", padding: "8px 10px" }}
                    >
                      {businessOperation.number}
                    </span>
                  </td>
                  <td className={classes.tabledata}>
                    {businessOperation.value}
                  </td>
                  <td className={classes.tabledata}></td>
                  <td className={classes.tabledata}>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.openModal}
                    >
                      Update
                    </button>
                  </td>
                  <td className={classes.tabledata}>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(businessOperation)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table col-sm-12">
            <tbody style={{ textAlign: "left", fontSize: "20px" }}>
              <b style={{ fontSize: "20px" }}>Construction sites</b>
              {this.state.sites.map((site) => (
                <tr key={site.title}>
                  <td className={classes.tabledata}>{site.title}</td>
                  <td className={classes.tabledata}>
                    <span
                      style={{ border: "1px solid #ccc", padding: "8px 10px" }}
                    >
                      {site.number}
                    </span>
                  </td>
                  <td className={classes.tabledata}>{site.value}</td>
                  <td className={classes.tabledata}></td>
                  <td className={classes.tabledata}>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.openModal}
                    >
                      Update
                    </button>
                  </td>
                  <td className={classes.tabledata}>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(site)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <div className='container'  onHide={this.closeModal} show={this.state.isOpen} style={{backgroundColor: 'red'}}> */}
          <Modal
            show={this.state.isOpen}
            onHide={this.closeModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Business Operations To List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                style={{ marginTop: "15px" }}
                name="title"
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
                key="title"
              />

              <Form.Control
                type="checkbox"
                style={{ marginTop: "15px" }}
                name="checkbox"
                onChange={(e) => {
                  this.setState({ checkbox: e.target.value });
                }}
                key="checkbox"
              />

              <Form.Control
                type="text"
                placeholder="Enter available stock"
                style={{ marginTop: "15px" }}
                name="stock"
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
                key="stock"
              />

              <Button
                variant="secondary"
                type="submit"
                value="submit"
                onClick={this.handle}
                style={{ marginTop: "15px" }}
              >
                Save Changes
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default ViewEmissions;
