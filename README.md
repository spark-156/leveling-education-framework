# Leveling Education Framework
Better navigation for [HBO-I Domeinbeschrijving](https://www.hbo-i.nl/publicaties-domeinbeschrijving/) and Open-ICT Vaardigheden.

Full app built in [NextJS](https://nextjs.org) version 13 with [Material UI](https://mui.com) framework


# Updating Vaardigheden and/ or HBO-I
Make sure to update all supported languages json's in`/app/data`

# Environment variables
| Name | Example value | Type | Description |
| ----------- | ----------- | ----------- | ----------- |
| HOSTS | localhost, lef.open-ict.hu.nl | String | comma seperated list of all hosts that caddy should auto-generate https certificates and route for | 

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

# API documentation

The api is available under /api/v1

## Accept-Language header
This application has an `en` and `nl` translation. The by default returns the `nl` translation for all requests. If you wish to get the `en` version then you must set the `Accept-Language` header with `en` as its value. It will currently respond with a `501` error because there are no translations yet. But this is something to keep in mind later.

This Accept-Language header applies for all api routes.
## HBO-I
### Description 
Getting an up to date version of the hbo-i.json file under /app/data
### URL 
/api/v1/hboi

### Query Paramaters
| Paramater | Possible values |
| --- | --- |
| architectuurlaag | Gebruikersinteractie \| Organisatieprocessen \|Infrastructuur \| Software \| Hardwareinterfacing |
| activiteit | Analyseren \| Adviseren \| Ontwerpen \| Realiseren \| Manage & Control |
| niveau | 1 \| 2 \| 3 \| 4 |

### Errors
#### 501 Not Implemented
#### 400 Bad Request
```
{
    error: message
}
```

### Response
```
{
    [key: string]: {
        [key: string] {
            title: string,
            info: string
        }
    }
}
```


## Vaardigheden
### Description 
Getting an up to date version of the vaardigheden.json file under /app/data
### URL 
/api/v1/vaardigheden

### Errors
#### 501 Not Implemented
#### 400 Bad Request
```
{
    error: message
}
```

### Response
```
{
    [key: string]: {
        [key: string] {
            title: string,
            info: string
        }
    }
}
```

## Vaardigheid
### Description 
Getting an up to date version of the vaardigheden.json file under /app/data
### URL 
/api/v1/vaardigheden/{vaardigheid}

Possible `vaardigheid` values: 'Juiste kennis ontwikkelen', 'Kwalitatief product maken', 'Overzicht creëren', 'Kritisch oordelen', 'Samenwerken', 'Boodschap delen', 'Plannen', 'Flexibel opstellen', 'Pro-actief handelen', 'Reflecteren'

### Errors
#### 501 Not Implemented
#### 400 Bad Request
```
{
    error: message
}
```

### Response
```
{
    [key: string] {
        title: string,
        info: string
    }
}
```

