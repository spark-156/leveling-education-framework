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
