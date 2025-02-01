import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import bg from './a3.png'
import CardData from '../Card/CardData'

function Home() {
  return (
    <div>
        <div className="slides slide1">
            <div className="text">
                <h1>Sorting Visualizer</h1>
                <p>
                    Sorting algorithms are used to sort a data structure according to a specific order relationship, such as numerical order or lexicographical order.
                    This operation is one of the most important and widespread in computer science. For a long time, new methods have been developed to make this procedure faster and faster.
                    There are currently hundreds of different sorting algorithms, each with its own specific characteristics. They are classified according to two metrics: space complexity and time complexity.
                </p>
            </div>
            <div className="image">
                <img src={bg}/>
            </div>
        </div>
        <div className="slides slide2">
            <Card data={CardData}/> 
        </div>
    </div>
  )
}

export default Home