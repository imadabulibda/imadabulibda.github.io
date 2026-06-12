#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/icons"
BASE="https://cdn.simpleicons.org"

ICONS=(
  react vuedotjs nextdotjs typescript javascript redux html5 css3 sass
  tailwindcss mui styledcomponents axios graphql apollographql vite webpack
  nodedotjs express python django php laravel mongodb mysql docker
  nginx gitlab linux git github figma eslint prettier lumen
  linkedin telegram whatsapp jira
)

mkdir -p "$OUT"

LIGHT_ICONS=(nextdotjs apollographql express django github styledcomponents php mysql)

for icon in "${ICONS[@]}"; do
  if curl -sf "${BASE}/${icon}" -o "${OUT}/${icon}.svg"; then
    echo "✓ ${icon}"
  else
    echo "✗ ${icon}" >&2
  fi
done

for icon in "${LIGHT_ICONS[@]}"; do
  case "$icon" in
    styledcomponents) color="FFC0DD" ;;
    php) color="9AACDB" ;;
    mysql) color="5DADE2" ;;
    *) color="FFFFFF" ;;
  esac
  if curl -sf "${BASE}/${icon}/${color}" -o "${OUT}/${icon}-light.svg"; then
    echo "✓ ${icon}-light"
  else
    echo "✗ ${icon}-light" >&2
  fi
done

# CSS3 has no CDN slug — keep css3-light.svg as a hand-maintained white copy.
