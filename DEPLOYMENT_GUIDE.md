# Deployment Guide - Vercel Production

## 🚀 Deploy Your Hospital Website to Vercel

Vercel is the easiest way to deploy Next.js applications. Follow these steps:

---

## 📋 Prerequisites

- ✅ GitHub account ([github.com](https://github.com))
- ✅ Vercel account ([vercel.com](https://vercel.com))
- ✅ Your project on GitHub
- ✅ Successful `npm run build` (already done ✓)

---

## 🔄 Option 1: Deploy via GitHub (Recommended - Easiest)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Hospital website"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/hospital-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Search for and select your `hospital-website` repository
5. Click **"Import"**

### Step 3: Configure Project

**Framework Preset**: Next.js (should auto-detect)

**Build Command**: `npm run build` (default)

**Output Directory**: `.next` (default)

**Environment Variables**: (Leave empty for now, or add if needed)

### Step 4: Deploy

Click **"Deploy"** button

⏳ *Deployment takes 2-5 minutes*

✅ **Your site is LIVE!** Vercel will show you the URL like: `https://hospital-website-xxx.vercel.app`

---

## 🌐 Option 2: Deploy via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# 1. Select "Next.js" when asked about framework
# 2. Enter project name
# 3. Vercel automatically detects build settings
# 4. Confirm deployment
```

Done! Your site is live on Vercel.

---

## 🔗 Custom Domain Setup

### Connect Your Own Domain to Vercel

1. Go to your **Vercel Dashboard** → Select your project
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain name (e.g., `yourhospital.com`)
5. Vercel shows nameserver instructions

### Update Nameservers at Your Domain Registrar

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS/Nameserver settings
3. Replace nameservers with Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`

4. Save changes (propagation takes 24-48 hours)
5. Once verified, your domain will appear in Vercel

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads at your Vercel URL
- [ ] All pages accessible (Home, About, Doctors, Blog, etc.)
- [ ] Forms work (Contact page submission)
- [ ] Images load correctly
- [ ] Mobile responsive on phones/tablets
- [ ] Navigation links work
- [ ] WhatsApp/Call buttons functional

### Quick Test URLs:
```
Homepage:     https://your-site.vercel.app/
Doctors:      https://your-site.vercel.app/doctors
Blog:         https://your-site.vercel.app/blog
Contact:      https://your-site.vercel.app/contact-us
About:        https://your-site.vercel.app/about
```

---

## 🔄 Update After Deployment

Whenever you make changes:

```bash
# Make your changes in code

# Commit and push to GitHub
git add .
git commit -m "Update description"
git push

# Vercel automatically redeploys (within 1-2 minutes)
```

✅ *No need to manually deploy again - Vercel auto-deploys on every GitHub push*

---

## ⚙️ Environment Variables (Optional)

If you add environment variables later:

1. Go to **Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. Add key-value pairs
4. Redeploy with **Redeployments** tab

---

## 📈 Monitor Your Site

### View Analytics & Logs

1. **Vercel Dashboard** → Select Project
2. **Analytics** tab shows:
   - Pageviews
   - Response times
   - Top pages

3. **Deployments** tab shows:
   - Deployment history
   - Status (Success/Failed)
   - Build logs

---

## 🆘 Troubleshooting

### Build Fails on Vercel

**Check build logs**:
1. Vercel Dashboard → Deployments
2. Click failed deployment
3. View "Build Logs" for error details

**Common issues**:
- Missing dependencies: Run `npm install`
- TypeScript errors: Check `npm run build` locally first
- Port issues: Vercel auto-assigns, no need to change

### Site Shows Blank/404

- Wait 5 minutes for Vercel cache to clear
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check if domain DNS is propagated: Use [whatsmydns.net](https://whatsmydns.net)

### Custom Domain Not Working

- Verify nameservers are updated (wait 24-48 hours for propagation)
- Check Vercel domain settings show ✓ verified
- Ensure no other services point to same domain

---

## 📝 Deployment Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Push to GitHub | 5 min |
| 2 | Connect Vercel | 2 min |
| 3 | Configure & Deploy | 2-5 min |
| 4 | Domain Setup (optional) | 24-48h |
| **Total** | **Live Site** | **~10 min** |

---

## 💰 Cost

**Vercel Free Plan Includes**:
- ✅ Unlimited deployments
- ✅ HTTPS (free SSL)
- ✅ Global CDN
- ✅ 100 GB bandwidth/month
- ✅ Perfect for hospitals/small-medium sites

**Upgrade to Pro if needed**: $20/month for higher limits

---

## 🎯 What's Next?

After deployment:

1. **Add Analytics** (Google Analytics):
   - Get tracking ID from Google Analytics
   - Add to `src/app/layout.tsx`

2. **Setup Email Notifications**:
   - Contact form submissions → Your email
   - Requires backend (can be added later)

3. **Add Security Headers**:
   - Vercel adds automatically
   - Check in Response Headers

4. **Enable CORS** (if needed):
   - Configure in `vercel.json`

5. **Add Custom Metadata**:
   - Update Open Graph tags in `layout.tsx`
   - Improve SEO with structured data

---

## 📞 Support

**If Issues Arise**:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Check your repo issues

---

## 🎉 Congratulations!

Your hospital website is now **live on the internet**! 

**Share your site**:
```
Homepage: https://yourhospital.vercel.app
Email: youremail@yourhospital.com
```

---

## 🔐 Security Checklist

- ✅ HTTPS enabled (automatic on Vercel)
- ✅ No sensitive data in code
- ✅ Contact form validation
- ✅ Rate limiting (Vercel provides)
- ✅ CORS configured properly

---

## 📊 Performance

Your site gets:
- ⚡ **Global CDN** - Fast worldwide
- 🔄 **Auto-scaling** - Handles traffic spikes
- 📦 **Image optimization** - Next.js native
- 🎯 **SEO optimized** - Server-side rendering
- 📱 **Mobile optimized** - Responsive design

---

## ✨ Deploy Now!

Ready? Follow **Option 1** above to get your hospital website live in 10 minutes! 🚀

