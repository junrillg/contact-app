# Contact APP

> A simple application that display contact list, that is build on react and laravel

### Requirements

- Node `10.15.0` or newer
- npm `6.9.0` or newer
- PHP `7.3.3` or newer

### Setup

- Update the `./.env` and provide values based on the database setup

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=contacts_app
DB_USERNAME=root
DB_PASSWORD=
```

- run `php artisan serve`
- open `http://localhost:8000/` in the browser

### Development

- During development please run `npm run watch` when doing react changes
