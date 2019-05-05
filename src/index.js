import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import jsonp from 'jsonp';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      name: 'React',
      playSong: null

    };
  }

  searchHandler = (evt) => {

    this.searchQuery(evt.target.value);

  }

  searchQuery = (query) => {
    const queryUrl = 'https://itunes.apple.com/search?media=music&limit=20&term=' + query;
    jsonp(queryUrl, null, (err, data) => {
      if (err) {
        return (<div>Sorry something went wrong!</div>);
      } else {
        this.setState({ songs: data.results });
      }
    });
  }

  selectSong = (song) => {
    this.setState({ playSong: song });
  }

  hearSong = () => {
    if (this.state.playSong) {
      return (<div>
        <ReactAudioPlayer
          src={this.state.playSong.previewUrl}
          autoPlay
          controls
        />
      </div>
      );
    }
  }
  render() {
    const songs = this.state.songs.map(song =>
      <div onClick={this.selectSong.bind(this, song)} style={{ width: '250px', height: '350px', margin: '10px', background: '#F78DA7', textAlign: "center", display: "inline-block", border: "1px solid black" }}><p>Song: {song.trackName}</p>
        <img src={song.artworkUrl100} alt="Album cover" />
        <p>Artist: {song.artistName}</p>
        <p>Album: {song.collectionName}</p>
      </div>);
    return (

      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", background: "#bf4d69", color: "white" }}>Sing-a-long</h1>

        {this.hearSong()}

        <div>
          <input style={{ width: "400px", height: "80px", borderRadius: "20px", border: "1px solid black", fontSize: " 24px", textAlign: "center" }} type="text" onChange={this.searchHandler} placeholder="Pick a song, singer or album"
          />
        </div>

        <div>
          <p style={{ fontSize: "20px" }}>Click on any block to hear a short bit!</p>
        </div>
        {songs}
      </div>


    );
  }
}

render(<App />, document.getElementById('root'));
