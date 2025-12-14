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

1. **Click on any `.md` file** to open it
2. **Make your changes** (edit the text)
3. **Save**: Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
4. **Check your preview tab** - changes appear instantly! ⚡

### Common Files to Edit

- `docs/intro/index.md` - Main introduction page
- `docs/first-steps/students-signup.md` - Student signup guide
- `docs/first-steps/teachers-signup.md` - Teacher signup guide

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
*Italic text*

- Bullet point
- Another point

[Link text](https://example.com)

![Image description](./img/image-name.png)
```

### Adding Images

1. Upload image to the same folder as your markdown file
2. Reference it: `![Description](./img/image-name.png)`

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
