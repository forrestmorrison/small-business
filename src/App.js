import { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    const rockstarpark = { lat: 29.95862, lng: -95.42057};
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 39, lng: -96 },
      zoom: 5,
    });
    const marker = new window.google.maps.Marker({
      position: rockstarpark,
      map: map,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Austin Small Business</h3>
          <nav>
            <button>Listings</button>
            <button>Login</button>
          </nav>
        </header>
        <div id="map"></div>

      </div>
    );
  }

}

export default App;
