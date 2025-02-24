Technologies Used

Frontend:
React.js – For building the user interface
JavaScript (ES6+) – Core scripting language
HTML5 & CSS3 – Structure and styling

Backend:
Spring Boot – Backend framework for RESTful APIs
Spring Web – To build web applications
Spring Data JPA – For database operations
Hibernate – ORM for database interaction
MySQL – Database for persistent storage
MySQL Driver – Integrated with Spring Boot for connectivity

Tools & Platforms:
Maven – For dependency management
Postman – For API testing
Git & GitHub – Version control and repository management
Visual Studio Code & Eclipse – Development environments

Design Choices
Component-Based Architecture: The React frontend is modular, with components like CreateTask.js for adding tasks and TodoList.js for displaying and managing tasks.
RESTful API Design: Backend endpoints follow REST principles for seamless client-server communication.
State Management: React’s useState and useEffect hooks manage state and side effects efficiently.
Responsive UI: The application is styled to ensure usability across devices.
Data Persistence: MySQL ensures that task data remains persistent across sessions.

Development Process
Requirement Analysis: Understood the project scope and defined core functionalities.
Backend Development:
Set up Spring Boot project with necessary dependencies.
Created RESTful endpoints for CRUD operations.
Configured MySQL database and integrated it using JPA and Hibernate.
Frontend Development:
Designed CreateTask.js for adding tasks and TodoList.js for listing, updating, and deleting tasks.

Testing:
Used Postman to test backend APIs.
Conducted unit and integration testing to ensure functionality.
Deployment & Documentation:
Finalized code structure and documented the entire development process.

Key Features
 Add new tasks with descriptions and due dates.
 Edit existing tasks.
 Delete tasks when completed or no longer needed.
 View all tasks in a structured list format.
 Mark tasks as complete or pending.
