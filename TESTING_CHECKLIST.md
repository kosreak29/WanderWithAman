# 🧪 TESTING CHECKLIST - WANDER WITH AMAN

## Before Deployment - Test Everything!

---

## ✅ DESKTOP TESTING

### Google Chrome (Latest)
- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] Hero section parallax effect works
- [ ] Scroll reveal animations work
- [ ] Back-to-top button appears after scrolling
- [ ] Back-to-top button scrolls to top
- [ ] Newsletter form appears
- [ ] Newsletter form submits (check Netlify dashboard)
- [ ] All images load correctly
- [ ] Video plays correctly
- [ ] Social links open in new tab
- [ ] No console errors (F12 > Console)

### Firefox
- [ ] Repeat all above steps
- [ ] Check animations are smooth
- [ ] Font rendering looks good

### Safari (if on Mac)
- [ ] Repeat all above steps
- [ ] Check for any rendering issues

### Edge
- [ ] Repeat all above steps

---

## ✅ MOBILE TESTING

### iPhone (Safari)
- [ ] Homepage responsive at 375px width
- [ ] Navigation collapses to mobile menu (currently hidden)
- [ ] Hero text readable
- [ ] Images scale properly
- [ ] Back-to-top button visible and works
- [ ] Form inputs are clickable
- [ ] No horizontal scrolling

### Android (Chrome)
- [ ] Repeat all iPhone tests
- [ ] Check on different screen sizes (320px to 768px)

---

## ✅ FUNCTIONALITY TESTING

### Links
- [ ] Homepage nav links work (scroll to sections)
- [ ] Blog link works (`ujjain-mahakal.html`)
- [ ] Back link on blog post goes to homepage
- [ ] Footer links work
- [ ] Social media links open correctly (Instagram, YouTube, Twitter)
- [ ] Instagram link: https://www.instagram.com/wanderwithaman29/
- [ ] YouTube link: https://www.youtube.com/@AmanKosre
- [ ] Twitter link: https://x.com/aman_kosre14_14

### Buttons
- [ ] "Begin the Journey" button works
- [ ] "Explore" button works
- [ ] "Subscribe" button works (check email goes to Netlify)
- [ ] Back-to-top button works

### Forms
- [ ] Newsletter form accepts email
- [ ] Form validates required field
- [ ] Form shows error for invalid email
- [ ] Form submission works (data appears in Netlify dashboard)

### Animations
- [ ] Hero animations on page load
- [ ] Scroll reveal animations working
- [ ] Hover effects on cards
- [ ] Back-to-top button smooth scroll

---

## ✅ SEO TESTING

### Meta Tags
- [ ] View page source (right-click > View Page Source)
- [ ] Title tag visible: "Wander With Aman"
- [ ] Meta description visible
- [ ] OG tags present
- [ ] Twitter card tags present
- [ ] Canonical URL set

### XML Sitemap
- [ ] Visit: `https://your-domain.com/sitemap.xml`
- [ ] Shows XML with 6 URLs
- [ ] All URLs are valid

### Robots.txt
- [ ] Visit: `https://your-domain.com/robots.txt`
- [ ] Shows crawl instructions
- [ ] Includes sitemap reference

### Structured Data
- [ ] Use Google's Rich Results Test: https://search.google.com/test/rich-results
- [ ] Paste your URL
- [ ] Check for validation errors

---

## ✅ PERFORMANCE TESTING

### Lighthouse Audit (Google DevTools)
- [ ] Open DevTools (F12)
- [ ] Go to Lighthouse tab
- [ ] Click "Analyze page load"
- [ ] Performance: Should be > 70
- [ ] Accessibility: Should be > 80
- [ ] Best Practices: Should be > 80
- [ ] SEO: Should be > 80

### Page Load Time
- [ ] Homepage loads in < 3 seconds
- [ ] Blog post loads in < 3 seconds
- [ ] Images load progressively

### Network
- [ ] Check DevTools > Network tab
- [ ] JS files are minified
- [ ] CSS is minified
- [ ] Images are optimized
- [ ] No blocked resources

---

## ✅ ACCESSIBILITY TESTING

### Keyboard Navigation
- [ ] Can tab through all links
- [ ] Can tab to form inputs
- [ ] Can tab to buttons
- [ ] Focus indicators visible (blue outline)
- [ ] Can submit form with keyboard (Tab + Enter)
- [ ] Can activate back-to-top with keyboard

