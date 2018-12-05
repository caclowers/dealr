import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SubmitPopup from './SubmitPopup';

const MySwal = withReactContent(swal);
 let scraperjs = require('scraperjs');
  scraperjs.StaticScraper.create('https://news.ycombinator.com/')
      .scrape(function($) {
          return $(".title a").map(function() {
              return $(this).text();
          }).get();
      })
      .then(function(news) {
          console.log(news);
      })

class App extends Component {

 

submit = (event) => {
    console.log('hi');
    event.preventDefault();
    MySwal.fire({
      html: <SubmitPopup />,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down">Close</i>',
      cancelButtonAriaLabel: 'Thumbs down',
    })
  
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h1>$DEALR</h1>
        <form>
          <input placeholder="save money on..."
          style={{width:250}}>
          </input>
          <button onClick={this.submit}>search</button>
        </form>
        </header>
        
      </div>
    );
  }
}

export default App;
