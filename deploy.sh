#!/usr/bin/env bash
# Ручной деплой sshorg.com: заливает site/ на VPS. Настройки — через env или дефолты ниже.
# Кэш-бастинг: ?v=dev в index.html подменяется на git-хэш+время, чтобы браузеры
# не держали старые app.js/style.css после деплоя (version skew ломает i18n).
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-root@49.13.146.50}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/sshorg}"
DEPLOY_KEY="${DEPLOY_KEY:-$HOME/.ssh/budget_bot_ci}"

VERSION="$(git rev-parse --short HEAD 2>/dev/null || date +%s)-$(date +%H%M)"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

# -R и явный .well-known: глоб site/* не захватывает скрытые директории
cp -R site/* site/.well-known "$STAGE/"
sed -i '' "s/?v=dev/?v=$VERSION/g" "$STAGE/index.html"

scp -r -i "$DEPLOY_KEY" "$STAGE"/* "$STAGE/.well-known" "$DEPLOY_HOST:$DEPLOY_PATH/"
curl -s -o /dev/null -w "https://sshorg.com -> %{http_code} (v=$VERSION)\n" https://sshorg.com
