# Dubai Touring App

A cutting-edge web application for tourism services in Dubai. This app features a robust booking system, integrated payment processing, and a sleek user interface tailored for a seamless customer experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Dynamic Tour Listings**: Explore available tours with detailed descriptions and booking options.
- **Stripe Integration**: Secure payment processing with support for Stripe Checkout.
- **Stripe Webhook**: Handles real-time updates for payment status and order fulfillment.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Interactive UI Components**: Powered by NextUI for a consistent and elegant user experience.
- **Admin Tools**: Manage tours, bookings, and user data efficiently.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) for server-side rendering and static site generation.
- **Frontend**: 
  - [React](https://reactjs.org/) with modern hooks and state management using [Redux Toolkit](https://redux-toolkit.js.org/).
  - [NextUI](https://nextui.org/) for reusable UI components.
  - [Framer Motion](https://www.framer.com/motion/) for animations.
  - [Tailwind CSS](https://tailwindcss.com/) for rapid UI styling.
- **Backend**: 
  - [Prisma ORM](https://www.prisma.io/) for efficient database interactions.
  - Webhooks with Stripe for payment updates.
  - [Nodemailer](https://nodemailer.com/) for email notifications.
- **Payments**: 
  - [Stripe API](https://stripe.com/docs/api) for payment processing.
  - [React Stripe.js](https://stripe.com/docs/stripe-js/react) for seamless integration.
- **Utilities**: 
  - [Lottie React](https://lottiefiles.com/react) for animations.
  - [Sharp](https://sharp.pixelplumbing.com/) for image optimization.
  - [Slugify](https://github.com/simov/slugify) for URL-safe string generation.
- **Other Tools**: 
  - ESLint, Prettier, TypeScript, and ts-node for development.
  - PostCSS for CSS processing.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/)
- Stripe account for API keys.

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SyedMSaqib/dubai.git
   cd dubai
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variables** (see [Environment Variables](#environment-variables)).

4. **Initialize the database**:

   ```bash
   npx prisma migrate dev --name init
   ```

---

## Usage

### Development Server

Start the server in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Production

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

---

## Environment Variables

Create a `.env` file in the root directory with the following values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dubai
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

Replace placeholder values with your actual credentials.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
