import React from 'react'
import '../css/Home.css'
import intershipComplete from '../assets/Kamalraj D _Internship Completion_page-0001.jpg'
import weatherAPI from '../assets/weather-api.png'
import currencyAPI from '../assets/currency-convertor.png'

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='intership-completed home-subcontainer'>
            <p className='title'>Internship Completion Certificate</p>
                <img src={intershipComplete} alt="Internship Completion" />
                
            </div>
            <div className='weather-api home-subcontainer'>
            {/* <div> */}
            <p className='title'>Weather API project</p>
                <a href="https://weather-reactpage.netlify.app/" target='_blank'><img src={weatherAPI} /> </a>
                {/* <iframe src="https://weather-reactpage.netlify.app" target="_blank" scrolling= 'no'/> */}
                {/* </div> */}
            </div>
            <div className='currency-convertor-api home-subcontainer'>
            {/* <div> */}
            <p className='title'>Currency Convertor API project</p>
                <a href="https://currency-convertor-api.netlify.app/" target='_blank'><img src={currencyAPI} /> </a>
                {/* <iframe src="https://currency-convertor-api.netlify.app/" target="_blank" scrolling= 'no'/> */}

                {/* </div> */}
            </div>
        </div>
    )
}
