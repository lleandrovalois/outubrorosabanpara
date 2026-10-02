# Imagem base leve e segura com Nginx Alpine
FROM nginx:alpine

# Instala curl para suporte ao healthcheck
RUN apk add --no-cache curl

# Remove a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia todos os arquivos da aplicação web
COPY index.html /usr/share/nginx/html/
COPY base-site.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY banpara-logo.png /usr/share/nginx/html/
COPY image-removebg.png /usr/share/nginx/html/
COPY laco-outubro-rosa.png /usr/share/nginx/html/
COPY qr-code.jpeg /usr/share/nginx/html/
COPY hero-mulheres.jpg /usr/share/nginx/html/
COPY guia-autoexame.jpg /usr/share/nginx/html/

# Ajusta permissões de leitura para o Nginx
RUN chmod -R 755 /usr/share/nginx/html

# Expõe a porta 80 do container
EXPOSE 80

# Verificação de integridade (Healthcheck)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Comando padrão de inicialização
CMD ["nginx", "-g", "daemon off;"]
