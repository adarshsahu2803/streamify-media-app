# podstream-media-app

## Databse Tables

### User Table

| Field       | Type         | Constraints               |
|-------------|--------------|---------------------------|
| user_id     | INT          | Primary Key, Auto-increment |
| username    | VARCHAR(255) | Unique                    |
| email       | VARCHAR(255) | Unique                    |
| password_hash | VARCHAR(255)|                           |
| created_at  | TIMESTAMP    | Default: Current timestamp |
| updated_at  | TIMESTAMP    | Default: NULL              |

### Media Table

| Field         | Type         | Constraints               |
|---------------|--------------|---------------------------|
| media_id      | INT          | Primary Key, Auto-increment |
| user_id       | INT          | Foreign Key (User Table)  |
| title         | VARCHAR(255) |                           |
| description   | TEXT         |                           |
| file_url      | VARCHAR(255) |                           |
| thumbnail_url | VARCHAR(255) |                           |
| upload_date   | TIMESTAMP    | Default: Current timestamp |
| category_id   | INT          | Foreign Key (Category Table) |
| is_favorite   | BOOLEAN      | Default: FALSE            |

### Category Table

| Field       | Type         | Constraints               |
|-------------|--------------|---------------------------|
| category_id | INT          | Primary Key, Auto-increment |
| category_name | VARCHAR(255)| Unique                    |

### Favorites Table

| Field       | Type         | Constraints               |
|-------------|--------------|---------------------------|
| user_id     | INT          | Foreign Key (User Table)  |
| media_id    | INT          | Foreign Key (Media Table) |
| added_at    | TIMESTAMP    | Default: Current timestamp |

### Theme Preference Table

| Field            | Type         | Constraints               |
|------------------|--------------|---------------------------|
| user_id          | INT          | Foreign Key (User Table)  |
| theme_preference | VARCHAR(10)  | Enum: ('light', 'dark')   |
| updated_at       | TIMESTAMP    | Default: Current timestamp |