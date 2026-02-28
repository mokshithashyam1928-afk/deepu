# 🎉 Beautiful Birthday Surprise Website 💖

A romantic, cute, and fully responsive multi-page birthday surprise website with animations, interactive elements, and customizable content!

---

## 📁 **FOLDER STRUCTURE**

```
Deepu/
├── index.html              (Landing page with typing animation)
├── unlock.html             (Password unlock page)
├── memories.html           (Photo timeline page)
├── quiz.html               (Fun quiz questions)
├── messages.html           (Friends' messages)
├── final.html              (Birthday cake surprise)
├── css/
│   └── style.css          (All styling and animations)
├── js/
│   └── script.js          (All interactivity and logic)
└── images/                (Folder for your photos)
    ├── memory1.jpg
    ├── memory2.jpg
    ├── memory3.jpg
    ├── memory4.jpg
    └── memory5.jpg
```

---

## 🚀 **HOW TO USE**

### **1. SETUP**
- Place all HTML files in the root directory
- Add your images to the `images/` folder
- Update image names in `memories.html` to match your files

### **2. OPEN THE WEBSITE**
- Double-click `index.html` to open in your browser
- OR right-click → Open With → Your Favorite Browser

### **3. CUSTOMIZE THE CONTENT**

---

## ⚙️ **CUSTOMIZATION GUIDE**

### **PASSWORD (Unlock Page)**
Edit `js/script.js` - Find this line:
```javascript
const CORRECT_PASSWORD = 'bestie'; // Change this to your custom password
```

**Change `'bestie'` to your custom password** (case-insensitive)

Example: `const CORRECT_PASSWORD = 'mylove';`

### **FRIEND MESSAGES**
Edit `js/script.js` - Find the `friendMessages` object:
```javascript
const friendMessages = {
    1: {
        name: 'Your Best Friend',
        message: 'Replace this with your friend\'s message...'
    },
    2: {
        name: 'Another Friend',
        message: 'Replace this with another message...'
    },
    // ... and so on
};
```

**How to edit:**
- Change the `name` field to the friend's name
- Change the `message` field to what they want to say
- Keep the numbers (1-5) the same
- Use `\n` for new lines if needed

### **PHOTO TIMELINE (Memories Page)**
In `memories.html`, find the timeline items and update:
1. **Image paths** - Change `src="images/memory1.jpg"` to your image path
2. **Captions** - Update the text in `<h3>` and `<p>` tags

Example:
```html
<div class="memory-image">
    <img src="images/your-photo.jpg" alt="My favorite memory">
</div>
<div class="memory-caption">
    <h3>Our First Trip</h3>
    <p>Best day ever! 💕</p>
</div>
```

### **LANDING PAGE TEXT**
In `index.html`, change:
```html
<span class="typing">Happy Birthday My Bestie 💖</span>
```

To your custom message:
```html
<span class="typing">Happy Birthday [Her Name] 💖</span>
```

Also update the subtitle:
```html
<p class="hero-subtitle">A special something just for you...</p>
```

### **FINAL MESSAGE (Cake Page)**
In `final.html`, find and update:
```html
<h2>Happy Birthday My Bestie! 💖</h2>
<p>I hope this year brings you endless joy, laughter, and magical moments.</p>
<p>You mean the world to me, and I'm grateful for every moment we share.</p>
<p class="signature">With all my love,<br>Your Friend Forever 💕</p>
```

### **COLORS & FONTS**
To change the color scheme, edit `css/style.css`:
- `#d946a6` = Main pink color
- `#9333ea` = Purple accent
- `#ffd6e8` = Light pink background

Replace with your preferred hex colors throughout.

---

## 📸 **ADDING IMAGES**

1. **Create Images Folder:**
   - Create a folder named `images` in the same directory as `index.html`

2. **Add Your Photos:**
   - Save your photos as: `memory1.jpg`, `memory2.jpg`, etc.
   - OR update the image names in `memories.html` to match your files

3. **Image Format:**
   - Supported: JPG, PNG, GIF, WebP
   - Recommended size: 600x600px or larger
   - Smaller files = faster loading

4. **Update HTML:**
   ```html
   <img src="images/your-image-name.jpg" alt="Description">
   ```

---

## 🎨 **FEATURES & PAGES**

### **1. Landing Page (index.html)**
- Animated typing text
- Falling hearts animation
- Beautiful gradient background
- Call-to-action button

### **2. Unlock Page (unlock.html)**
- Password input field
- Wrong password shake animation
- Confetti celebration on unlock
- Hint text for the password

### **3. Memory Timeline (memories.html)**
- Vertical timeline with photos
- Zoom effect on hover
- Custom captions for each memory
- Smooth animations

### **4. Quiz Page (quiz.html)**
- 3 fun questions about your relationship
- Interactive answer buttons
- Score tracking
- Celebration message at the end

### **5. Friends' Messages (messages.html)**
- 5 message cards
- Click to open messages in modal
- Beautiful envelope icons
- Smooth animations

### **6. Final Cake (final.html)**
- Interactive birthday cake
- Click to "blow out candles"
- Animated flames
- Final emotional message
- Confetti celebration

---

## 🎯 **FULL CUSTOMIZATION CHECKLIST**

