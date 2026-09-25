#!/usr/bin/env sh
# Prints the site files the server may still hold but the repo no longer ships:
# every path that was ever committed under site/ minus what site/ holds now.
# Deploys copy files but never delete, so both deploy paths pipe this list into
# `rm` on the server. Files that never came from this repo are never listed.
# Needs full git history (actions/checkout with fetch-depth: 0).
set -eu

cd "$(git rev-parse --show-toplevel)"
ever="$(mktemp)"
now="$(mktemp)"
trap 'rm -f "$ever" "$now"' EXIT

# --no-renames lists a renamed file's old path too, so it gets cleaned up.
git -c core.quotepath=off log --format= --name-only --no-renames -- site/ \
  | sed -n 's|^site/||p' | LC_ALL=C sort -u > "$ever"
(cd site && find . -type f | sed 's|^\./||' | LC_ALL=C sort -u) > "$now"
LC_ALL=C comm -23 "$ever" "$now"