### Screen Reader (Use NVDA or VoiceOver)
- [ ] Page title announced
- [ ] Images have alt text
- [ ] Form labels associated
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Links have descriptive text (not "click here")

### Color Contrast
- [ ] Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- [ ] All text meets WCAG AA (4.5:1)
- [ ] Headings at least 3:1

---

## ✅ IMAGE TESTING

### Homepage Images
- [ ] Hero background loads
- [ ] Destination images load
- [ ] Gallery images load
- [ ] Author profile image loads
- [ ] Rotating badge visible

### Blog Post Images
- [ ] All story images load
- [ ] No broken image icons
- [ ] Gallery images load
- [ ] Author image loads

### Image Paths
- [ ] No 404 errors for images
- [ ] Check DevTools > Network > Filter by image
- [ ] All images have 200 status code

---

## ✅ SOCIAL MEDIA TESTING

### Twitter/X Preview
- [ ] Visit: https://x.com/search?q=wanderwithaman.com
- [ ] Check tweet preview shows correct OG image

### Facebook Preview
- [ ] Visit: https://www.facebook.com/sharer/dialog?u=https://wanderwithaman.com/
- [ ] Check preview shows correct image/description

### LinkedIn Preview
- [ ] Post link to LinkedIn
- [ ] Check preview shows correct image/title

---

## ✅ BROWSER COMPATIBILITY

### Chrome (Latest 2 versions)
- [ ] All features work

### Firefox (Latest)
- [ ] All features work

### Safari (Latest)
- [ ] All features work

### Edge (Latest)
- [ ] All features work

### Mobile Safari (iOS 14+)
- [ ] All features work

### Chrome Mobile (Android 8+)
- [ ] All features work

---

## ✅ SECURITY TESTING

### HTTPS
- [ ] Site is HTTPS (lock icon visible)
- [ ] No mixed content warnings

### External Links
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Check DevTools > Network for any security warnings

### Form Security
- [ ] Newsletter form uses POST method
- [ ] No sensitive data in URL
- [ ] Netlify honeypot enabled

### Headers
- [ ] X-Frame-Options header set
- [ ] X-Content-Type-Options header set
- [ ] Check with: https://www.headers.securityheaders.com/

---

## ✅ NETLIFY-SPECIFIC TESTING

### Deployment
- [ ] Site deploys without errors
- [ ] Deploy logs show success

### Functions
- [ ] Form submission works (check Netlify dashboard)
- [ ] Email notifications work (if configured)

### Redirects
- [ ] `/WebWander.html` redirects to `/`
- [ ] `/blog/ujjain` redirects to `/ujjain-mahakal.html`
- [ ] Check with: curl -I https://your-domain.com/WebWander.html

### Cache Headers
- [ ] Check response headers include Cache-Control
- [ ] HTML: `max-age=1800`
- [ ] CSS/JS: `max-age=31536000, immutable`
- [ ] Images: `max-age=31536000, immutable`

---

## ⚠️ COMMON ISSUES TO CHECK

- [ ] No console errors (F12 > Console)
- [ ] No console warnings (besides non-critical)
- [ ] No 404 errors (F12 > Network > Filter by 404)
- [ ] Images load (Network tab shows 200 status)
- [ ] API calls work if any (Network tab)
- [ ] No mixed content (HTTPS + HTTP)
- [ ] No layout shifts (Cumulative Layout Shift)
- [ ] Animations don't cause jank

---

## 📝 TEST RESULTS

| Test | Status | Notes |
|------|--------|-------|
| Homepage loads | ✅ / ❌ | |
| All links work | ✅ / ❌ | |
| Images load | ✅ / ❌ | |
| Forms work | ✅ / ❌ | |
| Mobile responsive | ✅ / ❌ | |
| Lighthouse score | ✅ / ❌ | Score: ___ / 100 |
| SEO ready | ✅ / ❌ | |
| Accessibility | ✅ / ❌ | |
| Performance good | ✅ / ❌ | |
| All tests pass | ✅ / ❌ | |

---

## 🚀 DEPLOYMENT DECISION

**Ready for deployment?** ✅ YES / ❌ NO

If NO, list issues to fix:
1. 
2. 
3. 

---

**Test Date:** __________
**Tested By:** __________
**Approved By:** __________
