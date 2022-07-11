import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [shortUrl, setShortUrl] = useState('')

  const handleCreateLink = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'long_url': e.target[0].value, "domain": "bit.ly" })
    })
      .then(res => res.json())
      .then(data => {
        setShortUrl(data.link)
      })
  }

  return (
    <div className="App">
      <form onSubmit={handleCreateLink} >
        <input placeholder='Enter Long Link' />
        <input type='submit' value='Generate' />
      </form>
      <p>{shortUrl}</p>
    </div>
  );
}

export default App;
