# Review API Spec

## create Review

-- Endpoint : post /api/products/:product_id/reviews

Request Body

```json
{
  "ratting": 3,
  "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam."
}
```

Response body ( success )

```json
{
  "data": {
    "ratting": 3,
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam."
  }
}
```

Response body ( failed )

```json
{
  "message": "failed Prosess"
}
```

## Delete review

-- Endpoint : Delete /api/products/:product_id/reviews/review_id

Response Body (Success)

```json
{
  "message": "OK"
}
```
