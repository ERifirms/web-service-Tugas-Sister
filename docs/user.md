# Product API Spec

## find all users

-- Endpoint : GET /api/users

response Body ( success )

```json
{
  "data": [
    {
      "username": "Jhon Doe",
      "email": "jhonDoe@gmail.com",
      "dateBirday": "01 12 2000"
    }
  ]
}
```

response ( failed )

```json
{
  "message": "user not found"
}
```

## find One User:

-- Endpoint : GET /api/users/{id}

response Body ( success )

```json
{
  "data": {
    "username": "Jhon Doe",
    "email": "jhonDoe@gmail.com",
    "dateBirday": "01 12 2000"
  }
}
```

response Body ( failed )

```json
{
  "message": "user not found"
}
```

## Update User

Request Body :

```json
{
  "username": "erikUpdate",
  "password": "new_password",
  "dateBirday": "20 10 2003"
}
```

response Body ( success )

```json
{
  "data": {
    "username": "Jhon Doe",
    "email": "jhonDoe@gmail.com",
    "dateBirday": "01 12 2000"
  }
}
```

response Body ( failed )

```json
{
  "message": "user not found"
}
```
