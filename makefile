.PHONY: start stop restart build

start:
	docker-compose up --detach

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start

build:
	docker-compose exec node npm run build
