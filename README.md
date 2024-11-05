# Twitter Clone

A Twitter-like social media platform built with Node.js, Express, and MySQL.

## Features

- User authentication
- Tweet creation and interaction
- Follow/Unfollow system
- Real-time chat using Socket.IO
- Location check-in
- @mention system

## Tech Stack

- Frontend: Bootstrap, Handlebars
- Backend: Node.js, Express
- Database: MySQL
- ORM: Sequelize
- Real-time: Socket.IO

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure database in `config/config.json`
4. Run migrations: `npx sequelize-cli db:migrate`
5. Seed database: `npx sequelize-cli db:seed:all`
6. Start server: `npm start`

## Test Accounts

Admin:
- Email: admin@example.com
- Password: 12345678

User:
- Email: user1@example.com
- Password: 12345678

## License

MIT
