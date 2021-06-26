# NLW Values

## Rules

### Register User

- [x] You can't register users with the same email
- [x] You can't register users without email
- [x] You can't register users without password

### Register Tag

- [x] You can't register tag without name
- [x] You can't register tags with the same name
- [x] You can't register tag if you`re not an admin

### Register Compliments

- [x] You can't register a compliment to yourself
- [x] You can't register a compliment to an invalid user
- [x] You can't register a compliment with an invalid tag
- [x] You must be logged in to register a compliment

## TODO

- [x] Centralize the Secret used by the JWT
- [x] Change database SQLite to MySQL
- [x] Deploy (Heroku)
- [ ] Verify email on user create
- [ ] Add Frontend
- [ ] Send compliment email to user receiver
- [ ] Refactor to Clean Architecture
- [ ] Add search tag by name
- [ ] Add search user by name
- [ ] Improve logs (sentry)
- [ ] Add custom error handles
