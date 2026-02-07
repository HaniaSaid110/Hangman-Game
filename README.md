# Hangman Game

A modern, visually engaging Hangman game built with Vanilla JavaScript, HTML5, and CSS3. Test your vocabulary across different categories and save the hangman from his fate!

## 🎮 Features

- **Categorized Words**: Choose from various categories like Animals, Cities, Plants, and Movies.
- **Dynamic Hangman Drawing**: Watch the hangman appear part-by-part with every incorrect guess using SVG.
- **Attempt Tracking**: Real-time counter showing remaining lives.
- **Interactive Keyboard**: On-screen alphabet for easy interaction.
- **Premium Aesthetics**:
  - Smooth Glassmorphism effects.
  - Responsive design for all screen sizes.
  - Custom CSS variables for easy theme management.
- **Win/Loss Feedback**: Custom modal popups showing the result and the correct word.
- **Play Again**: Quickly restart the game with a new random word and category.

## 🚀 Technologies Used

- **HTML5**: Semantic structure and SVG for the hangman drawing.
- **CSS3**: Modern layout techniques (Flexbox), custom properties (Variables), and smooth transitions.
- **JavaScript (ES6)**: Dom manipulation, event delegation, and game logic.

## 🛠️ How to Play

1. **Open the Game**: Simply open `index.html` in your favorite web browser.
2. **Guess Letters**: Click on the letters on the screen to guess the secret word.
3. **Save the Man**:
   - Every correct guess reveals a letter in the word.
   - Every incorrect guess draws a part of the hangman and decreases your remaining attempts.
4. **Win**: Reveal all letters before your attempts run out!
5. **Lose**: If you run out of attempts, the game ends, and the correct word is revealed in a popup.

## 📂 Project Structure

```text
hangman/
├── css/
│   └── style.css      # Modern styling and animations
├── js/
│   └── script.js     # Core game logic and interactivity
├── index.html        # Main game structure
└── README.md         # Project documentation
```

## 🎨 Design System

The game uses a curated color palette:

- **Primary**: Indigo (#6366f1)
- **Secondary**: Violet (#8b5cf6)
- **Success**: Emerald (#10b981)
- **Danger**: Red (#ef4444)
