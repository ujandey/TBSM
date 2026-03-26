# TBSM4L

A dark, high-energy fan-made web music player inspired by Seedhe Maut.  
Built with plain HTML, CSS, and JavaScript, this project combines a bold visual style with a smooth in-browser listening experience.

## Why this project exists

This project is a creative tribute: a custom player UI for exploring tracks in a curated playlist, grouped by albums, with a clean intro-to-player flow and interactive controls.

## Features

- Animated intro screen with custom START button
- Album-based filtering sidebar (`All`, `N`, `Nayaab`, `Lunch Break`, `Shakti`, etc.)
- Dynamic playlist rendering from a JavaScript track list
- Audio controls: play/pause, previous/next, seek bar, volume slider
- Advanced playback modes: shuffle + repeat (`off` / `all` / `one`)
- Live time display (`currentTime` / `totalTime`)
- Track metadata updates (title, artist, album, artwork)
- Session memory with `localStorage` (remembers track, time, volume, shuffle, repeat, album)
- Keyboard shortcuts for power users
- Simulated live listener counter
- Social card with animated hover effects and links
- Mobile responsive layout for smaller screens

## Tech Stack

- `HTML5` for structure
- `CSS3` for styling, animations, and responsive behavior
- `Vanilla JavaScript` for player logic and rendering
- `Font Awesome` icons
- `Google Fonts` (`Montserrat`, `Roboto`)

## Project Structure

```text
TBSM/
├── index.html      # App markup
├── styles.css      # Theme, layout, effects
├── script.js       # Player behavior and playlist data
├── audio/          # Track files (mp3)
└── images/         # Logos, album art, and visuals
```

## Run Locally

1. Clone or download this project.
2. Open the `TBSM` folder.
3. Launch `index.html` in your browser.

That is it. No build tools, no framework setup.

## Customization

- **Add or remove songs:** edit the `playlist` array in `script.js`
- **Update branding/artwork:** replace files in `images/` and update paths
- **Tune the visual vibe:** tweak colors, shadows, and animations in `styles.css`
- **Adjust default behavior:** change initial volume, default album, or intro timing in `script.js`

## Keyboard Shortcuts

- `Space` - play / pause
- `Arrow Left` / `Arrow Right` - seek -5s / +5s
- `Arrow Up` / `Arrow Down` - volume +5 / -5
- `M` - mute / unmute (quick toggle)
- `N` / `B` - next / previous track
- `S` - toggle shuffle
- `R` - cycle repeat mode (`off` -> `all` -> `one`)

## Notes

- Audio file paths in `script.js` must match your local `audio/` directory.
- Browser autoplay rules can affect when audio starts; interaction through START is already in place to help with this.
- Playback progress is saved during listening and restored on the next visit after pressing START.

## Credits

Designed and developed by Ujan Dey.  
Made with love for Seedhe Maut listeners.

---

If you like this project, consider starring/forking it and making your own themed version.
