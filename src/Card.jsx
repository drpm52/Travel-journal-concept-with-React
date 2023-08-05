import React from "react"

export default function Card({title, location, googleMapsUrl,startDate, endDate, imageUrl, description}){
    return(
        <div className="card-container row">
       <div className= "img-div" >
       <img className="main-img"src={imageUrl} />
        </div>
        <div className="card-text col row">
        <div className="pin-div row  center">
        <img className ="pin" src="./images/pin.png" />
        <p className="location">{location}</p>
        <a href={googleMapsUrl} target ="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <p className="date">{`${startDate} - ${endDate}`}</p>
        <p className="description">{description}</p>
    
         
        </div>
       </div>
    )
}