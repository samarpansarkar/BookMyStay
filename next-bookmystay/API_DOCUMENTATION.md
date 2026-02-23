# BookMyStay API Documentation

## Base URL

`/api`

## Authentication

All protected routes require a JWT token passed via the `token` cookie. The backend will verify user roles (e.g., `admin`, `host`, `customer`) for authorization based on the endpoint requirements.

---

## 1. Auth Endpoints

### 1.1 Signup

- **Endpoint**: `POST /api/auth/signup`
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "customer" // optional, defaults to 'customer'
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "customer"
    }
  }
  ```

### 1.2 Login

- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticate a user and set JWT cookie
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: `200 OK`
  ```json
  {
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "customer"
    }
  }
  ```

---

## 2. Property Endpoints

### 2.1 Get All Properties

- **Endpoint**: `GET /api/properties`
- **Description**: Fetch all properties. (Can add query params for search/filter in future).
- **Request**: None
- **Response**: `200 OK`
  ```json
  {
    "properties": [
      {
        "_id": "60d...",
        "title": "Beautiful Beachhouse",
        "description": "...",
        "pricePerNight": 120,
        "location": "Miami",
        "images": ["url1"],
        "host": "host_id"
      }
    ]
  }
  ```

### 2.2 Get Single Property

- **Endpoint**: `GET /api/properties/[id]`
- **Description**: Fetch a single property by its ID.
- **Request**: None
- **Response**: `200 OK`
  ```json
  {
    "property": { ... }
  }
  ```

### 2.3 Create Property

- **Endpoint**: `POST /api/properties`
- **Description**: Create a new property. **Requires `host` or `admin` role.**
- **Request Body**:
  ```json
  {
    "title": "Beautiful Beachhouse",
    "description": "A nice place to stay.",
    "location": "Miami, FL",
    "pricePerNight": 150,
    "capacity": 4,
    "amenities": ["WiFi", "Pool"],
    "images": ["https://image.url"]
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "property": { ... }
  }
  ```

### 2.4 Update Property

- **Endpoint**: `PUT /api/properties/[id]`
- **Description**: Update an existing property. **Requires `host` (must be owner) or `admin` role.**
- **Request Body**: (Any property fields to update)
- **Response**: `200 OK`

### 2.5 Delete Property

- **Endpoint**: `DELETE /api/properties/[id]`
- **Description**: Delete a property. **Requires `host` (must be owner) or `admin` role.**
- **Request**: None
- **Response**: `200 OK`

---

## 3. Booking Endpoints

### 3.1 Create Booking

- **Endpoint**: `POST /api/bookings`
- **Description**: Book a property. **Requires authentication.**
- **Request Body**:
  ```json
  {
    "propertyId": "property_id_here",
    "checkInDate": "2026-03-01T00:00:00.000Z",
    "checkOutDate": "2026-03-05T00:00:00.000Z",
    "guests": 2,
    "totalPrice": 600
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "booking": { ... }
  }
  ```

### 3.2 Get User Bookings

- **Endpoint**: `GET /api/bookings`
- **Description**: Get all bookings for the currently logged-in user (or host's properties if host). **Requires authentication.**
- **Request**: None
- **Response**: `200 OK`
  ```json
  {
    "bookings": [ ... ]
  }
  ```

### 3.3 Cancel Booking

- **Endpoint**: `PATCH /api/bookings/[id]/cancel`
- **Description**: Cancel a booking. **Requires authentication (must be booker or host/admin).**
- **Request Body**: None or `{"status": "cancelled"}`
- **Response**: `200 OK`

---

## 4. Review Endpoints

### 4.1 Get Property Reviews

- **Endpoint**: `GET /api/properties/[id]/reviews`
- **Description**: Get all reviews for a specific property.
- **Request**: None
- **Response**: `200 OK`
  ```json
  {
    "reviews": [ ... ]
  }
  ```

### 4.2 Add Review

- **Endpoint**: `POST /api/properties/[id]/reviews`
- **Description**: Add a review to a property. **Requires authentication.**
- **Request Body**:
  ```json
  {
    "rating": 5,
    "comment": "Amazing stay!"
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "review": { ... }
  }
  ```
