#!/bin/sh
#
# Запускать НА СЕРВЕРЕ после `make push` (или `docker push`):
#   ./deploy/speca-app-update.sh
#
# По умолчанию образ: richardgear/poca-web:latest
# Порт контейнера всегда 80 (внутри nginx), наружу 8080 (HOST_PORT).
# Контейнер работает в docker-сети poca-network вместе с poca-backend.
#
# Секреты в frontend не передаются — их читает только poca-backend
# (смотри deploy/poca-backend-update.sh).
#
set -eu

DOCKER_USER="richardgear"
IMAGE="${DOCKER_USER}/poca-web:latest"
CONTAINER_NAME="poca-web"
NETWORK_NAME="poca-network"
HOST_PORT="${HOST_PORT:-8080}"

echo "==> Обновление образа: ${IMAGE}"
docker pull "${IMAGE}"

echo "==> Создание сети ${NETWORK_NAME} (если ещё нет)"
docker network create "${NETWORK_NAME}" >/dev/null 2>&1 || true

echo "==> Пересоздание контейнер ${CONTAINER_NAME} (порт ${HOST_PORT}:80)"
docker stop "${CONTAINER_NAME}" || true
docker rm "${CONTAINER_NAME}" || true

docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  --network "${NETWORK_NAME}" \
  -p "${HOST_PORT}:80" \
  "${IMAGE}"

echo "==> Готово. Контейнер ${CONTAINER_NAME} запущен в сети ${NETWORK_NAME}."