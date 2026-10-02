#!/usr/bin/env bash
# ========================================================================= #
# Script de Deploy e Atualização Automática • Outubro Rosa Banpará          #
# Servidor Hostinger VPS (Ubuntu 24.04 LTS + Docker)                        #
# ========================================================================= #

set -e

echo "🌸 [1/4] Puxando atualizações do repositório Git..."
git pull origin main || git pull origin master

echo "🐳 [2/4] Parando containers anteriores..."
docker compose down --remove-orphans || true

echo "🔨 [3/4] Construindo nova imagem e iniciando container..."
docker compose up -d --build

echo "🔍 [4/4] Verificando status do serviço..."
sleep 2
docker compose ps

echo "✨ Deploy concluído com sucesso no Banpará Outubro Rosa!"
