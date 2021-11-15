# nuxt-shopping-card-app


## Api Setup

create `.env` file in `api` directory

put your environment variables into `.env` file

```
DEV_DB_USERNAME=
DEV_DB_PASSWORD=
DEV_DB_DATABASE=
DEV_DB_HOST=
DEV_DIALECT=postgres

PROD_DB_USERNAME=
PROD_DB_PASSWORD=
PROD_DB_DATABASE=
PROD_DB_HOST=
PROD_DIALECT=postgres

SESSION_SECRET=
```

## DB Setup

1. install `sequelize-cli` package globally
2. change permission of the `run.sh`
3. then run `run.sh` file to initialize your db.

```
$ npm install -g sequelize-cli
$ chmod +x api/run.sh
$ ./api/run.sh
```



## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3200
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```