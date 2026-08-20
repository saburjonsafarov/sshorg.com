#!/usr/bin/env bash
# Ручной деплой sshorg.com: заливает site/ на VPS. Настройки — через env или дефолты ниже.
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-root@49.13.146.50}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/sshorg}"
DEPLOY_KEY="${DEPLOY_KEY:-$HOME/.ssh/budget_bot_ci}"

scp -i "$DEPLOY_KEY" site/* "$DEPLOY_HOST:$DEPLOY_PATH/"
curl -s -o /dev/null -w "https://sshorg.com -> %{http_code}\n" https://sshorg.com
