#!/bin/sh
#
# Сборка и пуш Docker-образов poca-web (frontend) и poca-backend (бот).
# Использование: ./build.sh
#
# Секреты передаются в backend при запуске через docker secrets (файлы в /run/secrets/).
#
set -eu

DOCKER_USER="richardgear"
BACKEND_IMAGE="${DOCKER_USER}/poca-backend:latest"

echo "==> Сборка и пуш backend: ${BACKEND_IMAGE} (linux/amd64)"
docker buildx build --platform linux/amd64 -t "${BACKEND_IMAGE}" --push backend/

echo "==> Готово! На VPS запустите:"
echo "    ./deploy/poca-backend-update.sh"
