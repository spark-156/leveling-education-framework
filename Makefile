start:
	docker compose -f docker-compose.caddy.yml --env-file .env up -d 
	docker compose --env-file .env up -d 

build:
	docker compose build

run:
	docker compose up

logs:
	docker compose logs -f

down:
	docker compose down
