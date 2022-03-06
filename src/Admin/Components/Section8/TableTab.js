import React from 'react'
import './table.css'

export default function TableTab(props) {
    return (
        <>
            <div className='row head'>
                <div className="col-3">
                    ASSET
                </div>
                <div className="col-3">
                    AMOUNT
                </div>
                <div className="col-3">
                    USER ACCOUNT
                </div>
                <div className="col-3">
                    REFERRAL EARNING
                </div>
            </div>
            {
                props.data.map((item) => <TRow data={item}/>)
            }
        </>
    )
}

function TRow(props) {
    return (
        <>
            <div className='row tbody'>
                <div className="col-3">
                    <div style={{display: 'flex'}}>
                    <img src={props.data.img} alt="img" style={{display: 'flex', width: '50px', height: '50px'}} />
                    <div>
                    <span style={{fontSize: '20px'}}>{props.data.asset}</span>
                    <div style={{display: 'flex'}}>
                        <span style={{marginLeft: '4px', fontSize: '14px'}}>{props.data.type}</span>
                        <div className='boxi' style={{marginLeft: '10px', padding: '5px'}}>
                            <img src={props.data.chain.img} alt="chain_img" style={{width: '15px'}}/>    
                            <span style={{fontSize: '10px'}}>{props.data.chain.name}</span>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <span style={{fontSize: '14px'}}>{props.data.amount} BNB</span><br/>
                    <span style={{fontSize: '12px', color: '#808191'}}>{props.data.state}</span>
                </div>
                <div className="col-3" style={{overflow: 'scroll'}}>
                    <span style={{fontSize: '14px'}}>{props.data.user}</span>
                </div>
                <div className="col-3">
                    <span style={{fontSize: '14px'}}>{props.data.amount} BNB</span><br/>
                    <span style={{fontSize: '12px', color: '#808191'}}>View on BSC Scan <i className='bx bx-right-top-arrow-circle'></i></span>
                </div>
            </div>
        </>
    )
}