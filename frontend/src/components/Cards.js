import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import './Card.css';
var bodyParser = require('body-parser');
const Cards = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [items, setItems] = useState('');
  let data = [];

  const deleteHandler = (value) => {
    console.log(value)
    const idToDelete = value;
    fetch('http://localhost:9999/delete/' + idToDelete, {
      method: "DELETE"
    }).then((r) => {
      console.log("Got successfully DELETE", r);
      window.alert("Item deleted");
    }).catch((err) => {
      console.log(err)
    })
  };



  useEffect(() => {
    fetch("http://localhost:9999")
      .then((r) => r.json())
      .then((r) => {
        //     console.log(r);
        setDetails(state => [...state, ...r])
        data.push(r);
      })
      .then((r) => {
        setLoading(true);

        setLoading(false);
      })
      .catch((e) => {
        //     console.log("error" + e);
      });
  }, []);

  return (
    <>
    <div className="align">
      {!loading &&
        details.map((value, index) => {
          return (
            <>
              {/*console.log(value,index)*/}
              <div className="card" style={{ margin: "10%" }} key={value._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={value.img}
                    style={{ height: "40%", width: "auto" }}
                  />
                  <Card.Body >
                    <Card.Title>Title :{value.title}</Card.Title>
                    <Card.Text> Descriptions:{value.description}</Card.Text>
                    <Card.Text>Manufacturer:{value.manufacturer}</Card.Text>
                    <Card.Text>Price:{value.price}</Card.Text>
                
                    <button onClick={() => { deleteHandler(value._id) }} className="btn btn-primary">Delete</button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>

  );
};

export default Cards;