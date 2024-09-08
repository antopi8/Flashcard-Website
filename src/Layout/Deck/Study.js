import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { readDeck } from '../../utils/api/index'
import StudyCard from './StudyCard'

function Study() {
  const [deck, setDeck] = useState({})
  const { deckId } = useParams()

  // initalize the deck using params
  useEffect(() => {
    const loadDeck = async () => {
      const newDeck = await readDeck(deckId)
      setDeck(() => newDeck)
    }
    loadDeck()
  }, [deckId])

  if (Object.keys(deck).length) {
    return (
      <div>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item text-primary'>
              <Link to='/'>
                <i className='bi bi-house-door-fill'></i> Home
              </Link>
            </li>
            <li className='breadcrumb-item text-primary'>
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Study
            </li>
          </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
        <StudyCard cards={deck.cards} />
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default Study;