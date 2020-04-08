import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import {
  Typography,
  Input,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "react-bootstrap/Table";
export default function AucCarModelComponent({
  show,
  onHide,
  car,
  onBid,
  error,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  const [tempPrice, setTempPrice] = useState(car.price);
  const [tempName, setTempName] = useState("Generation Of Miracles");
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name == "price") setTempPrice(e.target.value);
    else {
      setTempName(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onBid(tempPrice, tempName, car.id);
  };
  return (
    <Modal
      size="xl"
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" class="h1">
          {car.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Carousel>
          {car.images.map((img) => (
            <Carousel.Item>
              <img
                className="w-100"
                src={img}
                style={{ height: "40rem" }}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Typography variant="h2" style={{ color: "white" }}>
          {car.historyHead}
        </Typography>
        <br />
        <Typography variant="h4" style={{ color: "white" }}>
          {car.history}
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h2" style={{ color: "white" }}>
          Final Thoughts
        </Typography>
        <br />
        <Typography variant="h4" style={{ color: "white" }}>
          {car.finalThoghts}
        </Typography>
        <br />
        <br />
        <Typography variant="h2" style={{ color: "white" }}>
          Specifications
        </Typography>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th>
                <h1>Engine</h1>
              </th>
              <td><h4>{car.Engine}</h4></td>
            </tr>
            <tr>
              <th>
                <h1>Horse Power </h1>
              </th>
              <td><h4>{car.HorsePower}</h4></td>
            </tr>
            <tr>
              <th>
                <h1>Engine</h1>
              </th>
              <td><h4>{car.Engine}</h4></td>
            </tr>
            <tr>
              <th>
                <h1>Torque</h1>
              </th>
              <td><h4>{car.Torque}</h4></td>
            </tr>
            <tr>
              <th>
                <h1>0 to 60 mph</h1>
              </th>
              <td><h4>{car.zto60mph} secs</h4></td>
            </tr>
            <tr>
              <th><h1>0 to 120 mph</h1></th>
              <td><h4>{car.zto120mph} secs</h4></td>
            </tr>
            <tr>
              <th><h1>Top Speed</h1></th>
              <td><h4>{car.topSpeed}</h4></td>
            </tr>
          </tbody>
        </Table>
          
        <Typography variant="h4" style={{ color: "white" }}>
         Current Price :${car.price} <br/>
         Current Owner : {car.owner}
        </Typography>
      </Modal.Body>
      <Typography variant="h3" style={{ color: "Black" }}>
          Wanna Buy....Fill the details and hope for the best!
        </Typography>
      <form
        className={useStyles.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit.bind(this)}
      >
        <br />
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          style={{ width: "100%" }}
          onChange={handleChange.bind(this)}
        />
        <br />
        <br />

        <div>
          {!error ? (
            <TextField
              id="outlined-basic"
              label="Your Bid"
              name="price"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={handleChange.bind(this)}
            />
          ) : (
            <TextField
              error
              variant="outlined"
              fullWidth
              id="standard-error-helper-text"
              label="Error"
              name="price"
              helperText="Your bid cannot be less than current price"
              onChange={handleChange.bind(this)}
            />
          )}
          <br />
          <br />
        </div>
        <Button type="submit" size="lg" block>
          Bid
        </Button>
      </form>
    </Modal>
  );
}
