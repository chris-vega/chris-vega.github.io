#!/usr/bin/env bash
# ==============================================================================
# Domain Switch Automation Script
# Usage: ./scripts/switch-domain.sh [NEW_DOMAIN]
# Default: chris-vega.fyi
# ==============================================================================

set -euo pipefail

NEW_DOMAIN="${1:-chris-vega.fyi}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

echo "=========================================================="
echo " Preparing Domain Switchover to: ${NEW_DOMAIN}"
echo "=========================================================="

cd "${REPO_DIR}"

# 1. Update CNAME
echo "[1/4] Updating CNAME to ${NEW_DOMAIN}..."
echo "${NEW_DOMAIN}" > CNAME

# 2. Update _config.yml
echo "[2/4] Updating _config.yml url..."
sed -i '' "s|^url: .*|url: https://${NEW_DOMAIN}|" _config.yml

# 3. Rebuild local preview files if build script exists
if [ -f "build_preview.py" ]; then
  echo "[3/4] Rebuilding HTML previews..."
  python3 build_preview.py
fi

echo "[4/4] Verifying changes..."
git status --short CNAME _config.yml

echo ""
echo "=========================================================="
echo " DOMAIN SWITCHOVER PREPARED SUCCESSFULLY!"
echo "=========================================================="
echo ""
echo "Next Steps to Finalize:"
echo "1. Configure DNS Records for ${NEW_DOMAIN}:"
echo "   - Apex (@) A records pointing to GitHub Pages IPs:"
echo "       185.199.108.153"
echo "       185.199.109.153"
echo "       185.199.110.153"
echo "       185.199.111.153"
echo "   - CNAME (www) pointing to: chris-vega.github.io"
echo ""
echo "2. In GitHub repository settings (Settings > Pages):"
echo "   - Verify Custom domain is set to ${NEW_DOMAIN}"
echo "   - Ensure 'Enforce HTTPS' is checked (after certificate issues)"
echo ""
echo "3. (Optional) In Cloudflare/DNS for chris-vega.us:"
echo "   - Add a 301 Redirect Rule: https://chris-vega.us/* -> https://${NEW_DOMAIN}/\$1"
echo ""
echo "4. Commit and push changes:"
echo "   git add CNAME _config.yml && git commit -m 'Update custom domain to ${NEW_DOMAIN}' && git push origin main"
echo "=========================================================="
