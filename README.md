# URL_Shortener.github.io

This is a URL Shortener project developed using HTML, CSS, JS, Node.js, and MySQL database.

## ⭐Project Description

- The URL Shortener allows users to shorten long URLs into shorter, more manageable links. 
- It provides a simple web interface where users can enter a long URL, and the system generates a unique short URL for them. 
- When someone visits the short URL, they will be redirected to the original long URL.

- Overall, our URL shortener web application streamlines the process of creating and managing shortened links, providing users with a user-friendly and effective tool for enhancing their online link sharing experience.

- - ![URL-Shortner](https://github.com/Hemantk1234/URL_Shortener.github.io/assets/125623888/b7f21c35-7662-437e-93a2-165bae4f84cd)

## 🔨 Tools Used :- 

The project utilizes the following technologies:

- **HTML**: For creating the basic structure and user interface of the web application.
- **CSS**: For styling the web pages and making them visually appealing.
- **JS**: For implementing the necessary client-side functionality and handling user interactions.
- **Node.js**: For building the server-side logic and handling HTTP requests.
- **MySQL**: For storing and retrieving data related to the shortened URLs.

## 👨‍💻Installation

To use this project, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```
   It will install all the necessary packages and libraries specified in the package.json file.
3. Make sure you have Node.js and MySQL installed on your system,
    if have not installed, you can download them from the following links:
    - [Node.js](https://nodejs.org/en/download/)
    - [MySQL](https://dev.mysql.com/downloads/installer/)
4. Make sure you have correct version of Node.js and MySQL installed on your system.
    You can check the versions using the following commands:
    - Node.js: `node -v`
    - MySQL: `mysql --version`
    - Note: Make sure your Node.js version is compatible with the project requirements mentioned in the package.json file.
5. Create a new database in MySQL and Configure your MySQL database by providing your credentials in the code. 
    Locate the file responsible for connecting to the database (code.js) and update the following lines with your MySQL username and password:
    ```js
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
    });
    ```
    Replace 'your_username', 'your_password', and 'your_database_name' with your actual MySQL credentials.
6. Run the following command to start the server:
    ```shell
    node code.js
    ```
    OR
    ```shell
    npm start
    ```
    The application will start running on your localhost.
7. Access the URL Shortener application by opening a web browser and navigating to the following URL:
    ```shell
    http://localhost:3000
    ```
    You will see the home page of the URL Shortener application.

## Usage

To use the URL Shortener application, follow these steps:

1. Enter a long URL in the input field and click on the 'Shorten' button.
2. The application will generate a unique short URL for the entered long URL.
3. Click on the shortned link given below the input field you will be redirected to the original long URL.

## Project Demo

- This is demo video of the URL Shortener application. 

- **Video Title:** URL_Shortener Demo
- **Video Description:** This video shows how to use the URL Shortener application to shorten a long URL and how to redirect to the original long URL using the shortened URL.
- ![Project Demo link](https://github.com/Hemantk1234/URL_Shortener.github.io/issues/1#issue-1771112778)

**Complete Video Drive-Link:** 

## 💻 Screens Available

- Desktop Version :
    [Desktop.png](https://postimg.cc/V5jQzjnN)
- Tablet Version :
    [Tablet.png](https://postimg.cc/0M7kgh9k)

**🔥Important NOTE**

- The application will not accept invalid URLs.
- This project is currently designed to run on a local server and uses a local MySQL database for storing data. 
  If you wish to deploy it to a production environment or host it on a remote server, you will need to make appropriate changes to the code and configuration to ensure proper functionality and security.

## 🤝 Contribution

- If you'd like to contribute to this project or report any issues, please feel free to submit a pull request or open an issue on the project's   GitHub repository.

## 💁‍♂️ Follow Me:

> [Twitter](https://twitter.com/HemantkEtc116)

> [LinkedIn](https://www.linkedin.com/in/hemant-kumbhalkar-87393b235/)

> [Sololearn](https://www.sololearn.com/profile/24572821)


I hope you like the project. Thank you for reading :)
