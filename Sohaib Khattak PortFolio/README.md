# Sohaib Khattak - Professional Portfolio

A modern, responsive professional portfolio website showcasing skills, experience, projects, and a video showreel.

## 📁 Project Structure

```
Sohaib Khattak PortFolio/
├── index.html                          # Main HTML file
├── styles.css                          # CSS styling
├── script.js                           # JavaScript functionality
├── README.md                           # This file
├── WhatsApp Image 2026-01-02...jpeg   # Profile headshot
├── grok-image-5ef61300...png          # Office photo
├── scene 1.mp4                         # Video scene 1
├── scene(2).mp4                        # Video scene 2
├── scene 3.mp4                         # Video scene 3
├── scene 4.mp4                         # Video scene 4
├── scene 5.mp4                         # Video scene 5
├── scene 6.mp4                         # Video scene 6
└── scene 7.mp4                         # Video scene 7
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. Simply double-click on `index.html`
2. The portfolio will open in your default web browser

### Option 2: Use a Local Server (Recommended)
1. Open terminal/command prompt in this folder
2. Run one of these commands:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. Open your browser and go to `http://localhost:8000`

## 🎬 Video Showreel Features

The portfolio includes an integrated video showreel section with:

- **Individual Scene Selection**: Click on any scene thumbnail (1-7) to play that specific scene
- **Play All Continuously**: Click "Play All Scenes Continuously" to watch all scenes in sequence (1→2→3→4→5→6→7)
- **Video Controls**: Play/Pause, Stop, and Volume control
- **Scene Progress**: Real-time progress indicator showing current scene and timestamp

### Scene Order
The scenes play in this order:
1. Scene 1 (`scene 1.mp4`)
2. Scene 2 (`scene(2).mp4`)
3. Scene 3 (`scene 3.mp4`)
4. Scene 4 (`scene 4.mp4`)
5. Scene 5 (`scene 5.mp4`)
6. Scene 6 (`scene 6.mp4`)
7. Scene 7 (`scene 7.mp4`)

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Sections Included**:
  - Hero (Home)
  - About Me
  - Technical Skills
  - Experience & Projects
  - Featured Projects
  - Professional Showreel
  - Contact Form
  - Footer

## 🛠️ Customization

### Update Contact Information
Edit `index.html` and replace:
- `sohaib@example.com` with your actual email
- Social media links if needed

### Add More Projects
In `index.html`, duplicate a `.project-card` div and update:
- Project title
- Description
- Tags
- GitHub link

### Update Skills
In `index.html`, modify the `.skill-tag` spans in the Skills section

### Change Colors
Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #2563eb;  /* Main blue */
    --secondary-color: #0f172a; /* Dark navy */
    --accent-color: #3b82f6;   /* Light blue */
}
```

## 📱 Browser Compatibility

Tested and works on:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

This portfolio is created for Sohaib Khattak's personal use.

## 🔗 Links

- **GitHub**: https://github.com/Sohaib-Khattak
- **LinkedIn**: https://www.linkedin.com/in/sohaib-khattak-b50497304/

---

**Created with ❤️ for Sohaib Khattak**
