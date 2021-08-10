import logo from './logo.svg';
import './App.css';
import TinderCard from 'react-tinder-card'
import axios from 'axios';
import { Component } from 'react';
import {v4 as uuid} from 'uuid';


class   App extends Component
{
  constructor() {
    super();
    this.state = { data: [],
    session_id : uuid(),
  liked : false  };
  this.handleClick = this.handleClick.bind(this);
  }
  
 async onSwipe(direction, listing_id, session_id){ 
  this.setState({
    liked: false
  });
  await axios.post("http://localhost:5000/listings/recordSwipe", {id : listing_id, session_id : session_id, direction : direction})
}

async handleClick(listing_id) {
  this.setState({
    liked: !this.state.liked
  });
  await axios.post("http://localhost:5000/listings/updateLike", {id : listing_id})
  

}


showDetails(listing)
{
  alert(`Name: ${listing.name}\n Price : $${listing.price['$numberDecimal']} \n Minimum Nights : ${listing.minimum_nights}\n Beds : ${listing.beds}`)
}

async componentWillMount() {
  const response = await axios.get(`http://localhost:5000/listings`);
  const json = await response.data;
  this.setState({ data: json });
}



render(){
  const label = this.state.liked ? '❤' : 'Like'
  return (
    <div>
    <div className="App">
      <h1>LisTinder</h1>
      <h2> Swipe left for drop or right to save...</h2>
      {this.state.data.map((listing) =>
          <TinderCard className='swipe' key={listing.name} onSwipe={(dir) => this.onSwipe(dir, listing._id)}  >
            <div style={{ backgroundImage: 'url(' + listing.images.picture_url + ')' }} className='card' onDoubleClick={() => this.showDetails(listing)}>
              <h3>{listing.name}
              <div className="customContainer">
        <button className="btn btn-primary" onClick={() => this.handleClick(listing._id)}>
          {label}</button>
            </div>
              </h3>
              Double click for details
            </div>
            
          </TinderCard> )}
          
     
    </div>
   
   </div>
  );
}
}

export default App;
