# ecommerce
Here are the steps to setup:

1️⃣ Server Setup

Step 1: Configure Environment Variables

Navigate to the server folder.
Rename env.local to .env.
Update the following values with your credentials:
MONGO_URI=your_mongo_uri
USERNAME=your_username
PASSWORD=your_password

Step 2: Install Dependencies & Seed Data

Run the following command to install dependencies:
npm i --force
Seed the database by running:
node seedScript
Once the data is seeded successfully, start the server:
npm start

Step 3: Update Configuration

Open src/config/config.js.
Uncomment the commented section and comment the existing one.

Step 4: Admin Login & Setup

Open the admin panel in your browser:
http://localhost:3000/admin

Login with the following credentials:

Email: km@gmail.com  
Password: 12345678  

Manually add an Admin user.
Revert the configuration changes to use your own database admin.

Step 5: Create Branch & Assign Delivery Partner

In the Admin Panel, create a Branch and a Delivery Partner with nearby location (latitude, longitude, and address).
Link and assign both accordingly.

Server setup complete!!

2️⃣ Client Setup

Step 1: Install Dependencies

Navigate to the client folder and run:
npm i --force

Step 2: Update Configuration

Open src/service/config.tsx and:
Update the Branch ID from the Admin Panel.
Replace YOUR_GOOGLE_MAP_API_KEY with your Google Maps API key.
In VS Code, use Universal Search (Ctrl + Shift + F or Cmd + Shift + F on Mac) 
to find YOUR_GOOGLE_MAP_API_KEY and replace it with your actual key.

Step 3: Setup for iOS (if applicable)

Run the following command:
npm run pod-install

Step 4: Start the Application

For Android:
npm run android
For iOS:
npm run ios

Step 5: Real Device Configuration (Optional)

If using a real device, update config.tsx with your local IP address as mentioned in the file. 
Client setup complete!

✅ Setup is now complete! 
