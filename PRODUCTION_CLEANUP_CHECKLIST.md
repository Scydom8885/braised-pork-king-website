# 🚀 Production Deployment Cleanup Checklist

## 📋 **Pre-Production Tasks**

### **🧹 Remove Development Console.log Statements**

**Before deploying to production, remove these debugging console.log statements:**

#### **Header.ejs (Line 137)**
```javascript
// Remove this line:
console.log('Language switched to:', selectedLang);
// Keep the comment for future analytics integration
```

#### **Home.ejs (Line 240)**
```javascript
// Remove this line:
console.log(`Order clicked: ${dishName}`);
// Keep the analytics comment structure
```

#### **Footer.ejs (Line 187)**
```javascript
// Remove this line:
console.log('Google Maps interaction');
// Keep for future map analytics
```

#### **404.ejs (Line 109)**
```javascript
// Remove this line:
console.log('404 page visited:', window.location.pathname);
// Keep for future error tracking
```

#### **Hero.ejs (Lines 182, 229, 302)**
```javascript
// Remove these lines:
console.log('Gallery scroll initiated from hero CTA');
console.log('Order button clicked from hero section');
console.log('Adjusting hero for mobile view');
// Keep for future user interaction analytics
```

#### **About.ejs (Line 307)**
```javascript
// Remove this line:
console.log('About page WhatsApp contact initiated');
// Keep for future contact tracking
```

#### **Franchise.ejs (Line 531)**
```javascript
// Remove this line:
console.log('Franchise inquiry from:', context ? context.tagName : 'unknown section');
// Keep for future lead tracking
```

---

### **📊 Replace with Production Analytics**

**Consider replacing console.log with real analytics:**

```javascript
// Instead of console.log, use:
// gtag('event', 'whatsapp_contact', { event_category: 'engagement' });
// or your preferred analytics solution
```

---

### **🔧 Other Production Tasks**

#### **Environment Configuration**
- [ ] Update `.env` for production environment
- [ ] Set `NODE_ENV=production`
- [ ] Configure production database URLs
- [ ] Set up production domain configuration

#### **Performance Optimization**
- [ ] Minify CSS and JavaScript
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set up CDN if needed

#### **Security Checklist**
- [ ] Remove any hardcoded secrets
- [ ] Verify HTTPS configuration
- [ ] Check CORS settings
- [ ] Review error handling (don't expose stack traces)

#### **Final Testing**
- [ ] Test all WhatsApp links with production numbers
- [ ] Verify Google Maps integration
- [ ] Test mobile responsiveness on real devices
- [ ] Check all social media links work correctly
- [ ] Verify FontAwesome icons load properly

---

### **🎯 Development vs Production Philosophy**

**KEEP DURING DEVELOPMENT:**
- ✅ Console.log statements for debugging
- ✅ Detailed error messages
- ✅ Development-friendly configurations

**REMOVE FOR PRODUCTION:**
- ❌ Console.log statements (replace with analytics)
- ❌ Detailed error stack traces
- ❌ Development endpoints

---

### **📝 Notes**

- **Current Status**: Development stage - console.log statements are helpful for debugging
- **Future Goal**: Replace with professional analytics tracking (Google Analytics, etc.)
- **Best Practice**: Keep debugging tools during development, clean up before production

---

**Last Updated**: September 2025
**Created by**: Claude Code Development Session