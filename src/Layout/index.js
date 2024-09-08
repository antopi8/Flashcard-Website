import React, { useState } from 'react'
import Header from './Header'
import NotFound from './NotFound'
import Home from './Home/Home'
import CreateDeck from './Home/CreateDeck'
import Study from './Deck/Study'
import Deck from './Deck/Deck'
import { Switch, Route } from 'react-router-dom'
import EditDeck from './Deck/EditDeck'
import AddCard from './Cards/AddCard'
import EditCard from './Cards/EditCard'

function Layout() {
  const [numOfDecks, setNumOfDecks] = useState(0)
  const updateDecks = val => {
    //used to re-render decklist on home page properly
    setNumOfDecks(() => numOfDecks + val)
  }
  
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' exact={true}>
            <Home numOfDecks={numOfDecks} updateDecks={updateDecks} />
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>
          <Route path='/decks/:deckId' exact={true}>
            <Deck updateDecks={updateDecks} />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <div className='container'></div>
      </div>
    </>
  )
}

export default Layout;
