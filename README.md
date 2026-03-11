# Events

## Project Setup

###
```bash
cp .env.example .env
```

```bash
docker compose up --build -d
```

### Project link
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8080](http://localhost:8080)

## API Documentation

### Events

#### 1. Get List of Events
`GET /events`

Returns a paginated list of events.

**Query Parameters (Optional):**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string): Search by title
- `dateFrom` (string): Filter events with date >= value
- `dateTo` (string): Filter events with date <= value

**Response Body:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Tech Conference 2026",
      "date": "2026-03-15T10:00:00Z",
      "location": "Kyiv, Ukraine",
      "shortDescription": "A conference about future technologies.",
      "description": "Join us for a deep dive into AI, Web3, and futuristic hardware."
    }
  ],
  "total": 11,
  "page": 1,
  "limit": 6,
  "totalPages": 2
}
```

#### 2. Get Event by ID
`GET /events/:id`

Returns detailed information about a single event.

**Response Body:**
```json
{
  "id": 1,
  "title": "Tech Conference 2026",
  "date": "2026-03-15T10:00:00Z",
  "location": "Kyiv, Ukraine",
  "shortDescription": "A conference about future technologies.",
  "description": "Join us for a deep dive into AI, Web3, and futuristic hardware."
}
```

#### 3. Register to Event
`POST /events/:id/register`

Registers a user for event.

**Request Body:**
```json
{
  "fullName": "string",
  "email": "valid email",
  "phone": "string"
}
```

**Response Body:**
```json
{
  "success": true,
  "message": "Registration successful"
}
```