import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ lotData, setLotData ] = useState({
    small: { 
      lowest: { amount: 0, lots: [] },
      highest: { amount: 0, lots: [] },
    },
    medium: { 
      lowest: { amount: 0, lots: [] },
      highest: { amount: 0, lots: [] },
    },
    big: { 
      lowest: { amount: 0, lots: [] },
      highest: { amount: 0, lots: [] },
    },
    large: { 
      lowest: { amount: 0, lots: [] },
      highest: { amount: 0, lots: [] },
    }
  });
  useEffect(async () => {    
    await fetchData();

    // poll data every 60 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    // clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = async () => {
    const endpoint = 'http://localhost:8080/api/data';

    try {
      const response = await axios.get(endpoint);    
      if (response.data) {
        setLotData(response.data);
      }  
    } catch (error) {
      console.error(error);
    }    
  }
  
  return (
    <div className="container">      
      <h1>Lot Information</h1>
      <section>
        <h2>SMALL</h2>
        <table>
          <tbody>
            <tr>
              <th>Highest</th>
              <td className="highest">{lotData.small.highest.amount} lots available</td>
              <td>{lotData.small.highest.lots.join(', ')}</td>
            </tr>
            <tr>
              <th>Lowest</th>
              <td className="lowest">{lotData.small.lowest.amount} lots available</td>
              <td>{lotData.small.lowest.lots.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>MEDIUM</h2>
        <table>
          <tbody>
            <tr>
              <th>Highest</th>
              <td className="highest">{lotData.medium.highest.amount} lots available</td>
              <th>{lotData.medium.highest.lots.join(', ')}</th>
            </tr>
            <tr>
              <th>Lowest</th>
              <td className="lowest">{lotData.medium.lowest.amount} lots available</td>
              <td>{lotData.medium.lowest.lots.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>BIG</h2>
        <table>
          <tbody>
            <tr>
              <th>Highest</th>
              <td className="highest">{lotData.big.highest.amount} lots available</td>
              <th>{lotData.big.highest.lots.join(', ')}</th>
            </tr>
            <tr>
              <th>Lowest</th>
              <td className="lowest">{lotData.big.lowest.amount} lots available</td>
              <td>{lotData.big.lowest.lots.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>LARGE</h2>
        <table>
          <tbody>
            <tr>
              <th>Highest</th>
              <td className="highest">{lotData.large.highest.amount} lots available</td>
              <th>{lotData.large.highest.lots.join(', ')}</th>
            </tr>
            <tr>
              <th>Lowest</th>
              <td className="lowest">{lotData.large.highest.amount} lots available</td>
              <td>{lotData.large.highest.lots.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
