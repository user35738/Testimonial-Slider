# ✨ Testimonial Slider

A modern, animated testimonial slider built with **HTML, CSS and vanilla JavaScript**. It has a frosted-glass card, an avatar switcher with a progress ring, and smooth transitions. No frameworks or libraries are needed.

## 🚀 Demo

> Add a screenshot or a live demo link here, for example:
> `https://user35738.github.io/testimonial-slider`

## 🎯 Features

| Feature | Description |
|---|---|
| Glassmorphism card | Frosted-glass card over softly drifting colour blobs |
| Avatar switcher | Click any avatar to jump to that testimonial |
| Progress ring | A ring around the active avatar shows the time left before the next slide |
| Autoplay | Testimonials change automatically every 7 seconds |
| Pause on hover | Autoplay and the ring pause while the mouse is over the card, then resume |
| Smooth transitions | Text fades, blurs and slides when changing testimonials |
| Navigation | Arrow buttons, left/right keyboard keys, and swipe on touch devices |
| Dark mode | Follows the device's light or dark setting |
| Responsive | Works on desktop, tablet and mobile |
| Accessible | Keyboard focus styles, ARIA labels, and reduced-motion support |

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Layout, glass effect, animations, dark mode |
| JavaScript (ES6) | Slider logic, autoplay, events |
| Google Fonts | Instrument Serif and Bricolage Grotesque |

## 📁 Project Structure

| File | Purpose |
|---|---|
| `index.html` | Page markup |
| `style.css` | All styling and animations |
| `index.js` | Testimonial data and slider behaviour |

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/user35738/testimonial-slider.git
   ```
2. **Open the project folder**
   ```bash
   cd testimonial-slider
   ```
3. **Run it** by opening `index.html` in your browser. No build step or installation is required.

## ⚙️ Customisation

| What you want to change | Where | How |
|---|---|---|
| Add or edit testimonials | `index.js` | Edit the `testimonials` array (`name`, `role`, `photoUrl`, `text`) |
| Autoplay speed | `index.js` | Change `DURATION` (in milliseconds, e.g. `7000` = 7 seconds) |
| Colours | `style.css` | Edit the variables at the top (`--accent`, `--lilac`, `--mint`, etc.) |
| Fonts | `index.html` and `style.css` | Change the Google Fonts link and the `font-family` values |



## ⌨️ Controls

| Action | Desktop | Mobile |
|---|---|---|
| Next testimonial | `→` key or `›` button | Swipe left |
| Previous testimonial | `←` key or `‹` button | Swipe right |
| Jump to a testimonial | Click an avatar | Tap an avatar |
| Pause autoplay | Hover over the card | - |

## 🌐 Browser Support

Works in the latest versions of Chrome, Edge, Firefox and Safari.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Author

Made by **Karen**: [GitHub](https://github.com/user35738)
