# 🚀 Phishing Simulator Frontend

Phishing Simulator Frontend is a **Next.js** application designed for the user interface of the Phishing Simulator. It communicates with the backend through API endpoints and **WebSocket** to display real-time phishing attempt updates.

# 🔧 Environment Setup

1. Look at the .env.test.local file for environment configurations.

2. Create a .env file in the root directory and configure your environment variables based on the settings provided in test.env. (Before moving forward configure your MongoDB configuration. Create database if still not exists)

   ```bash
    cp .env.test.local .env.local

Edit .env file to match your local configuration.

1. Install dependencies. Use --force due to deprecated module reasons:

   ```bash
    npm install --force

---

## 🛠️ Running the Application

Before running the application make sure your backend server is already started. For more detials you can check it's README file.
If you are running the application locally, follow these steps:

1. **Start the Frontend App**:

   ```bash
   npm run dev


## 🚀  Usage Guide

---

## 💻 Accessing the Application

1. **Start the Application**


   - After starting both the frontend and backend applications, the app should be running on `http://localhost:3001` (frontend) and `http://localhost:3000` (backend).
   - Open your browser and go to `http://localhost:3001/register` to begin the process.

---

## 📝 Registration

1. **Access the Register Page**

   If you're a new user, you will land on the **Register Page** when you navigate to `http://localhost:3001/register`.

2. **Fill in the Registration Form**

   You will need to provide the following information to register:

   - **First Name**
   - **Last Name**
   - **Email**
   - **Password**

   **Important:** Your password must be at least 6 characters long.

3. **Submit the Form**

   After filling in the registration form, click **Register**. If the registration is successful, you will be redirected to the **Login Page**.

---

## 🔑 Login

1. **Access the Login Page**

   After successful registration, you will be redirected to the **Login Page** at `http://localhost:3001/login`.

2. **Log in to the Application**

   - Enter your **Email** and **Password** that you used during registration.
   - After entering the details, click **Sign in**.

3. **Access the Phishing Attempts Page**

   Upon successful login, you will be redirected to the **Phishing Attempts Page**, where you can view all phishing attempts.

---

## 💻 Phishing Attempts Page

1. **View Phishing Attempts**

   On the **Phishing Attempts Page**, you will see a table displaying the following details for each phishing attempt:

   - **Email**: The email associated with the phishing attempt.
   - **Status**: The current status of the phishing attempt (e.g., Pending, Approved, Blocked).
   - **Timestamp**: The date and time when the phishing attempt was made.

   The phishing attempt list will update in real-time via WebSocket. Any change in the status of phishing attempts (e.g., new attempts or status changes) will automatically be reflected in the table without needing to refresh the page.

---

## 📧 Phishing Simulation

1. **Simulate a Phishing Attempt**

   To simulate a phishing email:

   - Go to the **Phishing Simulation Page** (accessible from the navigation bar or another route within the app).
   - Enter an **Email** to simulate the phishing attempt and click **Simulate**.
   
   The backend will process the request, and the phishing attempt will appear on the **Phishing Attempts Page**.

2. **Real-time Status Updates**

   As new phishing attempts are simulated, their statuses will be updated in real-time, and you will see the changes live on the **Phishing Attempts Page**.

   - Any new status change, such as an update to the phishing attempt's status, will be reflected immediately on the page.

---

## ⚡ Real-Time Updates

- **WebSocket Integration** ensures that the **Phishing Attempts Page** updates in real-time.
- As soon as a change occurs in any phishing attempt status (e.g., a new phishing attempt or status change), the information will be broadcasted via WebSocket, and your page will automatically reflect those changes.

---

## 🧑‍💻 Example Flow

1. Start by navigating to the **Register Page** at `http://localhost:3001/register`.
2. Register a new user.
3. Log in using the registered credentials.
4. After successful login, you will be redirected to the **Phishing Attempts Page** where you can see any existing phishing attempts.
5. From there, you can simulate phishing attempts by providing an email address for simulation.
6. As phishing attempts' statuses change, you will see the updates in **real-time** on the page.

---

## 📡 Additional Features

- **Phishing Attempt Status Updates**: Users can see updates to phishing attempts in real-time, such as when new attempts are added, or when existing attempts' statuses are changed.
- **Email Simulation**: The application allows for simulating phishing emails by providing an email, which will be displayed in the **Phishing Attempts Page** after being processed.
  


