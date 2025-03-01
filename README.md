# TalentWeaver Documentation Site

This repository contains the documentation and project information for TalentWeaver, a platform that reimagines job discovery through AI knowledge paths.

## About the Site

The documentation site is built using Jekyll, a static site generator. The site structure is designed to be simple to maintain and update, while providing a professional presentation of the TalentWeaver concept.

## Site Structure

```
PathPioneer/
├── docs/                 # Root directory for the Jekyll site
│   ├── _config.yml       # Jekyll configuration
│   ├── _includes/        # Reusable HTML components
│   ├── _layouts/         # Page templates
│   │   ├── default.html  # Main site layout
│   │   └── doc.html      # Documentation page layout
│   ├── _docs/            # Documentation content files (Markdown)
│   │   ├── executive-summary.md
│   │   ├── technical-specification.md
│   │   └── prototype-plan.md
│   ├── assets/           # Static assets
│   │   ├── css/          # Stylesheets
│   │   ├── js/           # JavaScript files
│   │   └── images/       # Images and graphics
│   ├── index.md          # Home page
│   ├── about.md          # About page
│   └── contact.md        # Contact page
└── README.md             # This file
```

## Running the Site Locally

To run the site locally, you'll need to have Ruby and Jekyll installed.

1. Install Ruby (if not already installed)
2. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```
3. Navigate to the docs directory:
   ```
   cd docs
   ```
4. Install dependencies:
   ```
   bundle install
   ```
5. Start the local server:
   ```
   bundle exec jekyll serve
   ```
6. View the site at `http://localhost:4000`

## Adding or Updating Content

### Updating Existing Documentation

To update existing documentation, simply edit the corresponding Markdown files in the `docs/_docs/` directory.

### Adding New Documentation Pages

1. Create a new Markdown file in the `docs/_docs/` directory
2. Add the following front matter to the top of the file:
   ```yaml
   ---
   layout: doc
   title: Your Page Title
   permalink: /docs/your-page-slug/
   ---
   ```
3. Add your content in Markdown format
4. Update the sidebar navigation in `docs/_layouts/doc.html` to include your new page

### Adding Images

1. Place image files in the `docs/assets/images/` directory
2. Reference them in your Markdown with:
   ```markdown
   ![Image description](/assets/images/your-image.png)
   ```

## Deployment Options

### GitHub Pages

This site is designed to be easily deployed to GitHub Pages:

1. Push the repository to GitHub
2. In the repository settings, enable GitHub Pages from the `docs` folder
3. The site will be available at `https://your-username.github.io/TalentWeaver/`

### Other Hosting Options

The site can also be deployed to any static hosting service:

1. Build the site with `bundle exec jekyll build`
2. Upload the contents of the `_site` directory to your hosting provider

## Contributing

To contribute to this documentation:

1. Fork the repository
2. Create a branch for your changes
3. Make your changes
4. Submit a pull request

## Contact

For questions or suggestions about this documentation, please contact [Your Contact Information].
