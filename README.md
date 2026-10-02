# Espaço Mulher Banpará • Outubro Rosa 2026

Página web responsiva e interativa desenvolvida como extensão oficial do portal do **Banpará (Banco do Estado do Pará)**, servindo como ambiente de recepção para mulheres que acessam via **QR Code da campanha Outubro Rosa**.

---

## 🌸 Funcionalidades da Aplicação

- **Área de Boas-Vindas:** Recepção humanizada com identificação da campanha oficial via QR Code.
- **Card 1 - Autoexame das Mamas:** Guia didático passo a passo (espelho, banho e deitada) e infográfico detalhado com sinais de alerta.
- **Card 2 - A Importância de Se Cuidar:** Calculadora dinâmica por faixa etária (20-39, 40-49, 50+ anos) com protocolos da Sociedade Brasileira de Mastologia e INCA.
- **Card 3 - Locais de Apoio no Pará:** Diretório de hospitais e unidades de referência pública (Hospital Ophir Loyola, Policlínica Metropolitana, HRBA em Santarém, HRSP em Marabá, Hospital de Castanhal e Carreta da Mulher) com filtro por região e discagem rápida.
- **Card 4 - Quiz Mitos e Verdades:** Gamificação educativa com 5 perguntas, feedback explicativo e pontuação.
- **Card 5 - Banpará Delas:** Linha de microcrédito e fomento *Empodera Banpará* e Seguro Mulher com geração de protocolo para contato de consultoras.
- **Card 6 - Agendamento de Lembrete:** Cálculo de data do próximo preventivo com geração de arquivo `.ics` (Apple Calendar/Outlook) e botão de 1 clique para o Google Agenda.
- **Card 7 - Linha Direta e Canais de Acolhimento:** Disque 136 (SUS), Ligue 180 (Central da Mulher), Disque 188 (CVV) e 0800 280 6605 (SAC Banpará).

---

## 🚀 Como Hospedar no Servidor (Hostinger VPS - Ubuntu 24.04 com Docker)

### 1. Conectar na VPS via SSH
No seu terminal local (PowerShell ou Terminal Linux/Mac):
```bash
ssh root@SEU_IP_DO_SERVIDOR
```

### 2. Clonar o Repositório
```bash
git clone https://github.com/lleandrovalois/outubrorosabanpara.git
cd outubrorosabanpara
```

### 3. Subir a Aplicação com Docker Compose
O projeto já conta com `Dockerfile` (Nginx Alpine otimizado com Gzip, cache e headers de segurança) e `docker-compose.yml`:

```bash
docker compose up -d --build
```

A aplicação estará rodando imediatamente na porta `8090` do seu servidor:
👉 `http://SEU_IP_DO_SERVIDOR:8090/`

---

## 🔄 Como Atualizar a Aplicação na VPS

Para atualizar sempre que fizer um novo push no GitHub, basta executar:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🔒 Configuração de Domínio e HTTPS / SSL (Opcional)

Se você já utiliza um proxy reverso no servidor (como **Nginx Proxy Manager**, **Traefik**, **Caddy** ou **Cloudflare**):

1. No `docker-compose.yml`, se a porta 80 já estiver ocupada pelo proxy, altere para uma porta livre (ex: `"8080:80"` ou `"3000:80"`):
   ```yaml
   ports:
     - "8080:80"
   ```
2. Aponte o seu domínio (ex: `outubrorosa.banpara.b.br` ou seu subdomínio) para essa porta com SSL automático ativado.

---

## 📁 Estrutura do Repositório

```text
├── index.html            # Landing page Outubro Rosa Banpará
├── base-site.html        # Portal Banpará integrado com o banner superior
├── app.js                # Lógica interativa (quiz, filtros, lembrete, modais)
├── nginx.conf            # Configuração do Nginx (Gzip, Cache, Segurança)
├── Dockerfile            # Imagem de produção baseada em Nginx Alpine
├── docker-compose.yml    # Orquestração do container
├── deploy.sh             # Script de deploy em 1 comando para Ubuntu
├── .dockerignore         # Arquivos ignorados na imagem Docker
├── .gitignore            # Arquivos ignorados no Git
└── Ativos Visuais:
    ├── banpara-logo.png
    ├── image-removebg.png
    ├── laco-outubro-rosa.png
    ├── qr-code.jpeg
    ├── hero-mulheres.jpg
    └── guia-autoexame.jpg
```
