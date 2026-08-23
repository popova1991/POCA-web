# Параметры (переопредели при вызове: make push DOCKER_USER=myuser)
DOCKER_USER ?= your-dockerhub-user
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

# Собрать и запушить в Docker Hub (нужен docker login)
push: build
	docker push $(IMAGE):$(TAG)
