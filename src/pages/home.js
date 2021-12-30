import React, { useState, useEffect } from 'react';
import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'
import { Form, Button } from 'react-bootstrap'
import api from '../api/market';
import { v4 as uuidv4 } from 'uuid';
import './home.css'
function Home(props) {


    // Form

    const [exchage, setExchange] = useState("")
    const [symbol, setSymbol] = useState("")
    const [asset, setAsset] = useState("")
    const [price, setPrice] = useState("")
    const [currentid, setId] = useState("")
    const [update, setUpdate] = useState(false)

    const data = {
        exchange_id: exchage,
        symbol: symbol,
        base_asset: asset,
        price: price,
        id: uuidv4()
    }



    const [markets, setMarkets] = useState([])

    const retrieveMarkets = async () => {
        const response = await api.get("/markets")
        return response.data;
    }
    const updateItem = async (id) => {
        const response = await api.patch(`/markets/${id}`);
        setExchange(response.data.exchange_id)
        setSymbol(response.data.symbol)
        setAsset(response.data.base_asset)
        setPrice(response.data.price)
        setId(response.data.id)
        setUpdate(true)
        console.log(response.data)
    }

    const updateData = async () => {
        const newData = {
            exchange_id: exchage,
            symbol: symbol,
            base_asset: asset,
            price: price,
            id: currentid

        }
        setExchange("")
        setSymbol("")
        setAsset("")
        setPrice("")
        setUpdate(false)
        const response = await api.put(`/markets/${currentid}`, newData)
    }


    useEffect(() => {
        const getAllMarkets = async () => {
            const allMarkets = await retrieveMarkets();
            if (allMarkets) setMarkets(allMarkets);
        };
        getAllMarkets()
    }, [markets])

    const sendData = async () => {
        const request = {
            id: uuidv4(),
            ...data
        }
        setExchange("")
        setSymbol("")
        setAsset("")
        setPrice("")

        const response = await api.post("markets", request)
        setMarkets([...markets, { id: uuidv4(), ...data }])
    }




    const removeItem = async (id) => {
        await api.delete(`/markets/${id}`);
        const newMarkets = markets.filter((market) => {
            return market.id !== id;
        })
        setMarkets(newMarkets)
    }

    return (
        <>
            <Header />
            <Form >
                <div className='form-container' >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-form'>Exchange Id</Form.Label>
                        <Form.Control type="text" value={exchage} onChange={(e) => setExchange(e.target.value)} placeholder="Exchange Id" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-form'>Symbol</Form.Label>
                        <Form.Control type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Symbol" />
                    </Form.Group>
                </div>
                <div className='form-container' >

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-form'>Base Asset</Form.Label>
                        <Form.Control type="text" value={asset} onChange={(e) => setAsset(e.target.value)} placeholder="Base Asset" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-form'>Price</Form.Label>
                        <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                    </Form.Group>
                </div>
                <div style={{ textAlign: "center" }}>

                    
                    {update ?
                    <Button variant="secondary" style={{marginLeft:"2px",marginRight:"2px"}} onClick={() => updateData()} type="button">
                        Update
                    </Button>
                    :
                    <Button variant="secondary" style={{marginLeft:"2px",marginRight:"2px"}} onClick={() => sendData()} type="button">
                        Submit
                    </Button>
                    }
                </div>
            </Form>

            <div className='card-container'>
                {markets.map((crypto) => {
                    return (


                        <Card  key={crypto.id} data={crypto} removeFunc={() => removeItem(crypto.id)} updateItem={() => updateItem(crypto.id)} />

                    )
                })}
            </div>
            <Footer />
        </>
    );
}

export default Home;