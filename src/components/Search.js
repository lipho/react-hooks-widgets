import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

const WIKIPEDIA = 'https://en.wikipedia.org'
const WIKIPEDIA_API_URL = `${WIKIPEDIA}/w/api.php`;
const PARAMS = {
  action: 'query',
  list: 'search',
  origin: '*',
  format: 'json',
};

function Search(props) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const renderedResults = results.map(r => {
    return (
      <div className='item' key={r.pageid}>
        <div className='right floated content'>
          <a className='ui button' href={`${WIKIPEDIA}?curid=${r.pageid}`}>Go</a>
        </div>
        <div className='content'>
          <div className='header'>{r.title}</div>
          <span dangerouslySetInnerHTML={{__html: r.snippet}} />
        </div>
      </div>
    )
  });


  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get(WIKIPEDIA_API_URL, {
        params: {...PARAMS, srsearch: term}
      });
      setResults(data.query.search);
    }

    const timer = setTimeout(async () => {
      if (term) {
        await search();
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }

  }, [term]);

  return (
    <Fragment>
      <div className='ui container'>
        <form className='ui form' onSubmit={e => e.preventDefault()}>
          <div className='field'>
            <label>
              Enter Search Term
            </label>
            <input className='input' value={term} onChange={e => setTerm(e.target.value)}/>
          </div>
        </form>
        <div className='ui celled list'>
          {renderedResults}
        </div>
      </div>
    </Fragment>
  );
}


export default Search
