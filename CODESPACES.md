# How to Edit MotionGen Documentation (GitHub Codespaces)

This guide shows you how to edit the MotionGen documentation with live preview using GitHub Codespaces. No software installation needed!

## What You'll Get

- ✅ Edit documentation in your browser
- ✅ See changes instantly (hot reload)
- ✅ No installation required
- ✅ Works on any computer

---

## Step 1: Open Codespace

1. Go to the repository: https://github.com/snappyxo/motiongen-docs
2. Click the green **"Code"** button (top right)
3. Click the **"Codespaces"** tab
4. Click **"Create codespace on main"**
5. Wait 30-60 seconds while it sets up

**What's happening:** GitHub is creating a cloud computer with everything pre-installed!

---

## Step 2: Start the Preview Server

Once VS Code opens in your browser:

1. Look for the **Terminal** at the bottom (black box)
2. Type this command and press Enter:
   ```bash
   npm start
   ```
3. Wait 10-20 seconds
4. A popup will appear: **"Your application running on port 3000 is available"**
5. Click **"Open in Browser"**

**You now have a live preview!** Any changes you make will show up instantly.

---

## Step 3: Edit Documentation Files

### Finding Files

1. Look at the **left sidebar** (Explorer)
2. Click to expand folders:
   - `docs/intro/` - Introduction page
   - `docs/first-steps/` - Getting started guides

### Editing Files

1. **Click on any `.mdx` file** to open it
2. **Make your changes** (edit the text)
3. **Save**: Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
4. **Check your preview tab** - changes appear instantly! ⚡

### Common Files to Edit

- `docs/intro/index.mdx` - Main introduction page
- `docs/first-steps/students-signup.md` - Student signup guide
- `docs/first-steps/teachers-signup.mdx` - Teacher signup guide
- `docs/making-your-first-mechanism/` - Mechanism design guides

---

## Step 4: Save Your Changes

When you're done editing:

1. Click the **Source Control** icon (left sidebar, looks like a branch)
2. You'll see all files you changed
3. In the **"Message"** box at the top, type what you changed:
   - Example: `Updated intro page`
   - Example: `Fixed typo in teachers guide`
4. Click the **"Commit"** button (✓ checkmark)
5. Click **"Sync Changes"** (or "Push" if it says that)

**Done!** Your changes are saved and will go live in 1-2 minutes.

---

## Step 5: Check the Live Site

After 1-2 minutes, visit:
- https://docs.motiongen.io

Your changes should be live!

---

## Tips & Tricks

### Markdown Basics

```markdown
# Large Heading
## Medium Heading
### Small Heading

**Bold text**
_Italic text_

- Bullet point
- Another point

[Link text](https://example.com)
```

### Using Custom Components

Our documentation has two special components for images and layouts:

#### DocImage - For Images

Upload images to `static/img/your-section/` folder, then use:

```mdx
{/* Simple image */}
<DocImage
  src="/img/your-section/image.png"
  alt="description"
/>

{/* Centered with caption */}
<DocImage
  src="/img/your-section/image.png"
  alt="description"
  maxWidth="30rem"
  caption="Image caption here"
/>

{/* With yellow border */}
<DocImage
  src="/img/your-section/image.png"
  alt="description"
  border={true}
/>

{/* Left or right aligned */}
<DocImage
  src="/img/your-section/image.png"
  alt="description"
  maxWidth="24rem"
  align="left"
/>
```

#### DocGrid - For Image Grids

```mdx
{/* 2-column grid */}
<DocGrid columns={2} gap="1rem">
  <DocImage src="/img/section/1.png" alt="..." />
  <DocImage src="/img/section/2.png" alt="..." />
</DocGrid>

{/* 3-column grid */}
<DocGrid columns={3} gap="1.5rem">
  <DocImage src="/img/section/1.png" alt="..." />
  <DocImage src="/img/section/2.png" alt="..." />
  <DocImage src="/img/section/3.png" alt="..." />
</DocGrid>
```

### Stopping the Preview

If you need to stop the preview server:
1. Go to Terminal
2. Press `Ctrl+C`

---

## Troubleshooting

### Preview not updating?

- Make sure you saved the file (`Ctrl+S` / `Cmd+S`)
- Check the preview tab is still open
- Refresh the preview browser tab

### Can't find the Terminal?

- Go to menu: **Terminal** → **New Terminal**

### Codespace won't start?

- Refresh the page
- Try again in a few minutes
- Check your internet connection

### Changes not going live?

- Check GitHub Actions: https://github.com/snappyxo/motiongen-docs/actions
- Green checkmark = deployed successfully
- Red X = something went wrong (contact tech support)

---

## Shutting Down

When you're done:

1. **Commit your changes** (Step 4 above)
2. Just **close the browser tab**
3. Codespace automatically stops after 30 minutes of inactivity

**Your work is saved!** Next time you create a Codespace, you'll start fresh with the latest code.

---

## Quick Reference Card

| Action | How |
|--------|-----|
| **Start preview** | Terminal: `npm start` |
| **Save file** | `Ctrl+S` or `Cmd+S` |
| **Commit changes** | Source Control → Type message → Commit → Sync |
| **View live site** | https://docs.motiongen.io |
| **Get help** | Contact: [your-email@example.com] |

---

## Need Help?

- **GitHub Codespaces Docs**: https://docs.github.com/en/codespaces
- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/
- **Contact**: [Add contact info here]

Happy editing! 🎉
