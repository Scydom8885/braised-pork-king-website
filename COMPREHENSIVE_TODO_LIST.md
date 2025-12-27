# Braised Pork King Website - Comprehensive TODO List

## 🚨 CRITICAL CONTEXT
- **Multiple Node.js processes are running** and interfering with file edits
- **CSS architecture has been consolidated** into single `styles.css` file
- **Mobile hamburger menu should now work** after CSS consolidation
- **Current blocking issue**: Fixed-width elements causing mobile responsiveness problems

---

## 📋 CURRENT TASK STATUS

### ✅ COMPLETED TASKS
1. **CSS Architecture Consolidation** ✅
   - Merged main.css, desktop.css, mobile.css, animations.css into single `styles.css`
   - Removed `!important` declarations using proper CSS specificity
   - Updated all EJS template files to reference `styles.css`
   - Deleted old CSS files (main.css, desktop.css, mobile.css, animations.css)

2. **Mobile Hamburger Menu Fix** ✅
   - Should now work after CSS consolidation resolved conflicts
   - JavaScript functionality is properly implemented in header.ejs

---

## 🔥 URGENT TASKS (CURRENT BLOCKERS)

### 3. **Fix Mobile Responsiveness Issues** ⚠️ IN PROGRESS
**PROBLEM**: Fixed-width inline styles causing mobile overflow and poor UX

**SPECIFIC FIXES NEEDED**:

#### A. Add Responsive Utility Classes to styles.css
Add this CSS before the "Print Styles" section (around line 941):

```css
/* ===========================
   RESPONSIVE UTILITY CLASSES
   =========================== */

/* Responsive Image Box */
.responsive-image-box {
    width: 100%;
    max-width: 350px;
    height: 250px;
    margin: 0 auto;
}

/* Large Image Box for About Page */
.responsive-image-box-large {
    width: 100%;
    max-width: 400px;
    height: 300px;
    margin: 0 auto;
}

/* Responsive Circle Icons */
.circle-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-lg);
    font-weight: 700;
    flex-shrink: 0;
}

/* Mobile Responsive Adjustments */
@media (max-width: 480px) {
    .responsive-image-box,
    .responsive-image-box-large {
        height: 200px;
        padding: 0 var(--space-4);
    }

    .circle-icon {
        width: 50px;
        height: 50px;
        font-size: var(--text-base);
    }
}

@media (min-width: 768px) {
    .circle-icon {
        width: 80px;
        height: 80px;
        font-size: var(--text-2xl);
    }
}
```

#### B. Fix Fixed-Width Elements in EJS Files

**home.ejs (line 190)** - Story/About Teaser Section:
CHANGE:
```html
<div style="width: 350px; height: 250px; background: linear-gradient(145deg, var(--primary), var(--golden-crown)); border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl); font-weight: 600; margin: 0 auto; box-shadow: 0 15px 35px rgba(0,0,0,0.2); position: relative;">
```
TO:
```html
<div class="responsive-image-box" style="background: linear-gradient(145deg, var(--primary), var(--golden-crown)); border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl); font-weight: 600; box-shadow: 0 15px 35px rgba(0,0,0,0.2); position: relative;">
```

**about.ejs (line 60)**:
CHANGE:
```html
<div style="width: 400px; height: 300px; background: linear-gradient(145deg, var(--primary), var(--primary-light)); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 15px 35px rgba(0,0,0,0.2); position: relative; color: white; text-align: center;">
```
TO:
```html
<div class="responsive-image-box-large" style="background: linear-gradient(145deg, var(--primary), var(--primary-light)); border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 15px 35px rgba(0,0,0,0.2); position: relative; color: white; text-align: center;">
```

#### C. Fix WhatsApp Float Mobile Responsiveness
- The `<div class="whatsapp-float">` is out of space on mobile
- Add responsive positioning in CSS

---

## 📝 PENDING TASKS (PRIORITY ORDER)

### 4. **Fix White Text on White Background Issues** 🎨 CRITICAL
**SPECIFIC ISSUE**:
```html
<p class="animate-slide-left animate-delay-1 revealed" style="font-size: var(--text-lg); line-height: 1.8; margin-bottom: var(--space-6); animation-play-state: running;">
    From a small family recipe passed down through generations to Malaysia's
    premier Taiwanese braised pork destination. Every bowl tells a story
    of tradition, quality, and authentic flavors.
</p>
```
**PROBLEM**: White font on white background - not readable
**ACTION**: Change text color to dark/charcoal for proper contrast

### 5. **Add FontAwesome for Social Media Icons** 📱
**CDN LINK**: https://fontawesome.com
**SOCIAL MEDIA LINKS**:
- **Facebook**: https://www.facebook.com/profile.php?id=61565867321549
- **Instagram**: https://www.instagram.com/t_braisedporkrice8/

**ACTIONS**:
- Add FontAwesome CDN to header
- Replace emoji icons with FontAwesome icons
- Add Facebook and Instagram links to header/footer
- User specifically dislikes "playful emojis" - replace all emoji icons

### 6. **Update Contact Information** 📞
**WhatsApp Numbers**:
- Current: 60128533050
- Additional: 018-888-8888, 012-853-3050
**Files**: Update .env file and any hardcoded numbers

