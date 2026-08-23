#!/usr/bin/env bash
#
# Запускать НА СЕРВЕРЕ после `make push` (или `docker push`):
#   ./deploy/update.sh
#
# По умолчанию берёт образ <your-dockerhub-user>/poca-web:latest.
# Переопределить имя можно: DOCKER_USER=myuser ./deploy/update.sh
#
set -euo pipefail

DOCKER_USER="${DOCKER_USER:-your-dockerhub-user}"
IMAGE="${DOCKER_USER}/poca-web:latest"
CONTAINER_NAME="poca-web"
HOST_PORT="${HOST_PORT:-8080}"

echo "==> Обновление образа: ${IMAGE}"
docker pull "${IMAGE}"

echo "==> Пересоздание контейнера ${CONTAINER_NAME} (порт ${HOST_PORT}:80)"
docker stop "${CONTAINER_NAME}" || true
docker rm "${CONTAINER_NAME}" || true

docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  -p "${HOST_PORT}:80" \
  "${IMAGE}"

echo "==> Готово. Контейнер ${CONTAINER_NAME} запущен."
