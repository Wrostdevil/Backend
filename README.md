# Backend learning projects

Small Node.js and Express.js exercises for learning how to create servers, define routes, parse JSON request bodies, and understand REST APIs.

> **Learning repository:** The examples are intentionally simple and are not intended to be production-ready applications. Some exercises are works in progress and may need additional implementation before they can be used as complete APIs.

## Repository contents

| Directory | Description |
| --- | --- |
| [`Backend/`](./Backend/) | Introductory Express server and an early notes API exercise |
| [`Server creation/`](./Server%20creation/) | A separated Express app/server example with basic page routes |
| [`Archive/`](./Archive/) | Reference material and downloaded practice resources |

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm, included with Node.js

Check your installation:

```bash
node --version
npm --version
```

## Getting started

Each project has its own `package.json`, so install dependencies from the directory you want to run.

### Backend project

```bash
cd Backend
npm install
node server1.js
```

The server listens on **http://localhost:1000**.

Available routes:

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Introductory response |
| `GET` | `/home` | Home page example |
| `GET` | `/about` | About page example |
| `GET` | `/gallery` | Gallery page example |
| `GET` | `/login` | Login page example |
| `GET` | `/contact` | Contact page example |

The `server.js` file is a separate early notes exercise. It demonstrates JSON middleware and a `POST /notes` route, but it is still incomplete and should not be used as the default startup command.

### Server creation project

```bash
cd "Server creation"
npm install
node server.js
```

The server listens on **http://localhost:3000**.

This example imports the Express application from [`src/app.js`](./Server%20creation/src/app.js). The current notes routes are:

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/notes` | Accepts a JSON request body for the notes exercise |
| `GET` | `/notes` | Returns the current learning-example response |

Example request:

```bash
curl -X POST http://localhost:3000/notes ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Learn Express\"}"
```

The notes exercise currently logs the request body and does not persist notes or return a complete resource response.

## API and REST notes

[`Backend/api.text`](./Backend/api.text) contains short study notes about:

- APIs and how they connect a frontend to an Express backend
- REST, SOAP, RPC, GraphQL, and WebSocket styles/protocols
- Common HTTP methods: `GET`, `POST`, `PATCH`, and `DELETE`
- Basic success status codes such as `200` and `201`

## Project conventions

- CommonJS modules are used (`require` and `module.exports`).
- Dependencies are installed separately for each Node.js project.
- `node_modules/` is excluded from version control.
- There are currently no automated tests; the examples can be checked manually with a browser or an HTTP client such as `curl`, Postman, or Insomnia.

## Future improvements

Potential next steps for these exercises include:

1. Return a response from every route.
2. Implement complete `POST`, `GET`, `PATCH`, and `DELETE` notes operations.
3. Add validation and consistent HTTP status codes.
4. Persist notes in a database instead of an in-memory array.
5. Add automated tests and environment-based configuration.

## License

No license has been specified for this learning repository.