### 7. **Add The Star Newspaper Link** 📰
**URL**: https://www.thestar.com.my/food/food-news/2024/07/18/local-spin-on-taiwanese-favourite
**Location**: About Us page
**Action**: Add credibility button/link to The Star newspaper article for authentic business validation

### 8. **Update Google Maps Integration** 🗺️
**ACTION**: Replace placeholder Google Maps src with real Braised Pork King stall address
**NOTE**: User said "I had already updated the address at footer.ejs" - check footer for the correct address

### 9. **Remove All Crown/Royal Branding** 👑 CRITICAL
**SCOPE**: Remove ALL crown references throughout website
**REASON**: User stated "Royal" is not suitable for their authentic stall
**FILES**: All EJS templates, CSS animations, logo references
**REPLACE WITH**: Authentic Taiwanese food-related branding

### 10. **Rewrite About Us Content** ✍️
**PROBLEM**: Current content doesn't represent real Braised Pork King stall
**REFERENCE**: Read `dev/braised-pork-king-website/refer` folder for authentic business details
**ACTION**: Replace placeholder content with real business story and background

### 11. **Fix Franchise Content** 📋 CRITICAL
**PROBLEMS**:
- "100% Success Rate" claim is unrealistic and risky
- Content doesn't match real business model
**REFERENCE**: Read `dev/braised-pork-king-website/refer` folder first
**ACTION**: User said "Don't fix anything yet" - analyze and propose realistic content first

### 12. **Implement Chinese Language Translation** 🌐
**ISSUE**: Language switcher exists but doesn't translate content
**PHASE 1**: Create functional language switching
**PHASE 2**: Add Chinese translations for all content

### 13. **Integrate Quick Contact Form** 📞
**ISSUE**: Quick Contact Form should be integrated inside `<div class="whatsapp-float">`, not shown separately
**ACTION**: Move contact form into floating WhatsApp button area

---

## 🏪 AUTHENTIC BUSINESS CONTEXT

### SEO Keywords for LRT/Location:
- LRT, Big Family, SS15, Subang
- Taiwanese braised pork, authentic cuisine
- Local food stall, traditional recipes

### Business Identity:
- **NOT Royal/Crown themed** - authentic family stall
- **Taiwanese heritage** - traditional recipes
- **Local Malaysia presence** - SS15 Subang area
- **Family business** - generational recipes

### User's Brand Preferences:
- ❌ No "playful emojis"
- ❌ No PlayFair Font
- ❌ No crown/royal references
- ✅ Authentic, professional appearance
- ✅ FontAwesome icons preferred
- ✅ Real business representation

---

## 🛠️ TECHNICAL NOTES FOR NEXT AGENT

### Important Links & Resources:
- **FontAwesome**: https://fontawesome.com
- **Facebook**: https://www.facebook.com/profile.php?id=61565867321549
- **Instagram**: https://www.instagram.com/t_braisedporkrice8/
- **The Star Article**: https://www.thestar.com.my/food/food-news/2024/07/18/local-spin-on-taiwanese-favourite
- **Business Details**: Read `dev/braised-pork-king-website/refer` folder

### File Structure:
```
C:/dev/braised-pork-king-website/
├── public/css/styles.css (consolidated CSS)
├── views/pages/ (home.ejs, about.ejs, franchise.ejs)
├── views/partials/header.ejs (navigation & mobile menu)
├── refer/ (authentic business details - READ FIRST!)
└── server.js (main server file)
```

### Current Issues:
1. **Multiple Node.js processes running** - may need to kill before editing files
2. **Nodemon file watching** - stop server before making changes
3. **Fixed-width elements** causing mobile overflow
4. **Text contrast issues** - white text on white backgrounds

### Testing Protocol:
1. Stop any running servers: `Ctrl+C` or kill Node processes
2. Make file changes
3. Start server: `npm start`
4. Test mobile responsiveness in browser dev tools
5. Verify contrast ratios and readability

### User's Explicit Instructions:
- **Read `refer` folder FIRST** before making content changes
- **Don't fix franchise content yet** - analyze and propose first
- **Replace ALL emojis** with FontAwesome icons
- **Remove ALL crown references**
- **Focus on authentic business representation**

---

## 🎯 SUCCESS CRITERIA

### Mobile Responsiveness:
- [ ] No horizontal scrolling on mobile devices
- [ ] All elements scale properly on screens 320px+
- [ ] WhatsApp float positioned correctly on mobile
- [ ] Touch targets are minimum 44px

### Content Authenticity:
- [ ] Real business information from `refer` folder
- [ ] No crown/royal references anywhere
- [ ] Professional, authentic tone
- [ ] Accurate contact information

### Social Media Integration:
- [ ] FontAwesome icons implemented
- [ ] Facebook and Instagram links working
- [ ] The Star newspaper link added for credibility

### Text Readability:
- [ ] All text has proper contrast ratios
- [ ] No white text on white backgrounds
- [ ] Professional typography (no PlayFair font)

---

**HANDOFF READY** 🚀
**CRITICAL**: Read `dev/braised-pork-king-website/refer` folder BEFORE making any content changes!
Next agent should start with task #3 (Mobile Responsiveness) and work through the priority order.