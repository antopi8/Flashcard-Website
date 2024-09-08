import React from 'react'
import { PropTypes } from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { deleteDeck } from '../../utils/api/index'

function DeckList({ id, name, description, cards, updateDecks }) {
  const history = useHistory()

  const handleDelete = async () => {
    const toDelete = window.confirm(
      'Delete this deck? \n \n \n You will not be able to recover it.'
    )
    if (toDelete) {
      await deleteDeck(id)
      updateDecks(-1) // to re-render decklist on home page
      history.push('/')
    }
  }
  return (
    <div className='card' style={{ width: '40rem' }}>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>{name}</h5>
          <p>{cards.length} cards</p>
        </div>
        <p className='card-text'>{description}</p>
        <div className='d-flex justify-content-between'>
          <div>
            <Link to={`/decks/${id}`}>
              <button className='btn btn-secondary m-1'>
              <i className="bi bi-eye"></i> View
              </button>
            </Link>
            <Link to={`/decks/${id}/study`}>
              <button className='btn btn-primary'>
                <i className='bi bi-journal-bookmark'></i> Study
              </button>
            </Link>
          </div>
          <button className='btn btn-danger' onClick={handleDelete}>
            {' '}
            <i className='bi bi-trash'> </i>
          </button>
        </div>
      </div>
    </div>
  )
}

DeckList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  cards: PropTypes.array,
  updateDecks: PropTypes.func,
}

export default DeckList