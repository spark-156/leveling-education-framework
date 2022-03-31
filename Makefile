start:
	docker compose up -d

build:
	docker compose build

run:
	docker compose up

logs:
	docker compose logs -f

down:
	docker compose down

prod-start:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

prod-build:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml build

prod-logs:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml logs -f

prod-down:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml down
