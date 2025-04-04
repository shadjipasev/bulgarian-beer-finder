
# Bulgarian Beer Finder

**SPA project developed for the Software University React course.**


![Bulgarian Beer Finder Screenshot](https://github.com/shadjipasev/bulgarian-beer-finder/assets/97750298/4f328705-71ae-4d18-b166-88d325de5c72)

## Introduction

Bulgarian Beer Finder is a web application designed to provide users with information from where to buy  different types of beers in Bulgaria. It allows users to select their favorite beers and offers the option to purchase them.

## Key Features:

* **Browse Beers:** Explore a variety of beers.
* **Detailed Beer Information:** View details about each beer.
* **Favorite Selection:** Mark beers as favorites.
* **Purchase Option:** Functionality to select and purchase beers.

## Technologies Used

**Frontend:**

* **React:** 18.2.0

**Backend:**

* **Node.js:** 17.2.0
* **Express.js:** 4.18.2

**Dependencies:**

* `bcrypt`: 5.1.0 (for password hashing - if applicable)
* `jsonwebtoken`: 8.5.1 (for authentication - if applicable)
* `mongoose`: 6.7.4 (for MongoDB interaction - if used)
* `nodemon`: 2.0.20 (for development server)

## Setup

To run Bulgarian Beer Finder locally, follow these steps:

**Prerequisites:**

* **Node.js** (version 17.2.0 recommended) and **npm** (Node Package Manager) installed.

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/shadjipasev/bulgarian-beer-finder.git](https://www.google.com/search?q=https://github.com/shadjipasev/bulgarian-beer-finder.git)
    cd bulgarian-beer-finder
    ```

2.  **Install Backend (REST API) Dependencies:**
    ```bash
    cd server
    npm install
    npm start
    ```
    This will start the REST API server.

3.  **Install Frontend (Client) Dependencies:**
    Open a **new terminal** window and navigate to the client directory:
    ```bash
    cd client
    npm install
    npm start
    ```
    This will build and run the React application, usually opening it in your browser at `http://localhost:3000`.
