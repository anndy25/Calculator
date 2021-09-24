import React, { useState } from 'react'
import { Numbers, Operators } from './Data.js'
import CalPack from './CalPack.js'
import Button from '@mui/material/Button';
import './App.css';

const App = () => {
  const [value, setText] = useState('');
  const [answer, setAns] = useState('');
  const selectKey = (index, data) => {
    const variable = data.filter((val) => {
      return val.index == index;
    })
    // console.log(variable[0].data);
    if (variable[0].data != '=') {
      setText(value + variable[0].data);
      setAns(CalPack(value + variable[0].data));
    }
    else {
      setText(answer);
      setAns(null);
    }

  }
  return (

    <div className='cont-box d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100vw', backgroundColor: '#616161' }}>


      <div className="calcy" style={{ width: '30rem', backgroundColor: "white", border: '2px solid gray', borderRadius: '1rem' }}>
        <div className="cal-box">
          <h2 style={{ textAlign: 'right', height: '5rem', padding: '1rem 3rem', color: 'gray' }}>{answer}</h2>
          <input className="px-3" type="text" name="teavt" id="text-number" value={value} autocomplete="off" style={{ width: '100%', border: 'none', fontSize: '3.5rem',outline: 'none' }} />
        </div>
        <section className="cal-num row m-0 w-100" style={{ backgroundColor: '#263238', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
          <aside style={{ width: "80%", backgroundColor: '#263238' }}>
            <div className="d-flex justify-content-evenly row">
              {Numbers.map((val, index) => {
                return (
                  <>
                    <div key={index} className=" col-lg-4 col-4 p-0 my-2">
                      <Button variant='text' className="w-100" onClick={() => { selectKey(val.index, Numbers) }} style={{ color: 'white', fontSize: '1.5rem' }}>{val.data}</Button>

                    </div>
                  </>
                )
              })}
            </div>
          </aside>
          <aside style={{ width: "20%", backgroundColor: '#00e676' }}>
            <div className=" row">
              {Operators.map((value, index) => {
                return (
                  < >
                    <div className="p-0 my-2">
                      <Button variant='text' className=" w-100" onClick={() => { selectKey(value.index, Operators) }} style={{ color: 'white', fontSize: '1.5rem' }}>{value.data}</Button>
                    </div>
                  </>

                );

              })}

            </div>
          </aside>
          <div className=" p-0" >
            <Button  style={{ color: 'white', fontSize: '1.5rem', width:'100%' ,backgroundColor: '#263238',borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }} onClick={() => {
              setText(value.slice(0, -1));
              setAns(CalPack(value.slice(0, -1)));
            }}>DEL</Button>

          </div>
        </section>

      </div>
    </div>

  )
}

export default App;
