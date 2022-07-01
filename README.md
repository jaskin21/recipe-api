# Recipe-API

---

# Requirements

- [Node JS](https://nodejs.dev)
- [pnpm](https://pnpm.io)
- [Mongo DB](https://www.mongodb.com) _(Optional)_

---

# Installation

```sh
pnpm install
```

---

# Run Project

Once the dependencies are installed:

```sh
pnpm run start
```

---

# Environment

The Project has its own specific environment variables, just  add `.env` (dot env) file or copy the `.env.example` file and edit their values.

| ENV VARIABLE       | DESCRIPTION                                                                                                                    | TYPE               | REQUIRED | DEFAULT VALUE               |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------- | :----------------- | :------- | :-------------------------- |
| `DB_CONNECTION`    | For Mongo DB, usually the host                                                                                                 | `string`           | NO       | `mongodb://localhost:27017` |
| `DB_NAME`          | For Mongo DB, the database name                                                                                                | `string`           | NO       | `recipe-app`              |
| `PORT`             | The Port of the Server                                                                                                         | `number`           | NO       | `5000`                      |
| `TOKEN_EXPIRES_IN` | When will the Token expires, expressed in seconds or a string describing a time span                                           | `string \| number` | YES      | N/A                         |
| `TOKEN_SECRET`     | The Token Secret for JWT                                                                                                       | `string`           | YES      | N/A                         |
