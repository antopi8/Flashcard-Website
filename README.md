# Flashcard Web App
A flashcards web application where users can create decks of cards and add individual cards with questions and answers. Users can study the cards by flipping through them, as well as edit or delete individual cards as needed.

## 👀 Preview

<strong>Home</strong><br />
The Home screen is displayed at `/`<br />
- The `create deck` button brings the user to a new page to create a fresh deck.<br />
- Existing decks are displayed with the deck name, the number of cards, and a `study`, `view`, and `delete` button.<br />
- The `study` button brings the user to the Study screen.<br />
- The `edit` button brings the user to the Edit Deck screen.<br />
- The `delete` button shows a warning message before deleting the deck.<br />

<img width="700" alt="home" src="https://user-images.githubusercontent.com/87205105/145650935-b85ce5f1-ab59-4118-bb49-345cb163cd0f.png">

<strong>Delete Deck Prompt</strong><br />
When the user clicks the `delete` button, the user is prompted to confirm the deletion before it is no longer visible on the Home Screen.<br />
<img width="700" alt="delete" src="https://user-images.githubusercontent.com/87205105/145650961-c1e7d3a6-e14c-4e58-b15c-232dd0833789.png">

<strong>Study page</strong><br />
The Study screen is displayed at `/decks/:deckId/study`.<br />

- A breadcrumb navigation bar is implemented.<br />
- Cards are shown one at a time, with the front of the flashcard with a question or problem and a `flip `it to present the answer.<br />
- After flipping the card, a `next` button will display to continue to the next card.<br />
- After the final card in the deck has been shown, a message is prompted to the user to restart the deck.<br />
- If the user does not restart the deck, clicking `cancel` will return the user to the home screen.<br />
- Studying a deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.<br />


<img width="700" alt="study" src="https://user-images.githubusercontent.com/87205105/145651063-7659a0af-6e22-4cb0-ab8c-f2b105200d52.png">>

<strong>Create Deck</strong><br />
The Home screen has a create deck button that brings the user to the Create Deck page at `/decks/new`<br />

- A breadcrumb navigation bar is implemented.<br />
- A form is shown with the appropriate fields for creating a new deck.<br />
- If the user clicks `submit`, the user is taken to the Deck screen.<br />
- If the user clicks `cancel`, the user is taken to the Home screen. <br />

<img width="700" alt="create" src="https://user-images.githubusercontent.com/87205105/145651078-057b93ce-2d60-4d38-81a9-67c744b7f8f8.png">

<strong>Deck</strong><br />
The Deck screen displays all of the information about a deck at `/decks/:deckId`<br />

- A breadcrumb navigation bar is implemented.<br />
- The deck name and description is displayed along with the list of cards within the selected deck.<br />
- The screen includes `edit`, `study`, `add cards`, and `delete` buttons. <br />

<img width="700" alt="decks" src="https://user-images.githubusercontent.com/87205105/145651109-e62ff1eb-9f3e-41f9-b1a0-03ee6d1af24d.png">

<strong>Delete Card Prompt</strong><br />
When the user clicks the `delete` button, the user is prompted to confirm the card deletion. <br />
<img width="700" alt="delete card" src="https://user-images.githubusercontent.com/87205105/145651133-74b940ef-1258-49fb-964a-189191b81718.png">

<strong>Edit Deck</strong><br />
The Edit Deck screen allows the user to modify information on an existing deck at `/decks/:deckId/edit`<br />

- A breadcrumb navigation bar is implemented.<br />
- It displays the same form as the Create Deck screen, with pre-filled with information to update the existing deck.<br />
- If the user clicks `cancel`, the user is taken to the Deck screen.<br />

<img width="700" alt="edit deck" src="https://user-images.githubusercontent.com/87205105/145651150-7d479a39-11be-4292-aae9-ed7640e3fd70.png">

<strong>Add Card</strong><br />
The Add Card screen allows the user to add a new card to an existing deck at `/decks/:deckId/cards/new`<br />

- A breadcrumb navigation bar is implemented.<br />
- A form is shown with the "front" and "back" fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple lines of text.<br />
- If the user clicks `save` , a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.<br />
- If the user clicks `done` , the user is taken to the Deck screen.<br />

<img width="700" alt="add card" src="https://user-images.githubusercontent.com/87205105/145651175-606423d8-d0fe-45d3-bccd-5f5c3b27d3ab.png">
  
 <strong>Edit Card</strong><br />
The Edit Card screen allows the user to modify information on an existing card at `decks/:deckId/cards/:cardId/edit`<br />

- A breadcrumb navigation bar is implemented.<br />
- It displays the same form as the Add Card screen, except it is pre-filled with information to update the existing card.<br />
- If the user clicks on either `save` or `cancel` , the user is taken to the Deck screen.<br />

<img width="700" alt="edit card" src="https://user-images.githubusercontent.com/87205105/145651201-3d7ac223-a9dd-4360-a3b3-e823dc9595a3.png">


Live Demo Pending


## ✍️ Programming Languages
HTML, CSS, Javascript, Bootstrap,and React

## 🔧Installation

- Run `npm install` to install the dependencies needed for this project.
- Run `npm start`

## 🧱 Additional Notes

N/A

## ⚒️ Contribution

Created React frontend with bootstrap and created components logic and backend

## 😄 License
[MIT](https://choosealicense.com/licenses/mit/)
