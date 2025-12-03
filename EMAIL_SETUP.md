# Email Setup Instructions

## Current Status
The contact form is now configured to use Web3Forms with environment variables for security. You just need to add your access key.

## Quick Setup (Recommended - Web3Forms)

### Step 1: Get Your Access Key
1. **Visit Web3Forms**: Go to https://web3forms.com/
2. **Enter your email**: `Ramizbhaipinjara@gmail.com`
3. **Click "Get Access Key"**
4. **Copy the access key** provided (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add Access Key Locally (for development)
1. **Create `.env` file** in project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
2. **Open `.env` file** and replace `your_access_key_here` with your actual access key:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### Step 3: Add Access Key for Production (GitHub Pages/Vercel/Netlify)
When deploying to production, add the environment variable in your hosting platform:

**GitHub Pages:**
- Go to repository Settings → Secrets and variables → Actions
- Add new secret: `PUBLIC_WEB3FORMS_ACCESS_KEY` with your access key value

**Vercel/Netlify:**
- Go to project Settings → Environment Variables
- Add: `PUBLIC_WEB3FORMS_ACCESS_KEY` with your access key value

### Step 4: Test
Submit a test message through the contact form and check your email inbox.

## Benefits of Web3Forms
- ✅ Free forever (250 submissions/month)
- ✅ No signup required
- ✅ Instant setup
- ✅ Spam protection built-in
- ✅ Works with static sites (no backend needed)

## Alternative: Formspree

If you prefer Formspree:

1. Visit https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
5. Update the code in `ContactForm.astro` to use Formspree endpoint

## After Configuration

Once configured, emails will be automatically delivered to: **Ramizbhaipinjara@gmail.com**

