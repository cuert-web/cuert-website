# 🏁 Cairo University Eco Racing Team Website

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/df46f6ea-ea55-4adb-b530-4c2856fd1276/deploy-status)](https://app.netlify.com/sites/cuecoracing/deploys)
[![Website](https://img.shields.io/website?url=https%3A//cu-eco.org)](https://cu-eco.org/)
[![Hugo](https://img.shields.io/badge/Hugo-0.88+-blue.svg)](https://gohugo.io/)

**The official website repository for Cairo University Eco Racing Team (CUERT)**

[🌐 Visit Website](https://cu-eco.org/) • [⚙️ Admin Panel](https://cu-eco.org/admin/) • [🏆 Shell Eco Marathon](https://shell.com/ecomarathon)

</div>

---

## 📖 About This Project

This repository contains the complete source code and content for the Cairo University Eco Racing Team website. Built with modern web technologies and designed for easy content management, this site showcases our team's achievements, projects, and participation in the prestigious Shell Eco Marathon competition.

### 🛠️ Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) - Fast and flexible static site generator
- **Content Management**: [Netlify CMS](https://www.netlifycms.org/) - Git-based CMS for easy content editing
- **Theme**: Universal Hugo Theme (customized for CUERT)
- **Deployment**: Netlify - Automated deployments from Git
- **Version Control**: Git - This repository serves as our content database

---

## 📁 Project Structure

```
cuert-website/
├── 📁 v1/                          # Main Hugo site directory
│   ├── 📁 content/                 # All website content (Markdown files)
│   │   ├── 📄 _index.md           # Homepage content
│   │   ├── 📄 about.md            # About page
│   │   ├── 📄 contact.md          # Contact information
│   │   ├── 📁 blog/               # Blog posts and news
│   │   ├── 📁 cars/               # Car showcase pages
│   │   ├── 📁 team-members/       # Team member profiles
│   │   └── 📁 homepage/           # Homepage sections
│   ├── 📁 data/                   # Structured data files (YAML)
│   │   ├── 📁 carousel/           # Homepage carousel items
│   │   ├── 📁 clients/            # Partner/sponsor information
│   │   └── 📁 testimonials/       # Awards and achievements
│   ├── 📁 static/                 # Static assets
│   │   ├── 📁 img/                # Images and photos
│   │   ├── 📁 css/                # Custom stylesheets
│   │   └── 📁 admin/              # Netlify CMS configuration
│   └── 📁 themes/                 # Hugo theme files
├── 📄 README.md                   # This file
└── 📄 CNAME                       # Domain configuration
```

---

## 🗄️ Repository as Database

**Important**: This Git repository serves as our website's database. All content, images, team information, and site configuration are stored here as files. When you make changes and push them to the `main` branch, the website automatically updates.

### 🔄 How It Works

1. **Content Storage**: All website content is stored as Markdown files and YAML data files
2. **Version Control**: Every change is tracked through Git commits
3. **Automatic Deployment**: Netlify monitors the `main` branch and rebuilds the site on every push
4. **No Traditional Database**: No MySQL, PostgreSQL, or MongoDB - just files in Git!

---

## ✏️ How to Edit Content

You have **two ways** to edit the website content:

### 🌐 Method 1: Web-based Admin Panel (Recommended for non-developers)

1. Visit the [Admin Panel](https://cu-eco.org/admin/)
2. Log in with your credentials
3. Navigate to the content section you want to edit
4. Make your changes using the visual editor
5. Click "Publish" - changes will be automatically committed to this repository

### 💻 Method 2: Direct Repository Editing (Recommended for developers)

#### For Team Members with Repository Access:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/cuert-web/cuert-website.git
   cd cuert-website
   ```

2. **Make your edits**:

   - Edit Markdown files in `v1/content/` for pages and blog posts
   - Edit YAML files in `v1/data/` for structured data
   - Add images to `v1/static/img/`

3. **Test locally** (optional):

   ```bash
   cd v1
   hugo server -D
   # Visit http://localhost:1313
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```

#### For External Contributors:

1. **Fork this repository**
2. **Clone your fork**
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Push to your fork**
6. **Create a Pull Request** to this repository's `main` branch

---

## 🚀 Local Development Setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)

### Installation Steps

1. **Install Hugo**:

   - Download from [Hugo Releases](https://github.com/gohugoio/hugo/releases)
   - Add to your system PATH
   - Verify: `hugo version`

2. **Clone and Run**:

   ```bash
   git clone https://github.com/cuert-web/cuert-website.git
   cd cuert-website/v1
   hugo server -D
   ```

3. **Open your browser**: Navigate to `http://localhost:1313`

---

## 📝 Content Editing Guidelines

### 📰 Adding Blog Posts

Create a new Markdown file in `v1/content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2025-09-20
author: "Your Name"
description: "Brief description"
image: "/img/your-image.jpg"
---

Your content here...
```

### 👥 Adding Team Members

Create a new file in `v1/content/team-members/`:

```markdown
---
name: "Member Name"
position: "Position"
image: "/img/team/member-photo.jpg"
social:
  - icon: "fa-linkedin"
    link: "https://linkedin.com/in/username"
---

Member bio here...
```

### 🏆 Adding Achievements

Create a new YAML file in `v1/data/testimonials/`:

```yaml
text: "Description of achievement"
name: "Award/Competition Name"
position: "Placement/Recognition"
avatar: "/img/awards/award-image.jpg"
```

---

## 🤝 Contributing Guidelines

### For Team Members

- **Direct Push**: You can push directly to `main` for small content updates
- **Create Issues**: For major changes or bugs, create an issue first
- **Review Changes**: Always review your changes before pushing

### For External Contributors

1. **Check Issues**: Look for open issues that need help
2. **Follow Standards**: Maintain consistent formatting and style
3. **Test Locally**: Ensure your changes work before submitting
4. **Descriptive Commits**: Write clear commit messages

### 📋 Content Standards

- **Images**: Optimize images for web (< 1MB recommended)
- **Markdown**: Follow standard Markdown syntax
- **Dates**: Use YYYY-MM-DD format
- **File Names**: Use kebab-case for file names
- **Commit Messages**: Be descriptive about what changed

---

## 📞 Support & Contact

- **Website Issues**: Open an issue in this repository
- **Content Questions**: Contact the web development team
- **Technical Support**: Reach out to repository maintainers

---

## 📄 License

This project is maintained by Cairo University Eco Racing Team. All rights reserved.

---

<div align="center">

**Built with ❤️ by the CUERT Web Development Team**

[🏁 CUERT Official Website](https://cu-eco.org/) | [📧 Contact Us](https://cu-eco.org/contact/)

</div>
