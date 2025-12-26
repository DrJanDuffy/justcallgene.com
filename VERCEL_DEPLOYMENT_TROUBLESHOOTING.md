# Vercel Deployment Troubleshooting Guide

## Issue: Git Push Not Triggering Vercel Deployment

If your `git push` didn't trigger a Vercel deployment, follow these steps:

---

## ✅ QUICK FIXES

### 1. **Check Vercel Dashboard**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your project: **justcallgene.com**
3. Check the **Deployments** tab
4. Look for any failed builds or errors

### 2. **Verify GitHub Integration**
1. In Vercel Dashboard → **Settings** → **Git**
2. Verify:
   - ✅ Repository is connected: `DrJanDuffy/justcallgene.com`
   - ✅ Production Branch: `main`
   - ✅ Auto-deploy: **Enabled**

### 3. **Check GitHub Webhooks**
1. Go to GitHub → **Settings** → **Webhooks**
2. Look for Vercel webhook
3. Verify:
   - ✅ Active webhook exists
   - ✅ Recent deliveries show successful pushes
   - ✅ If missing, reconnect Vercel integration

---

## 🔧 MANUAL DEPLOYMENT OPTIONS

### Option 1: Trigger via Vercel Dashboard
1. Go to Vercel Dashboard → Your Project
2. Click **Deployments** tab
3. Click **Redeploy** on latest deployment
4. Or click **Create Deployment** → Select `main` branch

### Option 2: Use Vercel CLI (Recommended)
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link project (if not linked)
vercel link

# Deploy
vercel --prod
```

### Option 3: Force Push to Trigger Webhook
```bash
# Make a small change to trigger deployment
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
```

---

## 🔍 COMMON ISSUES & SOLUTIONS

### Issue 1: GitHub Integration Not Connected

**Solution:**
1. Vercel Dashboard → **Settings** → **Git**
2. Click **Disconnect** (if connected incorrectly)
3. Click **Connect Git Repository**
4. Select **GitHub** → Find `justcallgene.com` repo
5. Select **main** branch
6. Click **Deploy**

### Issue 2: Wrong Branch Configured

**Solution:**
1. Vercel Dashboard → **Settings** → **Git**
2. Check **Production Branch**: Should be `main`
3. Update if needed and save

### Issue 3: Webhook Not Receiving Events

**Solution:**
1. GitHub → **Settings** → **Webhooks**
2. Find Vercel webhook
3. Click **Recent Deliveries**
4. Check if latest push shows up
5. If not, click **Redeliver** on a recent event
6. If webhook doesn't exist, reconnect Vercel integration

### Issue 4: Build Errors Preventing Deployment

**Solution:**
1. Check Vercel Dashboard → **Deployments** → Latest deployment
2. Click on failed deployment
3. Review **Build Logs** for errors
4. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Environment variables not set
   - Build command failing

### Issue 5: Project Not Linked to GitHub

**Solution:**
1. Vercel Dashboard → **Settings** → **Git**
2. If no repository shown, click **Connect Git Repository**
3. Select GitHub → Authorize if needed
4. Select `justcallgene.com` repository
5. Configure settings and deploy

---

## 🚀 VERIFY DEPLOYMENT SETTINGS

### In Vercel Dashboard:

**Settings → General:**
- ✅ Framework Preset: Next.js
- ✅ Root Directory: `/` (or leave empty)
- ✅ Build Command: `npm run build` (or auto-detected)
- ✅ Output Directory: `.next` (or auto-detected)
- ✅ Install Command: `npm install` (or auto-detected)

**Settings → Git:**
- ✅ Repository: `DrJanDuffy/justcallgene.com`
- ✅ Production Branch: `main`
- ✅ Auto-deploy: **Enabled**

**Settings → Environment Variables:**
- ✅ `NEXT_PUBLIC_SITE_URL` = `https://justcallgene.com`
- ✅ `NODE_ENV` = `production` (optional)

---

## 📋 CHECKLIST

- [ ] Repository connected in Vercel Dashboard
- [ ] Production branch set to `main`
- [ ] Auto-deploy enabled
- [ ] GitHub webhook exists and is active
- [ ] Recent webhook deliveries show successful
- [ ] No build errors in latest deployment
- [ ] Environment variables configured
- [ ] Project settings correct

---

## 🆘 IF STILL NOT WORKING

### Step 1: Check Recent Commits
```bash
git log --oneline -5
# Verify commits are pushed to origin/main
```

### Step 2: Verify Remote
```bash
git remote -v
# Should show:
# origin  https://github.com/DrJanDuffy/justcallgene.com.git (fetch)
# origin  https://github.com/DrJanDuffy/justcallgene.com.git (push)
```

### Step 3: Force Manual Deployment
Use Vercel CLI:
```bash
vercel --prod
```

### Step 4: Contact Support
If none of the above works:
1. Check Vercel Status: https://www.vercel-status.com/
2. Vercel Support: https://vercel.com/support
3. Include:
   - Repository URL
   - Latest commit hash
   - Screenshot of Vercel Dashboard → Settings → Git

---

## ✅ EXPECTED BEHAVIOR

After a successful `git push`:
1. **Within 30 seconds**: Vercel should detect the push
2. **Within 1-2 minutes**: Build should start
3. **Within 3-5 minutes**: Deployment should complete
4. **Check**: Vercel Dashboard → Deployments → Should show new deployment

---

**Last Updated**: December 2025  
**Status**: Troubleshooting Guide
