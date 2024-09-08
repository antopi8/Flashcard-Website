import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { readDeck, deleteDeck } from '../../utils/api/index'
import DeckCard from './DeckCard'
import { PropTypes } from 'prop-types'

function Deck({ updateDecks }) {
  const [deck, setDeck] = useState({})
  const [numOfCards, setNumOfCards] = useState(0)
  const { deckId } = useParams()
  const history = useHistory()

  const handleDelete = async () => {
    const toDelete = window.confirm(
      'Delete this deck? \n \n \n You will not be able to recover it.'
    )
    if (toDelete) {
      await deleteDeck(deck.id)
      updateDecks(-1) // to re-render the decklist on the home page
      history.push('/')
    }
  }

  const updateCards = val => {
    setNumOfCards(() => numOfCards + val)
  }
  // initalize the deck using params
  useEffect(() => {
    const abortController = new AbortController()
    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal)
      setDeck(() => loadedDeck)
    }
    loadDeck()
    return () => abortController.abort()
  }, [numOfCards, deckId])

  if (deck.id) {
    return (
      <div>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item text-primary'>
              <Link to='/'>
                <i className='bi bi-house-door-fill'></i> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {deck.name}
            </li>
          </ol>
        </nav>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className='d-flex justify-content-between'>
          <div>
            <Link to={`/decks/${deck.id}/edit`}>
              <button className='btn btn-secondary'>
                <i className='bi bi-pencil-fill'></i> Edit
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button className='btn btn-primary mx-2'>
                <i className='bi bi-journal-bookmark'></i> Study
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/cards/new`}>
              <button className='btn btn-secondary'>
                <i className='bi bi-plus'></i> Add Cards
              </button>
            </Link>
          </div>
          <button className='btn btn-danger'>
            <i className='bi bi-trash' onClick={handleDelete}></i>
          </button>
        </div>
        <h2 className='mt-3 mb-2'>Cards</h2>
        <div className='mb-3'>
          {/* Loop through the decks cards to display them */}
          {deck.cards.map(card => (
            <DeckCard
              key={card.id}
              id={card.id}
              front={card.front}
              back={card.back}
              updateCards={updateCards}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

Deck.propTypes = {
  updateDecks: PropTypes.func,
}

export default Deck;