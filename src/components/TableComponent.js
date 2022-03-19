import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions/userActions";

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUserList: state.users.getUserList,
    errorUserList: state.users.errorUserList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUserList ? (
        <div>
          <Row className="mb-3">
            <Col>
              <Link to="/create">
                <Button color="dark" className="mr-2">
                  <FontAwesomeIcon icon={faUserPlus} /> Create User
                </Button>
              </Link>
            </Col>
          </Row>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={props.getUserList}
            columns={columns}
            defaultSorted={defaultSorted}
            {...props.baseProps}
            pagination={paginationFactory()}
            search
          />
        </div>
      ) : (
        <div className="text-center">
          {props.errorUserList ? (
            <h4>{props.errorUserList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
