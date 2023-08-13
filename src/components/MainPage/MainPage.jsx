import React, { useState } from 'react'
import './MainPage.scss'
import Values from 'values.js'
import SingleColor from '../SingleColor/SingleColor'

const MainPage = () => {
    const [color,setColor] = useState('')
    const [err, setErr] = useState(false)
    const [list, setList] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            const colors = new Values(color).all(10)
            setList(colors)
            
        } catch (error) {
            setErr(true)
        }
    }
    

    return (
        <>
            <section className='main-page'>
                <header className='header'>
                    <div className="title">
                        <h1>Color Generator</h1>
                    </div>
                    <form className='form' onSubmit={e => handleSubmit(e)}>
                        <input 
                        type="text" 
                        className='input' 
                        placeholder='#f15025' 
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        onClick={e => setErr(false)}
                        />
                        <button className='btn' type='submit'>Submit</button>
                    </form>
                        {err && <p className='error' style={{color: 'darkred'}}>Please enter a valid color</p>}
                </header>
                    <h3 style={{margin: '10px'}}>List goes here</h3>
                <section className="colors">
                    {list.map((color, index) => {
                        return <SingleColor key={index} {...color} index={index} />
                    })}
                </section>
            </section>
        </>
    )
}

export default MainPage