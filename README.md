Event-Driven User Interaction Platform

This project demonstrates how a real-world user action can be handled using an event-driven architecture instead of a tightly coupled request-response flow.

The system is intentionally simple in UI but strong in backend design. A single user action (“Buy a course”) is treated as an event and processed asynchronously using Apache Kafka. This mirrors how modern systems handle user behavior at scale.

What this project does:

When a user clicks Buy a course on the frontend:

The React application sends a request to the backend

The Spring Boot backend emits an event

Apache Kafka receives and stores the event

A Kafka consumer processes the event independently

The backend logs confirm successful event consumption

The frontend does not need to know what happens after the event is emitted. This decoupling is the core idea behind the project.

Why this project is event-driven:

Instead of directly processing business logic during a user request, the system models user behavior as events.

In real systems, a “Buy course” action can trigger multiple independent processes such as analytics, notifications, recommendations, or billing. Event-driven architecture allows these to scale and evolve independently.

This project focuses on building that foundation correctly.

Technology stack:

Frontend
React
JavaScript
Fetch API

Backend
Java 21
Spring Boot
REST API

Messaging
Apache Kafka

Tools
VS Code
IntelliJ IDEA

Project structure:

The repository is organized as a single system with clear separation of concerns.

event-driven-user-interaction-platform
frontend
backend
screenshots
README.md

frontend contains the React application
backend contains the Spring Boot Kafka producer and consumer
screenshots contains proof of execution

How the system works internally:

Frontend
The landing page contains a Buy a course button. On click, a POST request is sent to the backend with a simple event payload.

Backend
The backend exposes an endpoint that receives the event request and publishes it to Kafka. A Kafka consumer listens to the topic and processes the event asynchronously.

Kafka
Kafka acts as the event pipeline. It guarantees delivery and allows the backend to process events independently of the frontend.

How to run the project locally:

Prerequisites
Node.js
Java 21
Apache Kafka running locally

Steps:

Start Kafka and Zookeeper

Run the Spring Boot backend

Start the React frontend using npm start

Open http://localhost:3000

Click Buy a course

Observe event logs in the backend console

What this project demonstrates:

Understanding of event-driven architecture
Decoupled frontend and backend communication
Asynchronous processing using Kafka
Realistic backend system design
Clean separation of responsibilities

This is not a CRUD demo. It focuses on architecture and system thinking.

Project level:

This project is best categorized as an intermediate backend and distributed systems project, especially strong for a fresher profile.

It demonstrates concepts commonly used in production systems while keeping the implementation clear and understandable.

Future improvements:

Persist events to a database
Add multiple consumers
Add user analytics processing
Add retry and failure handling
Deploy using Docker
