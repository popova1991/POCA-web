#!/bin/sh
#
# Запускать НА СЕРВЕРЕ для обновления контейнера с ботом:
#   ./deploy/poca-backend-update.sh
#
# Образ: richardgear/poca-backend:latest
# Контейнер слушает только внутри docker-сети poca-network (порт наружу не открыт).
#
# Секреты читаются из файлов:
#   /opt/speca-app/secrets/tg_bot_token.txt
#   /opt/speca-app/secrets/tg_chat_id.txt
#   /opt/speca-app/secrets/tg_proxy.txt  (опционально: прокси для обхода блокировки TG)
#
set -eu

DOCKER_USER="richardgear"
IMAGE="${DOCKER_USER}/poca-backend:latest"
CONTAINER_NAME="poca-backend"
NETWORK_NAME="poca-network"
SECRETS_DIR="${SECRETS_DIR:-/opt/speca-app/secrets}"

echo "==> Обновление образа: ${IMAGE}"
docker pull "${IMAGE}"

echo "==> Создание сети ${NETWORK_NAME} (если ещё нет)"
docker network create "${NETWORK_NAME}" >/dev/null 2>&1 || true

echo "==> Пересоздание контейнера ${CONTAINER_NAME}"
docker stop "${CONTAINER_NAME}" || true
docker rm "${CONTAINER_NAME}" || true

# Собираем доп. аргументы в позиционные параметры
set --
if [ -f "${SECRETS_DIR}/tg_proxy.txt" ]; then
  set -- -v "${SECRETS_DIR}/tg_proxy.txt:/run/secrets/tg_proxy:ro"
  echo "    > обнаружен tg_proxy.txt, прокси будет подключён"
fi

docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  --network "${NETWORK_NAME}" \
  -v "${SECRETS_DIR}/tg_bot_token.txt:/run/secrets/tg_bot_token:ro" \
  -v "${SECRETS_DIR}/tg_chat_id.txt:/run/secrets/tg_chat_id:ro" \
  "$@" \
  "${IMAGE}"

echo "==> Готово. Контейнер ${CONTAINER_NAME} запущен в сети ${NETWORK_NAME}."
