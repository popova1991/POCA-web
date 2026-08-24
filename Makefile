# Параметры (переопредели при вызове: make push DOCKER_USER=myuser)
DOCKER_USER ?= richardgear
IMAGE       := $(DOCKER_USER)/poca-web
TAG         ?= latest

.PHONY: install build run-local push

# Локально: поставить зависимости
install:
	npm install

# Собрать Docker-образ
build:
	docker build -t $(IMAGE):$(TAG) .

# Запустить собранный образ локально (проверка)
run-local: build
	docker run --rm -p 8080:80 $(IMAGE):$(TAG)

# Собрать под amd64 и запушить в Docker Hub (нужен docker login).
# Сервер обычно amd64, а собираем на Mac (arm64) — указываем платформу явно.
push:
	docker buildx build --platform linux/amd64 -t $(IMAGE):$(TAG) --push .
