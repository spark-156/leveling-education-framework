# Leveling Education Framework
Better navigation for [HBO-I Domeinbeschrijving](https://www.hbo-i.nl/publicaties-domeinbeschrijving/) and Open-ICT Vaardigheden.

Frontend built in [React](https://reactjs.org) with [Ant Design](https://ant.design/) framework

Backend built in [FastAPI](https://fastapi.tiangolo.com/)

# Updating Vaardigheden and/ or HBO-I
Make sure to update the json's in both `frontend/src/json` & `backend/app/json`


# Environment variables
| Name | Example value | Type | Description |
| ----------- | ----------- | ----------- | ----------- |
| HOSTS | localhost, lef.open-ict.hu.nl | String | comma seperated list of all hosts that caddy should auto-generate https certificates and route for | 
| RATE_LIMIT_PER_MINUTE | 8 | Integer | Amount of requests that can be made to the api per minute |
| CACHE_CONTROL_MAX_AGE | 86400 | Integer | Amount of time in seconds that the browser should cache the response, 86400 is 1 day = 60s * 60m * 24h |

# Running in production
To run the application in a production environment run the following commands:

1. Rename `.env-prod` to `.env` and edit any values you need to edit.
2. Run the command `docker network create caddy`
3. Launch Caddy with `docker compose -f docker-compose.caddy.yml --env-file .env up -d`
4. Launch the application with `docker compose --env-file .env up -d`

# Contributing to Leveling Education Framework
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

# We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (Currently not implemented yet).
5. Make sure your code lints.
6. Issue that pull request and make sure to merge into the `dev` branch!

## Report bugs using Github's [issues](https://github.com/spark-156/leveling-education-framework/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/spark-156/leveling-education-framework/issues/new); it's that easy!

## License
By contributing, you agree that your contributions will be not be licensed and you lose all rights to your code.
