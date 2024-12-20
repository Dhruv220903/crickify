import React, { useState } from 'react'
import circle from './circle.png'
import Axios from 'axios'
import { useEffect } from 'react'
const CricketScore = () => {
    const [data,setData]=useState([]);
    const[inputData,setInputData]=useState('');
    const[search,setSearch]=useState('')
    useEffect(()=>{
        getData()
    },[])


    const getData=async()=>{
        try{
            const response=await Axios.get('https://api.cricapi.com/v1/cricScore?apikey=e309faf3-a39d-42ee-b012-6b8858eba72f');
            console.log(response.data.data)
            setData(response.data.data);
        }
        catch(e){
            console.log(e);
        }
        
    }
    const handleInput=(e)=>{
        setInputData(e.target.value)
    }

    const handleSubmit=()=>{
        setSearch(inputData)
        getData();
    }
  return (
    <>
      
      <div className="main-container">
        <div className="searchBar">
            <input type="text" placeholder='search for matches,series' onChange={handleInput}/>
            <button onClick={handleSubmit} >Search</button>
        </div>
        <div className="heading">
            <img src={circle} alt="" />
            <p>Live Cricket Score App</p>
        </div>
        <div className="container">
        {data? data.map((v)=>{
            console.log(v);
            if(v.status!='Match not started'){
                if(v.series.includes(search) || v.t1.includes(search) || v.t2.includes(search)){
                    return(
                        <div className="card">
                            <h3>{v.series}</h3>
                            <h3>{v.matchType}</h3>
                            <div className="img">
                                <div>
                                    <img src={v.t1img} alt="" />
                                    <p>{v.t1}</p>
                                    <p>{v.t1s}</p>
                                </div>
                                <p>vs</p>
                                <div>
                                    <img src={v.t2img} alt="" />
                                    <p>{v.t2}</p>
                                    <p>{v.t2s}</p>
                                </div>
                            </div>
                            <p>Status: {v.status}</p>
                        </div>
                    )
                }
                if(search===''){
                    return(
                        <div className="card">
                            <h3>{v.series}</h3>
                            <h3>{v.matchType}</h3>
                            <div className="img">
                                <div>
                                    <img src={v.t1img} alt="" />
                                    <p>{v.t1}</p>
                                    <p>{v.t1s}</p>
                                </div>
                                <p>vs</p>
                                <div>
                                    <img src={v.t2img} alt="" />
                                    <p>{v.t2}</p>
                                    <p>{v.t2s}</p>
                                </div>
                            </div>
                            <p>Status: {v.status}</p>
                        </div>
                    )
                }
              
            }
        
        }): <p>Data not found</p>}

        </div>
      </div>
    </>
  )
}

export default CricketScore
