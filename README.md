# Express EJS Portfolio

A personal portfolio website built using **Node.js, Express.js, and EJS** to practice server-side rendering, routing, and data-driven web pages.

This project demonstrates how backend-rendered applications work without frontend frameworks, using clean structure and reusable templates.

---

##  Features

- Multi-page portfolio (Home, Education, Projects, Contact)
- Server-side rendering using EJS
- Reusable header and footer
- Dynamic data rendered from a JSON file
- Page-specific and global CSS styling
- Clean and beginner-friendly project structure

---

##  Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML5
- CSS3

---

##  Project Structure

- index.js
- data.json
- package.json
- package-lock.json
- .gitignore
- README.md

- public/
  - css/
    - style.css
    - education.css
    - projects.css
    - contact.css

- views/
  - home.ejs
  - education.ejs
  - projects.ejs
  - contact.ejs
  - includes/
    - head.ejs
    - footer.ejs

---

##  How to Run Locally

1. Clone the repository
    ```bash
    git clone https://github.com/Krutika-Josh/express-ejs-portfolio.git
    ```
2. Navigate to the project folder
    ```bash
    cd express-ejs-portfolio
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Start the server
    ```bash
    node index.js
    ```
5. Open in browser
    ```bash
    http://localhost:3000
    ```


## What I Learned

-   Express.js routing and middleware
-   Using EJS for server-side templating
-   Passing data from backend to views
-   Structuring a backend-rendered project
-   Managing static assets in Express
-   Writing clean and reusable layouts



## Author
**Krutika Joshi**
