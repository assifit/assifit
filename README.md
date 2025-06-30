# AssiFit - Fitness Training App Landing Page

<div align="center">
  <img src="/public/icons/ic_logo.png" alt="AssiFit Logo" width="128" />
</div>

A modern, responsive landing page for the AssiFit fitness training application built with Next.js and Tailwind CSS. This landing page showcases the app's features, testimonials, and provides download links for the mobile application.

## About AssiFit App

<div align="center">
  <img src="/public/images/img_hero.png" alt="AssiFit App Screenshot" width="400" />
</div>


AssiFit is a fitness training application that helps users achieve their fitness goals with personalized workout plans and nutrition guidance. The landing page serves as the primary marketing tool for the mobile application.

<div align="center">
  <a href="https://play.google.com/store/apps/details?id=vn.assifit">
    <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="240" />
  </a>
</div>


## Landing page tech stack

- **Framework**: Next.js 15.3.3 with Turbopack
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: 
  - Radix UI components for accessible UI elements
  - Lucide React for icons
- **Internationalization**: Custom language context for English and Vietnamese
- **Deployment**: Ready for deployment on Netlify, Vercel, or other platforms
- **Package Management**: npm

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Theme toggle with high-contrast dark mode
- **Internationalization**: Support for English and Vietnamese languages
- **Modern UI**: Clean, modern design with custom branding
- **Performance Optimized**: Fast loading with optimized images and Next.js features
- **SEO Ready**: Structured for good search engine visibility
- **Accessibility**: Built with accessibility in mind using semantic HTML and ARIA attributes
- **Legal Pages**: Includes Privacy Policy and Terms of Service pages


### Key Sections

1. **Hero Section**: App introduction with download button
2. **Features Section**: Highlights of the app's capabilities
3. **Testimonials Section**: User reviews and success stories
4. **Download Section**: Call-to-action for app installation

## How to Run

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/assifit/assifit.git
   cd assifit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:9002

   Note: If port 9002 is already in use, you can modify the port in the `package.json` file:
   ```json
   "dev": "next dev --turbopack -p <your-preferred-port>",
   ```

### Building for Production

```bash
npm run build
npm start
```

## Customization

The application uses a rich brown primary color (#8F4C37) and Montserrat font with italic styling for the app name. These can be customized in:

- `src/app/globals.css` - For color themes and CSS variables
- `tailwind.config.ts` - For Tailwind configuration
- `src/lib/translations.ts` - For text content in both languages

## License

MIT License

Copyright (c) 2025 AssiFit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

For any questions or inquiries, please contact sales.4eyeslearning@gmail.com