- [ ] Change password in `js/script.js`
- [ ] Update all 5 friend messages in `js/script.js`
- [ ] Add 5 photos to `images/` folder
- [ ] Update image paths in `memories.html`
- [ ] Update memory captions in `memories.html`
- [ ] Change landing page title in `index.html`
- [ ] Update final message in `final.html`
- [ ] Test all buttons and links
- [ ] Share with your friend! 🎉

---

## 💡 **TIPS & TRICKS**

### **Change Background Color**
Edit the first gradient in `css/style.css`:
```css
background: linear-gradient(135deg, #ffd6e8 0%, #c9b1ff 50%, #fff9e6 100%);
```

Choose from: [Gradient Generator](https://gradientgenerator.com/)

### **Add More Messages**
In `js/script.js`, duplicate a message object:
```javascript
6: {
    name: 'Friend Name',
    message: 'Their message here...',
}
```

And add a new card in `messages.html`:
```html
<div class="message-card">
    <div class="envelope-icon">💌</div>
    <div class="message-header">
        <h3>Friend 6</h3>
        <p class="friend-name">Description</p>
    </div>
    <button class="open-message-btn" data-message="6">Open Message</button>
</div>
```

### **Change Fonts**
Update font family in `css/style.css`:
- Great Vibes → Google Fonts alternative
- Dancing Script → Another decorative font
- Quicksand → Any sans-serif font

### **Slow Down Animations**
In `css/style.css`, find any `animation:` property and change the duration:
```css
animation: fallDown 15s ease-in-out infinite;
/* Change 15s to 20s for slower, 10s for faster */
```

---

## 🐛 **TROUBLESHOOTING**

### **Images not showing?**
- Check the image path is correct
- Make sure image format is supported (jpg, png, gif)
- Verify the `images/` folder exists

### **Password not working?**
- Open `js/script.js`
- Find `const CORRECT_PASSWORD = 'bestie';`
- Check the spelling (case doesn't matter)
- Make sure you're typing exactly what you set

### **Messages not opening?**
- Check if modal HTML is present in `messages.html`
- Verify `data-message` numbers match in messages object
- Check browser console for errors (F12)

### **Animations not smooth?**
- Check browser compatibility (use Chrome/Firefox)
- Disable other browser extensions
- Clear browser cache (Ctrl+Shift+Delete)

---

## 🎓 **HOW EACH PAGE CONNECTS**

1. **index.html** → Click "Click to Begin" → Goes to **unlock.html**
2. **unlock.html** → Enter correct password → Confetti → Goes to **memories.html**
3. **memories.html** → Click "Next Surprise" → Goes to **quiz.html**
4. **quiz.html** → Answer all 3 questions → Shows result → Click button → Goes to **messages.html**
5. **messages.html** → Click message envelopes to read → Click "Final Surprise" → Goes to **final.html**
6. **final.html** → Click cake → Candles blow out → Final message appears

---

## 📱 **RESPONSIVE DESIGN**

✅ **Works on:**
- Desktop (1920px and above)
- Tablet (768px - 1200px)
- Mobile (480px - 768px)
- Small phones (320px - 480px)

All elements automatically scale and adjust!

---

## 🎨 **COLOR PALETTE**

- **Primary Pink**: `#d946a6`
- **Purple Accent**: `#9333ea`
- **Light Pink**: `#ffc0cb`
- **Background Peach**: `#fff9e6`
- **Gradient Base**: `#ffd6e8`

---

## ✨ **BONUS FEATURES**

- Typing animation on landing page
- Falling hearts background
- Confetti explosions on key moments
- Smooth page transitions
- Hover animations on all interactive elements
- Mobile-optimized touch targets
- Accessibility features
- No dependencies (pure HTML/CSS/JavaScript)

---

## 📝 **FILE EDITING GUIDE**

### **Safe to Edit:**
- ✅ HTML content and text
- ✅ Image paths
- ✅ Colors in CSS
- ✅ Animation timing
- ✅ JavaScript messages

### **Be Careful With:**
- ⚠️ HTML structure (don't delete important tags)
- ⚠️ CSS selectors (if you don't know CSS)
- ⚠️ JavaScript functions (if you don't know JavaScript)

---

## 🎁 **MAKE IT EVEN MORE SPECIAL**

Add these touches:
- ❤️ Use real photos from your memories
- 🎵 Add background music (links to Spotify/YouTube playlists)
- 🎨 Match the colors to her favorite colors
- 📝 Write heartfelt messages from different people
- 🎯 Add inside jokes in the final message

---

## 🔗 **RESOURCES**

- **Google Fonts**: https://fonts.google.com/
- **Color Picker**: https://htmlcolorcodes.com/
- **Image Converter**: https://convertio.co/
- **Emoji List**: https://unicode.org/emoji/charts/full-emoji-list.html

---

## 📧 **NEED HELP?**

- Check the console (Press F12, click Console tab)
- Read error messages carefully
- Try refreshing the page
- Clear browser cache
- Use a different browser
- Check file paths are exactly correct

---

## 🎉 **HAVE FUN!**

This website is designed to make someone special feel loved and appreciated. Customize every detail to make it perfect for her!

**Remember:** The most important part is the thought and effort you put in! 💕

---

**Made with ❤️ for special birthdays**

*Last Updated: February 2026*
