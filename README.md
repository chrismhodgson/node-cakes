# node-cakes

A simple API to add, delete and list cakes written using typescript, express and mongoose. Runs via a docker container which contains the mongo database.

## Install and run it

```sh
npm i && npm build && docker-compose up
```

## Endpoints

Runs on port `3001` by default

Access the routes in your browser at the following base url `http://localhost:3001/api/v1/cake`. Note: You can optionally change the API port from `80` to something else in the docker-compose file

- `GET /` - return a paginated set of cakes using optional query string params `page` and `limit` which defaults to 0 and 25 respectively
- `GET /:id` - return a single cake by id
- `POST /` - add a cake. Example below showing JSON structure of the request body

```
{
  "name": "cheese cake",
  "imageUrl": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a",
  "comments": "it doesnt taste of cheese",
  "yumFactor": 5
}
```

- `DELETE /:id` - delete a cake by id
