# Quick Start Guide - Portfolio Website

## 🚀 Get Started in 3 Steps

### Step 1: Extract Files
Unzip `portfolio-standalone.zip` and you'll have:
- `index.html` - Main portfolio page
- `styles.css` - All styling
- `script.js` - Interactivity
- `README.md` - Full documentation

### Step 2: Open in Browser
Double-click `index.html` to open your portfolio in your default browser.

That's it! Your portfolio is ready to use.

### Step 3: Customize

#### Add Your Photos
1. Click any image placeholder (profile photo, about image, project screenshots)
2. Drag and drop your image or click to browse
3. Images are automatically saved

#### Edit Your Content
Open `index.html` in a text editor and find these sections:

**Your Name & Title:**
```html
<h1 class="hero-title">Frontend Web Developer & Designer</h1>
```

**About Section:**
```html
<h3>Frontend Web Developer & Designer</h3>
<p>I'm a passionate frontend developer...</p>
```

**Projects:**
```html
<h3>Basket Chain Agro</h3>
<p>A comprehensive agricultural supply chain...</p>
```

**Contact Info:**
```html
<p><a href="mailto:lucas@example.com">lucas@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

**Social Links:**
```html
<a href="https://github.com/yourusername" class="social-link">
```

## 📋 What's Included

✅ **Complete Portfolio Website**
- Hero section with profile photo
- About section with education/experience
- Projects showcase (2 featured projects)
- Skills with progress bars
- Contact form with validation
- Responsive design (mobile, tablet, desktop)

✅ **Image Management**
- Click to upload photos
- Drag & drop support
- Images saved locally
- No server needed

✅ **Contact Form**
- Form validation
- Messages saved locally
- Export as CSV
- Success notifications

✅ **Professional Design**
- Modern, clean aesthetic
- Smooth animations
- Professional color scheme
- Mobile-friendly

## 🎨 Customize Colors

Edit the color variables in `styles.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Change this to your accent color */
    --secondary-color: #1a2332;    /* Change this to your text color */
    --background-color: #f8f9fa;   /* Change this to your background */
}
```

## 📱 Mobile Menu

The portfolio automatically shows a mobile menu on small screens. No configuration needed!

## 💾 Your Data

All images and contact messages are saved locally in your browser:
- Images: Stored as data URLs
- Messages: Stored as JSON
- No internet connection needed
- Data persists even after closing the browser

## 🌐 Deploy to the Web

### Free Option 1: GitHub Pages
1. Create a GitHub account
2. Create a new repository
3. Upload the 3 files
4. Enable GitHub Pages in settings
5. Your site is live!

### Free Option 2: Netlify
1. Go to netlify.com
2. Drag and drop your folder
3. Done! Your site is live

### Free Option 3: Vercel
1. Go to vercel.com
2. Import your GitHub repo
3. Deploy with one click

## 🔧 Keyboard Shortcuts

- **E** - Edit profile image
- **Escape** - Close image upload
- **Ctrl+P** - Print portfolio

## 💡 Tips

1. **Use high-quality images** - They'll look better on all devices
2. **Keep text concise** - Mobile users appreciate shorter content
3. **Update regularly** - Keep your portfolio fresh with new projects
4. **Test on mobile** - Open on your phone to see how it looks
5. **Share the link** - Once deployed, share your portfolio URL

## ❓ Common Questions

**Q: Can I add more sections?**
A: Yes! Copy any section and modify the HTML. Just make sure to add a corresponding CSS section.

**Q: Can I change the layout?**
A: Yes! Edit the CSS grid and flexbox properties in `styles.css`.

**Q: Can I add a blog section?**
A: Yes! Add a new section in HTML and style it with CSS.

**Q: Can the contact form send emails?**
A: Not by default (it saves locally). To send emails, integrate Formspree or EmailJS.

**Q: Can I use this commercially?**
A: Yes! This is free to use for personal and commercial projects.

## 🐛 Troubleshooting

**Images not saving?**
- Check if localStorage is enabled
- Try a different browser
- Clear browser cache

**Form not working?**
- Open browser console (F12)
- Check for error messages
- Refresh the page

**Styling looks wrong?**
- Clear browser cache
- Ensure all 3 files are in the same folder
- Try a different browser

## 📞 Need Help?

1. Check the full `README.md` for detailed documentation
2. Open browser console (F12) for error messages
3. Try the keyboard shortcut **E** to test image upload
4. View saved data: `JSON.parse(localStorage.getItem('contactMessages'))`

## ✨ You're All Set!

Your professional portfolio is ready to showcase your work. Start by:
1. Adding your profile photo
2. Updating your name and title
3. Customizing your projects
4. Deploying to the web

Good luck! 🚀
