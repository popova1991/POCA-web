#!/bin/sh
#
# Сборка и пуш Docker-образов poca-web (frontend) и poca-backend (бот).
# Использование: ./build.sh
#
# Секреты передаются в backend при запуске через docker secrets (файлы в /run/secrets/).
#
set -eu

DOCKER_USER="richardgear"
WEB_IMAGE="${DOCKER_USER}/poca-web:latest"

echo "==> Сборка и пуш frontend: ${WEB_IMAGE} (linux/amd64)"
docker buildx build --platform linux/amd64 -t "${WEB_IMAGE}" --push .

echo "==> Готово! На VPS запустите:"
echo "    ./deploy/speca-app-update.sh"
