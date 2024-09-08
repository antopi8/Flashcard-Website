import React from 'react'
import { deleteCard } from '../../utils/api/index'
import { Link, useRouteMatch } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function DeckCard({ id, front, back, updateCards }) {
  const { url } = useRouteMatch()
  const handleDelete = async () => {
    const toDelete = window.confirm(
      'Delete this card? \n \n \n You will not be able to recover it.'
    )
    if (toDelete) {
      await deleteCard(id)
      updateCards(-1) //to re-render the carlist on the deck page
    }
  }
  return (
    <div>
      <div className='card' style={{ width: '40rem' }}>
        <div className='card-body'>
          <div className='d-flex justify-content-between'>
            <p className='card-text w-50'>{front}</p>
            <p className='card-text w-50'>{back}</p>
          </div>
          <div className='d-flex justify-content-end'>
            <Link to={`${url}/cards/${id}/edit`}>
              <button className='btn btn-secondary mr-2'>
                <i className='bi bi-pencil-fill'></i> Edit
              </button>
            </Link>
            <button className='btn btn-danger' onClick={handleDelete}>
              <i className='bi bi-trash'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

DeckCard.propTypes = {
  id: PropTypes.number,
  front: PropTypes.string,
  back: PropTypes.string,
  updateCards: PropTypes.func,
}

export default DeckCard;