#!/bin/sh
#
# Запускать НА СЕРВЕРЕ после `make push` (или `docker push`):
#   ./deploy/speca-app-update.sh
#
# По умолчанию образ: richardgear/poca-web:latest
# Порт контейнера всегда 80 (внутри nginx), наружу 8080 (HOST_PORT).
#
set -eu

DOCKER_USER="richardgear"
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
