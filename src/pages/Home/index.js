import React from 'react';
import axios from 'axios';
import LineChart from 'components/LineChart';

class Home extends React.Component {
  state = {
    bitcoinCurrent: null,
    bitcoinHistory: null
  }
  
  getCoinBaseData = async () => {
    try {
      const {data} = await axios('https://api.coindesk.com/v1/bpi/currentprice.json');
      this.setState({ bitcoinCurrent: data });
    } catch (err) {
      console.log("API bitcoinCurrent Fetch Error");
    }
    try {
      const {data} = await axios('https://api.coindesk.com/v1/bpi/historical/close.json');
      this.setState({ bitcoinHistory: data });
    } catch (err) {
      console.log("API bitcoinHistory Fetch Error");
    }

  }
  
  componentDidMount() {
    this.getCoinBaseData();
  }

    render() {
      const bitcoinCurrent = this.state.bitcoinCurrent;
      const bitcoinHistory = this.state.bitcoinHistory;      
    return (
      <>
      <h2> This is the homepage... </h2>
      {bitcoinCurrent && (        
        <div>
          <h1>1 Bitcoin Equals</h1>
          <h2>Time: {bitcoinCurrent.time.updated}</h2>
          <ul>
        {Object.keys(bitcoinCurrent.bpi).map(currency => {
            return <li key={currency + '123'}>{bitcoinCurrent.bpi[currency].code}: {bitcoinCurrent.bpi[currency].rate}</li>;
        })}
        </ul>
      </div>)}
      {bitcoinHistory && (        
        <div>
          <h1>Historic Prices</h1>
          <h2>Time: {bitcoinHistory.time.updated}</h2>
          
          <LineChart data={bitcoinHistory.bpi}/>
        
        
      </div>)}
      </>
      
    )
  }
}

export default Home;