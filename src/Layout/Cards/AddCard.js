import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { createCard, readDeck } from '../../utils/api/index'

function AddCard() {
  const initialState = { front: '', back: '' }
  const [formData, setFormData] = useState(initialState)
  const [deck, setDeck] = useState({})
  const { deckId } = useParams()

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = async event => {
    event.preventDefault()
    await createCard(deckId, formData)
    setFormData(initialState)
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
  }, [deckId])

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
            Add Card
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: AddCard</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='front'>
            <h4>Front</h4>
          </label>
          <textarea
            name='front'
            style={{ resize: 'none' }}
            rows='3'
            className='form-control'
            value={formData.front}
            placeholder='Front side of card'
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='back'>
            <h4>Back</h4>
          </label>
          <textarea
            name='back'
            style={{ resize: 'none' }}
            rows='3'
            className='form-control'
            value={formData.back}
            placeholder='Back side of card'
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <Link to={`/decks/${deckId}`}>
            <button className='btn btn-secondary mr-2'>Done</button>
          </Link>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCard;