
# Display Name App

---

A simple React Native app built with Expo and Convex backend that displays names from a database one by one in a loop (changing every 2 seconds) and allows users to add new names dynamically.

## Features

- Displays names from the Convex database in a continuous loop
- Updates every 2 seconds to show the next name
- Allows users to add new names to the database dynamically
- Automatically includes newly added names in the loop


## Technologies Used

### Frontend:

- **React Native**: Framework for building cross-platform mobile apps
- **Expo**: Development platform for React Native apps
- **React Navigation**: For navigation between screens


### Backend:

- **Convex**: Backend-as-a-service platform for managing data and queries


## Folder Structure

```
name-display-app/
├── App.js                 # Main entry point of the app
├── babel.config.js        # Babel configuration for environment variables
├── package.json           # Project dependencies and scripts
├── .env.local             # Environment variables (Convex URL)
├── convex/                # Convex backend folder
│   ├── schema.ts          # Database schema definition
│   ├── names.ts           # Queries and mutations for names table
│   └── _generated/        # Auto-generated Convex files
├── src/                   # Source files for frontend
│   ├── screens/
│   │   └── HomeScreen.js  # Main screen displaying names and form to add names
│   ├── components/
│   │   ├── NameDisplay.js # Component to display current name
│   │   └── AddNameForm.js # Form component to add new names
└── assets/                # Static assets (images, etc.)
```


## Installation

### Prerequisites

Before running this app, ensure you have the following installed:

- Node.js (LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- A Convex account (Sign up [here](https://www.convex.dev/))


### Step-by-Step Guide

1. **Clone the Repository:**

```bash
git clone https://github.com/<your-username>/name-display-app.git
cd name-display-app
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Set Up Convex Backend:**

Initialize Convex in your project if not already done:

```bash
npx convex init
```

Deploy the schema:

```bash
npx convex push
```

Start the Convex development server:

```bash
npx convex dev
```

4. **Configure Environment Variables:**

Create a `.env.local` file in the root directory with your Convex deployment URL:

```
CONVEX_URL=https://<your-convex-deployment-url>.convex.cloud
```

5. **Start the Expo Development Server:**

```bash
npx expo start
```

6. **Run the App on Your Device or Emulator:**
    - Use the QR code in your terminal or Expo DevTools to open the app on your phone (Expo Go app required).
    - Alternatively, run it on an emulator using:

```bash
npx expo start --android    # For Android Emulator
npx expo start --ios        # For iOS Simulator (macOS only)
```


## Usage

- The app will display names from the database one by one, changing every 2 seconds.
- Use the input field at the bottom of the screen to add new names.
- Newly added names will automatically be included in the loop.

