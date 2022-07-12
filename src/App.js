import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

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
    <div className="app">
      <form onSubmit={handleCreateLink} className='form'>
        <input type='text' placeholder='Enter Link' className='text-input' />
        <button type='submit' className='submit-input' >Generate</button>
      </form>
      <div className='result-shortUrl'>{shortUrl}jjjj</div>
    </div>
  );
}

export default App;
