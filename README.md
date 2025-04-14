# Eventrix - Event Management Platform

## Overview
Eventrix is a modern event management platform built for VNRVJIET. It allows users to create, manage, and discover events with features like event registration, ticket management, and user authentication.

## Features
- 🔐 Secure Authentication (using Clerk)
- 📅 Event Creation and Management
- 🎫 Ticket Booking System
- 💳 Secure Payment Processing
- 📱 Responsive Design
- 🖼️ Image Upload Support
- 👤 User Profile Management
- 🔍 Event Search and Filtering

## Tech Stack
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: MongoDB
- **Payment Processing**: Stripe
- **Image Storage**: UploadThing
- **Form Handling**: React Hook Form
- **UI Components**: Shadcn UI

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB account
- Clerk account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event_platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:
```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MongoDB
MONGODB_URI=your_mongodb_uri

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# UploadThing
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
event_platform/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   └── api/               # API routes
├── components/            # React components
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── lib/                   # Utility functions and configurations
│   ├── actions/          # Server actions
│   └── database/         # Database models and connections
├── public/               # Static files
└── types/                # TypeScript type definitions
```

## Key Features Explained

### Authentication
- Secure user authentication using Clerk
- Protected routes and API endpoints
- User profile management

### Event Management
- Create, edit, and delete events
- Upload event images
- Set event categories and pricing
- Manage event capacity and dates

### Ticket System
- Book event tickets
- Process payments securely via Stripe
- View booking history
- Generate booking confirmations

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Next.js team for the amazing framework
- Clerk for authentication
- Stripe for payment processing
- MongoDB for database
- UploadThing for image storage
- Shadcn UI for components
