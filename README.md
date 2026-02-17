# 🎮 Mini Games Collection

A collection of mini HTML5 + JavaScript games with a unified navigation structure.

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. Click on any game to play!

## 📁 Project Structure

```
games/
├── index.html              # Main landing page listing all games
├── shared/                 # Shared components for all games
│   ├── header.js          # Navigation header component
│   └── header.css         # Header styles
├── games/                 # Individual games directory
│   └── sample-game/       # Example game
│       └── index.html
└── README.md
```

## 🎯 Adding a New Game

1. **Create a new game directory** inside the `games/` folder:
   ```
   games/your-game-name/
   ```

2. **Create your game's `index.html`** with this template:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Game Name</title>
       
       <!-- Include shared header styles -->
       <link rel="stylesheet" href="../../shared/header.css">
       
       <style>
           /* Your game-specific styles here */
       </style>
   </head>
   <body>
       <!-- The header will be automatically injected here -->
       
       <div class="game-container">
           <!-- Your game content here -->
       </div>

       <!-- Include shared header script -->
       <script src="../../shared/header.js"></script>
       
       <!-- Your game logic here -->
       <script>
           // Your JavaScript code
       </script>
   </body>
   </html>
   ```

3. **Add your game to the landing page** (`index.html`):
   ```html
   <a href="games/your-game-name/index.html" class="game-card">
       <div class="game-icon">🎮</div>
       <h2>Your Game Name</h2>
       <p>Description of your game</p>
   </a>
   ```

## 🎨 Features

- **Automatic Navigation Header**: Every game gets a consistent header with a back button
- **Responsive Design**: Works on desktop and mobile devices
- **Easy to Use**: Just include two files in your game HTML
- **Consistent Styling**: Pre-styled header and container for a unified look

## 📝 Header Component

The header component (`shared/header.js`) automatically:
- Creates a fixed header at the top of the page
- Adds a "Back to Games" button that navigates to the main page
- Displays the game title from the page's `<title>` tag
- Provides consistent styling across all games

## 🛠️ Customization

You can customize the header styles by modifying `shared/header.css`. The file includes:
- Header styling with a modern, clean design
- Responsive breakpoints for mobile devices
- Optional `.game-container` class for consistent game content styling

## 📱 Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

Feel free to use this structure for your own game collections!

## 🤝 Contributing

1. Fork the repository
2. Create a new game in the `games/` directory
3. Add your game to the main `index.html`
4. Submit a pull request

Have fun creating games! 🎉