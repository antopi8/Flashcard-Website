import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createDeck } from '../../utils/api/index'

function CreateDeck() {
  const initialState = { name: '', description: '' }
  const [formData, setFormData] = useState(initialState)
  const history = useHistory()

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const deckNum = await createDeck(formData)
    console.log(deckNum)
    history.push(`/decks/${deckNum.id}`)
  }
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
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            type='text'
            className='form-control'
            value={formData.name}
            placeholder='Deck Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            style={{ resize: 'none' }}
            rows='5'
            className='form-control'
            value={formData.description}
            placeholder='Brief description of the deck'
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <Link to='/'>
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

export default CreateDeck;