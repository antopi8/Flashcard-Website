import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { updateCard, readDeck, readCard } from '../../utils/api/index'

function EditCard() {
  const initialState = { front: '', back: '' }
  const [formData, setFormData] = useState(initialState)
  const [deck, setDeck] = useState({})
  const [card, setCard] = useState({})
  const history = useHistory()
  const { deckId, cardId } = useParams()

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    await updateCard(formData)
    history.push(`/decks/${deckId}`)
  }
  // initalize the deck and card using params
  useEffect(() => {
    const abortController = new AbortController()
    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal)
      const loadedCard = await readCard(cardId)
      setDeck(() => loadedDeck)
      setCard(() => loadedCard)
      setFormData({
        id: cardId,
        front: loadedCard.front,
        back: loadedCard.back,
        deckId: Number(deckId),
      })
    }
    loadDeck()
    return () => abortController.abort()
  }, [deckId, cardId])

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
            <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Edit Card {card.id}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
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
            <button className='btn btn-secondary mr-2'>Cancel</button>
          </Link>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCard;