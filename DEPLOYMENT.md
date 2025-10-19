# 🚀 MuneerUI Deployment Configuration

## Overview

This guide shows you how to configure your MuneerUI library so users can install components using:

```bash
npx shadcn@latest add https://muneer-ui.vercel.app/r/ComponentName-JS-CSS
```

## 📋 Pre-Deployment Checklist

### 1. Build the Registry

```bash
npm run build
```

This generates:
- Component registry files in `public/r/`
- Optimized production build in `dist/`
- shadcn-compatible JSON files for each component

### 2. Verify Build Output

Check that registry files exist:

```bash
ls public/r/ | head -20
```

You should see:
```
AnimatedContent-JS-CSS.json
AnimatedContent-JS-TW.json
AnimatedContent-TS-CSS.json
AnimatedContent-TS-TW.json
AnimatedList-JS-CSS.json
... (400+ files for 110+ components × 4 variants)
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

#### Step 2: Deploy

```bash
vercel
```

Follow the prompts:
- Link to existing project or create new
- Confirm build settings
- Deploy

#### Step 3: Add Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain: `muneer-ui.vercel.app`
3. Add www subdomain: `www.muneer-ui.vercel.app`
4. Configure DNS records as instructed by Vercel

#### Step 4: Configure Environment

Vercel settings (vercel.json):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/r/:path*",
      "destination": "/r/:path*"
    }
  ],
  "headers": [
    {
      "source": "/r/:path*",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET"
        },
        {
          "key": "Content-Type",
          "value": "application/json"
        }
      ]
    }
  ]
}
```

#### Step 5: Test Installation

```bash
# Test the URL
curl https://muneer-ui.vercel.app/r/SplitText-JS-CSS.json

# Test installation
npx shadcn@latest add https://muneer-ui.vercel.app/r/SplitText-JS-CSS
```

### Option 2: Netlify

#### Step 1: Install Netlify CLI

```bash
npm i -g netlify-cli
```

#### Step 2: Create netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/r/*"
  to = "/r/:splat"
  status = 200
  force = false

[[headers]]
  for = "/r/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET"
    Content-Type = "application/json"
```

#### Step 3: Deploy

```bash
netlify deploy --prod
```

#### Step 4: Add Custom Domain

1. Go to Netlify Dashboard → Domain Settings
2. Add custom domain: `muneer-ui.vercel.app`
3. Configure DNS records

### Option 3: GitHub Pages

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Deploy Script

Create `deploy.sh`:

```bash
#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Muneerali199/MuneerUI.git main:gh-pages

cd -
```

#### Step 3: Run Deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

#### Step 4: Configure GitHub Pages

1. Go to Repository → Settings → Pages
2. Source: Deploy from branch `gh-pages`
3. Add custom domain: `muneer-ui.vercel.app`

### Option 4: Custom Server (VPS/Cloud)

#### Nginx Configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name muneer-ui.vercel.app www.muneer-ui.vercel.app;

    root /var/www/muneerui/dist;
    index index.html;

    # Enable CORS for registry
    location /r/ {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET';
        add_header Content-Type 'application/json';
        try_files $uri $uri/ =404;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    # SSL configuration (use certbot)
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate /etc/letsencrypt/live/muneer-ui.vercel.app/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/muneer-ui.vercel.app/privkey.pem;
}
```

#### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName muneer-ui.vercel.app
    ServerAlias www.muneer-ui.vercel.app
    DocumentRoot /var/www/muneerui/dist

    <Directory /var/www/muneerui/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # CORS for registry
    <Location /r/>
        Header set Access-Control-Allow-Origin "*"
        Header set Access-Control-Allow-Methods "GET"
        Header set Content-Type "application/json"
    </Location>

    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [L]
</VirtualHost>
```

## 🔧 Domain Configuration

### DNS Records

Point your domain to your hosting provider:

#### Vercel
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

#### Netlify
```
A     @       75.2.60.5
CNAME www     [your-site].netlify.app
```

#### GitHub Pages
```
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
CNAME www     muneerali199.github.io
```

### SSL Certificate

All major hosting providers offer free SSL:
- **Vercel**: Automatic
- **Netlify**: Automatic
- **GitHub Pages**: Automatic
- **Custom Server**: Use Let's Encrypt/Certbot

```bash
# For custom server
sudo certbot --nginx -d muneer-ui.vercel.app -d www.muneer-ui.vercel.app
```

## 🧪 Testing Your Deployment

### 1. Test Registry Access

```bash
# Should return JSON
curl https://muneer-ui.vercel.app/r/SplitText-JS-CSS.json

# Check CORS headers
curl -I https://muneer-ui.vercel.app/r/SplitText-JS-CSS.json
```

### 2. Test CLI Installation

```bash
# Create test project
npx create-react-app test-muneerui
cd test-muneerui

# Test installation
npx shadcn@latest add https://muneer-ui.vercel.app/r/SplitText-JS-CSS
```

### 3. Verify Component Files

Check that components install correctly:
```bash
ls src/components/
cat src/components/SplitText.jsx
```

### 4. Test Multiple Components

```bash
npx shadcn@latest add https://muneer-ui.vercel.app/r/BlurText-JS-CSS https://muneer-ui.vercel.app/r/CountUp-JS-CSS
```

## 📊 Monitoring

### Check Registry Access

Create a simple test script:

```javascript
// test-registry.js
const components = [
  'SplitText-JS-CSS',
  'BlurText-JS-CSS',
  'CountUp-JS-CSS',
  'Aurora-JS-CSS',
  'FadeContent-JS-CSS'
];

async function testRegistry() {
  for (const component of components) {
    const url = `https://muneer-ui.vercel.app/r/${component}.json`;
    try {
      const response = await fetch(url);
      console.log(`${component}: ${response.ok ? '✅' : '❌'} (${response.status})`);
    } catch (error) {
      console.log(`${component}: ❌ Error - ${error.message}`);
    }
  }
}

testRegistry();
```

Run it:
```bash
node test-registry.js
```

## 🚨 Troubleshooting

### Issue: 404 Not Found

**Cause**: Registry files not deployed or incorrect path

**Solution**:
```bash
# Rebuild
npm run build

# Check files
ls -la public/r/

# Redeploy
vercel --prod
```

### Issue: CORS Errors

**Cause**: Missing CORS headers

**Solution**: Add headers in your hosting configuration (see examples above)

### Issue: Wrong Content-Type

**Cause**: Server not recognizing .json files

**Solution**: 
```bash
# Verify file extensions
ls public/r/*.json | head -5

# Add Content-Type header in server config
```

### Issue: Component Not Installing

**Cause**: Incorrect URL or component name

**Solution**:
```bash
# Check exact component name in registry.json
cat registry.json | grep "ComponentName"

# Use correct casing and variant
npx shadcn@latest add https://muneer-ui.vercel.app/r/SplitText-JS-CSS
```

## 📝 Post-Deployment Checklist

- [ ] Website loads at https://muneer-ui.vercel.app
- [ ] SSL certificate is active (https)
- [ ] Registry files accessible at /r/
- [ ] CORS headers present
- [ ] Test component installation works
- [ ] All 110+ components available
- [ ] GitHub repo updated with deployment URL
- [ ] README updated with installation instructions

## 🎉 Success!

Once deployed, users can install components:

```bash
# Single component
npx shadcn@latest add https://muneer-ui.vercel.app/r/SplitText-JS-CSS

# Multiple components
npx shadcn@latest add https://muneer-ui.vercel.app/r/SplitText-JS-CSS https://muneer-ui.vercel.app/r/BlurText-JS-CSS

# Using jsrepo
npx jsrepo add muneerui/SplitText-JS-CSS
```

Share your library:
- Tweet about it
- Post on Reddit r/reactjs
- Share in Discord communities
- Write a blog post
- Submit to Product Hunt

---

**Built by Muneer Ali Subzwari** | [GitHub](https://github.com/Muneerali199/MuneerUI) | [Twitter](https://twitter.com/muneerali)
