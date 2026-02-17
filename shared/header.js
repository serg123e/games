/**
 * Game Header Component
 * Include this file in your game HTML to add navigation and back button
 * Usage: Add <script src="../shared/header.js"></script> in your HTML
 */

(function() {
    'use strict';

    // Create and inject the header when DOM is loaded
    function createHeader() {
        const header = document.createElement('header');
        header.className = 'game-header';
        
        // Create back button
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '← Back to Games';
        backButton.onclick = function() {
            // Navigate to root index.html - works with subdirectories and GitHub Pages
            const pathParts = window.location.pathname.split('/').filter(Boolean);
            const depth = pathParts.length - 1; // Subtract 1 for index.html
            const backPath = depth > 0 ? '../'.repeat(depth) + 'index.html' : './index.html';
            window.location.href = backPath;
        };
        
        // Create title
        const title = document.createElement('h1');
        title.className = 'game-title';
        title.textContent = document.title || 'Game';
        
        // Assemble header
        header.appendChild(backButton);
        header.appendChild(title);
        
        // Insert at the beginning of body
        document.body.insertBefore(header, document.body.firstChild);
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createHeader);
    } else {
        createHeader();
    }
})();
