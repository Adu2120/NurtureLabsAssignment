import React, { useEffect, useState } from 'react'
import './Section8.css'
import { Paper, Tab, Tabs } from '@material-ui/core';
import bitcon from './Section8/bitcoin.png'
import money from './Section8/moneyBag.png'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import TableTab from './Section8/TableTab';
import axios from 'axios';


export default function Section8() {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);


    const btn = (e) => {
        e.preventDefault();
    }

    const close = (e) => {
        e.preventDefault();
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const [data, setData] = useState([])
    useEffect(() => {
      axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then((resp) => {
        setData(resp.data.data)
      })
    }, [])
    

    return (
        <div className='body row'>
            <div className='col-8 border-r'>
                <div className="a-header">
                    <Paper>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="Section" />
                        </Tabs>
                    </Paper>
                    <div>
                        <div className='side-div'>
                            <i className="bx bx-wallet-alt" />
                            <span>0.2 $XYZ</span>
                            <button type='button' className='btn' onClick={btn}>Tier 1</button>
                        </div>
                    </div>
                </div>
                <div className='tutorial'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button type='button' className='btn' onClick={btn}>Tutorial</button>
                    <img src={bitcon} alt="bitcoin" className='imgs' />
                    <div><span className="close" onClick={close}>&times;</span></div>
                </div>
                <div className="boxi">
                    <h5>Your rewards</h5>
                    <div className='r2'>
                        <span>$ 0.26231428</span>
                        <button type='button' onClick={btn} className='btn btn-primary'>
                            <i className='bx bx-right-top-arrow-circle'></i>Custom link
                        </button>
                    </div>
                    <div className='r3'>
                        <span className='btn btnx'>$40 AVAX</span>
                        <span className='btn btnx'>$10 BNB</span>
                        <span className='btn btnx'>$210 BTC</span>

                    </div>
                </div>
                <div className="row referral">
                    <div className="col-6">
                        <div className="boxi" style={{ marginRight: '20px' }}>
                            <div className='referral-title'>
                                <img src={money} alt="" className='money' />
                                <span>12.5% of fee</span>
                            </div>
                            <span className='desc'>
                                Your Referral Link for xyz
                            </span>
                            <div className="buttonIn">
                                <input type="text" id="enter" value='https://unityexchange.design' className='inp' disabled />
                                <i className='bx bxs-copy' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="boxi" style={{ marginLeft: '20px' }}>
                            <div className='referral-title'>
                                <img src={money} alt="" className='money' />
                                <span>12.5% of fee</span>
                            </div>
                            <span className='desc'>
                                Your Referral Link for xyz
                            </span>
                            <div className="buttonIn">
                                <input type="text" id="enter" value='https://unityexchange.design' className='inp' disabled />
                                <i className='bx bxs-copy' />
                            </div>
                        </div>
                    </div>
                    <div className='bit-table'>
                        <Paper>
                            <Tabs
                                value={value1}
                                onChange={handleChange1}
                                aria-label="basic tabs example"
                            >
                                <Tab label="First Tab" />
                                <Tab label="Secondx Tab" />
                            </Tabs>
                        </Paper>
                        {
                            value1 === 0 ?
                                <>
                                    <TableTab data={data} />
                                </> :
                                value1 === 1 ?
                                    <>
                                        <TableTab data={data} />
                                    </>
                                    : <></>
                        }
                    </div>
                </div>
            </div>
            <div className='col-4 cstm' style={{ marginTop: '25px' }}>
                <div className="row">
                    <div className="col-5">
                        <Dropdown as={ButtonGroup}>
                            <Button variant="secondary">Split Button</Button>

                            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-6 right">
                        <Dropdown as={ButtonGroup}>
                            <Button variant="">
                                <i className="bx bx-wallet-alt" style={{ margin: '0 5px' }} />Split Button
                            </Button>

                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '25px' }}>
                    <div className="col-1">
                        <i className='bx bx-left-arrow-alt' />
                    </div>
                    <div className="col-10">
                        <h5>Custom link</h5>
                    </div>
                </div>
                <div style={{ marginLeft: '43px', marginTop: '20px' }}>
                    <h5>https://testnet.xyz.xyz/trade?ref=</h5>
                </div>
                <div className="buttonIn">
                    <input type="text" placeholder="ENTER" className='inp' />
                </div>

                <div className='r1'>
                    <button type='button' onClick={btn} className='btn btn-primary'>
                        <i className='bx bx-right-top-arrow-circle' style={{ fontSize: 'small' }}></i>Custom link
                    </button>
                    <button type='button' onClick={btn} className='btn inp'>
                        <i className='bx bxs-right-arrow-square'></i>Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
