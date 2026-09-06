#!/bin/sh
#
# Сборка Docker image с secrets через build args
# Использование: ./build.sh
#
# Перед сборкой создайте .env.local (не коммитится в git):
#   VITE_TG_BOT_TOKEN=ваш_токен
#   VITE_TG_CHAT_ID=ваш_chat_id
#
set -eu

DOCKER_USER="richardgear"
IMAGE="${DOCKER_USER}/poca-web:latest"

if [ ! -f .env.local ]; then
  echo "ОШИБКА: Файл .env.local не найден!"
  echo "Создайте его с содержимым:"
  echo "  VITE_TG_BOT_TOKEN=ваш_токен"
  echo "  VITE_TG_CHAT_ID=ваш_chat_id"
  exit 1
fi

. ./.env.local

if [ -z "${VITE_TG_BOT_TOKEN:-}" ] || [ -z "${VITE_TG_CHAT_ID:-}" ]; then
  echo "ОШИБКА: VITE_TG_BOT_TOKEN или VITE_TG_CHAT_ID не заданы в .env.local"
  exit 1
fi

echo "==> Сборка образа: ${IMAGE}"
docker build \
  --build-arg VITE_TG_BOT_TOKEN="${VITE_TG_BOT_TOKEN}" \
  --build-arg VITE_TG_CHAT_ID="${VITE_TG_CHAT_ID}" \
  -t "${IMAGE}" .

echo "==> Пуш образа в Docker Hub"
docker push "${IMAGE}"

echo "==> Готово! Теперь на VPS запустите: ./deploy/speca-app-update.sh"
