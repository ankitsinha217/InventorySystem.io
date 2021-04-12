import React,{ useState,useEffect } from 'react';
import { Button, label } from 'react-bootstrap';


const Add = () => {
    const [services, setServices] = useState([])
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [id, setId] = useState('');
    const [deal, setDeal] = useState('');
    const [manufacturer, setManufacture] = useState(''); 
    const submitHanlder = () => {
        fetch('http://localhost:9999/add', {
            method: "POST",
            body: JSON.stringify({ img: image, title: title, description: description, price: price, inventory: inventory, id: id, deal: deal, manufacturer: manufacturer }),
            headers: {
                "content-Type": "application/json",
            }
        }).then((r) => {
            console.log(r);
           window.alert("Added Successfully");
        }).catch((e) => {
            console.log("error");
        })
    }

    return (
        <>
            <div className="container shadow">

                <div className="row">
                    <div className="col"> Product URL <input placeholder="Product URL" className="img" onChange={(event) => { setImage(event.target.value) }} style={{ margin: "10px" }} /></div>
                    </div><div className="row">
                    <div className="col">Product Title <input placeholder="Product title" className="title" onChange={(event) => { setTitle(event.target.value) }} style={{ margin: "10px" }} /></div>
               </div>
                <div className="row">
                    <div className="col">  Description <input placeholder="Description" className="Description" onChange={(event) => { setDescription(event.target.value) }} style={{ margin: "10px" }} /></div>
                    </div><div className="row">
                    <div className="col"> Enter Price      <input placeholder="price" className="price" onChange={(event) => { setPrice(event.target.value) }} style={{ margin: "10px" }} /></div>
                </div><div className="row">
               
                    <div className="col">  Manufacturer   <input placeholder="manufacturer" className="manufacturer" onChange={(event) => { setManufacture(event.target.value) }} style={{ margin: "10px" }} />   </div>
                </div>
                <div className="row">
                    <div className="col" style={{margin:"10px"}}></div>
                    </div><div className="row">
                    <div className="col" style={{margin:"10px"}}></div>
                </div>

                <Button onClick={submitHanlder} className="btn btn-primary" style={{margin:"10px"}}>Submit Now</Button>

            </div>
        </>
    )

}


export default Add;