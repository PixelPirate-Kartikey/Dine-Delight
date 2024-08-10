# Dine Delight

**Dine Delight** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed for a modern dining reservation system. The project includes both a backend API and a frontend user interface to manage restaurant reservations, display menu items, and provide information about the restaurant.

## Features

- **User Interface**: Dynamic and responsive frontend built with React.
- **Reservation Management**: Users can make reservations through an interactive form.
- **Menu Display**: View and browse the menu with categorized dishes.
- **About Us**: Information about the restaurant, including team members and key statistics.
- **Admin Interface**: Manage reservations and view user interactions.

## Technologies Used

- **Frontend**: React, React Router, Axios, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Development Tools**: Nodemon, ESLint

## Installation

### Prerequisites

- Node.js and npm
- MongoDB instance (local or cloud)

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Dine-Delight.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Dine-Delight
    ```

3. **Setup the backend:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add your environment variables:

    ```plaintext
    PORT=4000
    MONGO_URI=your-mongodb-uri
    FRONTEND_URL=http://localhost:3000
    ```

4. **Setup the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

5. **Run the application:**

    - **Backend:**

      ```bash
      cd backend
      npm run dev
      ```

    - **Frontend:**

      ```bash
      cd ../frontend
      npm run dev
      ```

## Usage

- **Frontend**: Open your browser and navigate to `http://localhost:3000` to interact with the application.
- **Backend**: The API runs on `http://localhost:4000`. You can use tools like Postman to test API endpoints.

## Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your feature or fix:
   
    ```bash
    git checkout -b feature/your-feature
    ```

3. **Commit your changes**:

    ```bash
    git add .
    git commit -m "Add your message here"
    ```

4. **Push to your branch**:

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a pull request** on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
