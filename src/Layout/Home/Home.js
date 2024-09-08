import React, { useState, useEffect } from 'react'
import DeckList from './DeckList'
import { Link } from 'react-router-dom'
import { listDecks } from '../../utils/api/index'
import { PropTypes } from 'prop-types'

function Home({ numOfDecks, updateDecks }) {
  const [decks, setDecks] = useState([])

  // initalize all decks to show
  useEffect(() => {
    const abortController = new AbortController()
    const loadDecks = async () => {
      const deck = await listDecks(abortController.signal)
      setDecks(() => deck)
    }
    loadDecks()
    return () => abortController.abort()
  }, [numOfDecks])

  return (
    <div className='NotFound'>
      <Link to='/decks/new'>
        <button className='btn btn-secondary btn-lg mb-3'>
          <i className='bi bi-plus'></i> Create Deck
        </button>
      </Link>
      {/* loop through decks and displays them */}
      {decks.map(({ id, name, description, cards }) => (
        <DeckList
          key={id}
          id={id}
          description={description}
          cards={cards}
          name={name}
          updateDecks={updateDecks}
        />
      ))}
    </div>
  )
}

Home.propTypes = {
  numOfDecks: PropTypes.number,
  updateDecks: PropTypes.func,
}

export default Home;