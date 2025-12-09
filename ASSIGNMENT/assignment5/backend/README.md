# Book Management API

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on your system

3. Start the server:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /books | Add a new book |
| GET | /books | Get all books |
| GET | /books?genre=xyz | Get books by genre (sorted by publishedYear) |
| GET | /books/:id | Get a book by ID |
| PUT | /books/:id | Update a book by ID |
| DELETE | /books/:id | Delete a book by ID |

## Sample Book JSON

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction"
}
```

## Testing with Thunder Client

1. POST /books - Add 3 books
2. GET /books - Get all books
3. GET /books/:id - Get specific book
4. GET /books?genre=Fiction - Filter by genre
5. PUT /books/:id - Update a book
6. DELETE /books/:id - Delete a book
