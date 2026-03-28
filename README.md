# Portfolio Website - HTML, CSS & JavaScript

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools—just clean, standalone code that you can customize and deploy anywhere.

## Features

✨ **Modern Design**
- Clean, minimalist aesthetic with professional styling
- Responsive design that works on all devices (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme (Navy + Teal + Off-white)

🖼️ **Image Management**
- Click any image placeholder to upload your own photos
- Drag-and-drop image upload support
- Images are saved locally using browser's localStorage
- Persistent storage—your images stay even after refresh

📝 **Contact Form**
- Fully functional contact form with validation
- Messages are saved locally to localStorage
- Export contact messages as CSV file
- Success/error notifications

🎨 **Customizable Sections**
- Hero section with profile photo
- About section with education and experience
- Projects showcase with 2 featured projects
- Skills section with progress bars
- Contact form and information
- Social media links

📱 **Responsive & Mobile-Friendly**
- Mobile menu toggle for navigation
- Touch-friendly buttons and interactions
- Optimized for all screen sizes
- Print-friendly styling

⚡ **Performance**
- No dependencies or external libraries
- Fast loading and smooth performance
- Optimized CSS and JavaScript
- Lazy loading support

## File Structure

```
portfolio-standalone/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## Getting Started

### 1. Open the Portfolio

Simply open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or double-click the `index.html` file in your file explorer.

### 2. Add Your Images

Click on any image placeholder to upload your own photos:
- **Profile Photo**: Click the circular profile image in the hero section
- **About Image**: Click the image in the About section
- **Project Screenshots**: Click the images in the Projects section

Images are automatically saved to your browser's local storage.

### 3. Customize Your Content

Edit `index.html` to customize:
- Your name and title
- About section text
- Project descriptions and links
- Skills and certifications
- Contact information
- Social media links

## Customization Guide

### Change Your Name & Title

Find this section in `index.html`:
```html
<h1 class="hero-title">Frontend Web Developer & Designer</h1>
<p class="hero-subtitle">Crafting responsive, modern web experiences...</p>
```

Replace with your own information.

### Update About Section

Find the about section and update:
```html
<h3>Frontend Web Developer & Designer</h3>
<p>I'm a passionate frontend developer...</p>
```

### Add Your Projects

Edit the project cards:
```html
<h3>Basket Chain Agro</h3>
<p>A comprehensive agricultural supply chain...</p>
<a href="#" class="project-link">View Project →</a>
```

### Update Skills

Modify the skill progress bars:
```html
<div class="skill-item">
    <span class="skill-name">HTML5</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
    </div>
</div>
```

Change the `width` percentage to match your skill level.

### Update Contact Information

Find the contact section and update:
```html
<p><a href="mailto:lucas@example.com">lucas@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00d4ff;      /* Teal accent */
    --secondary-color: #1a2332;    /* Navy blue */
    --background-color: #f8f9fa;   /* Off-white */
    --text-color: #1a2332;         /* Dark text */
    --text-light: #666666;         /* Light gray */
}
```

## Features Explained

### Image Upload System

- Click any image to open the upload dialog
- Drag and drop images or click to browse
- Supports all common image formats (JPG, PNG, GIF, WebP, etc.)
- Maximum file size: 5MB
- Images are saved in browser's localStorage

### Contact Form

- Fill in your name, email, and message
- Form validates all fields
- Messages are saved locally (not sent to a server)
- Export messages as CSV file using: `exportContactMessages()`
- Clear all data using: `clearAllData()`

### Local Storage

Your portfolio saves data locally in the browser:
- **Profile images**: Stored with keys like `profileImage`, `aboutImage`, etc.
- **Contact messages**: Stored as JSON array under `contactMessages`

To view saved data in browser console:
```javascript
localStorage.getItem('profileImage')
JSON.parse(localStorage.getItem('contactMessages'))
```

### Keyboard Shortcuts

- **E**: Edit profile image
- **Escape**: Close image upload modal
- **Ctrl+P**: Print portfolio

### Developer Console Commands

Open browser console (F12) and use these commands:

```javascript
// Export all contact messages as CSV
exportContactMessages()

// Clear all saved data
clearAllData()

// Print the portfolio
printPortfolio()

// View all contact messages
JSON.parse(localStorage.getItem('contactMessages'))
```

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all three files (index.html, styles.css, script.js)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and save
6. Your portfolio will be live at: `https://yourusername.github.io/portfolio-website`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"

### Option 4: Traditional Hosting

1. Upload all files to your web hosting
2. Access via your domain

### Option 5: Local File

Simply open `index.html` locally in your browser. Works offline!

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support (no localStorage for images)

## Tips & Best Practices

### Image Optimization

- Use compressed images for faster loading
- Recommended sizes:
  - Profile photo: 200x200px
  - About image: 300x300px
  - Project screenshots: 400x250px

### SEO Optimization

Update the meta tags in `<head>`:
```html
<meta name="description" content="Your professional description">
<meta name="author" content="Your Name">
<title>Your Name - Your Title</title>
```

### Social Media Links

Update the social links in the hero section:
```html
<a href="https://github.com/yourusername" class="social-link">
```

### Custom Domain

If deploying to GitHub Pages with a custom domain:
1. Create a `CNAME` file with your domain
2. Update DNS settings with your domain provider

## Troubleshooting

### Images Not Saving

- Check if localStorage is enabled in your browser
- Try clearing browser cache and cookies
- Use a different browser to test

### Form Not Sending

- This is a local portfolio—messages are saved locally, not sent to a server
- To send emails, you'll need to integrate a backend service like Formspree or EmailJS
- View saved messages with: `JSON.parse(localStorage.getItem('contactMessages'))`

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Ensure all files are in the same directory

### Mobile Menu Not Working

- Check JavaScript console for errors
- Ensure script.js is loaded
- Try refreshing the page

## Adding Email Functionality

To actually send emails from the contact form, integrate a service like:

### Option 1: Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your service ID and template ID
3. Add to script.js and update form handling

## File Size

- index.html: ~15 KB
- styles.css: ~25 KB
- script.js: ~20 KB
- **Total: ~60 KB** (without images)

Ultra-lightweight and fast!

## License

Free to use and modify for personal and commercial projects.

## Support & Questions

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Verify all three files are in the same directory
3. Try a different browser
4. Clear browser cache and cookies

## Version History

**v1.0** - Initial release
- Complete portfolio website
- Image upload with localStorage
- Contact form with validation
- Responsive design
- All sections customizable

## Credits

Built with ❤️ using pure HTML, CSS, and JavaScript.

---

**Ready to showcase your work?** Start by clicking on the profile image to add your photo, then customize the content to match your professional information!
