# Backend API Server

A RESTful API server built with Node.js, Express, and MongoDB for user authentication and data management.

## Features

- 🔐 **JWT Authentication** - Secure token-based authentication
- 👤 **User Management** - Registration, login, profile updates
- 🔒 **Password Security** - bcrypt hashing with salt rounds
- ✅ **Input Validation** - Request validation with express-validator
- 🛡️ **Security Headers** - Helmet middleware for security
- 🌐 **CORS Support** - Configurable cross-origin requests
- 📊 **MongoDB Integration** - Mongoose ODM for data modeling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator


## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

**Important**: Change `JWT_SECRET` to a strong, random string in production!

4. **Start MongoDB**

Make sure MongoDB is running on your system:
```bash
# macOS (if installed via Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod

# Windows - Start MongoDB from Services or run
mongod
```

## Usage

### Development Mode

Run the server with auto-reload on file changes:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### User Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| PUT | `/api/users/profile` | Update user profile | Yes |
| PUT | `/api/users/password` | Change password | Yes |
| DELETE | `/api/users/account` | Delete account | Yes |

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── userController.js  # User management logic
├── middleware/
│   ├── auth.js            # JWT authentication middleware
│   └── validation.js      # Input validation middleware
├── models/
│   └── User.js            # User model schema
├── routes/
│   ├── auth.js            # Authentication routes
│   └── users.js           # User management routes
├── utils/
│   └── helpers.js         # Helper functions
├── .env                   # Environment variables (create this)
├── .env.example           # Example environment variables
├── .gitignore            # Git ignore file
├── server.js             # Main server file
└── package.json          # Dependencies and scripts
```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 5000 | No |
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `JWT_SECRET` | Secret key for JWT signing | - | Yes |
| `NODE_ENV` | Environment (development/production) | development | No |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:3000 | No |

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server in production mode |
| `npm run dev` | Start the server with nodemon (auto-reload) |

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt before storage
- **JWT Tokens**: Secure, stateless authentication with expiration
- **Input Validation**: All inputs are validated and sanitized
- **Security Headers**: Helmet middleware adds security headers
- **CORS Protection**: Configurable CORS policy
- **Rate Limiting**: Can be added for production (see docs)

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/missing token)
- `404` - Not Found
- `409` - Conflict (duplicate user)
- `500` - Internal Server Error

Error responses follow this format:
```json
{
  "error": "Error message description",
  "details": []
}
```
## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or contributions:

- **Documentation**: See [API Documentation](./docs/API.md)
- **Issues**: Open an issue on GitHub
- **Email**: support@example.com

## Changelog

### v1.0.0 (2025-10-21)
- Initial release
- User authentication (register, login)
- JWT token management
- User profile management
- Password change functionality
- Account deletion

## Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JWT implementation
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Password hashing

---

**Built with ❤️ using Node.js and Express**
