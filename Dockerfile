# --- ESTÁGIO 1: BUILD ---
# Usamos uma imagem oficial do Node.js. A tag "alpine" significa que é uma versão super leve.
# Damos um "apelido" a este estágio: "builder".
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de definição de pacotes.
# Fazemos isso em um passo separado para aproveitar o cache do Docker.
# Se esses arquivos não mudarem, o Docker não vai rodar "npm install" de novo.
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências do projeto.
RUN npm install

# Copia todo o resto do código-fonte do projeto para o contêiner.
COPY . .

# Recebe a URL da API como argumento de build
ARG REACT_APP_BASE_URL
# Define a variável de ambiente para que o npm run build possa enxergá-la
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

# Executa o script de build do React para gerar a pasta /build com os arquivos estáticos.
RUN npm run build

# --- ESTÁGIO 2: PRODUÇÃO ---
# Começamos de novo, a partir de uma imagem leve do Nginx.
FROM nginx:stable-alpine

# Copia APENAS a pasta "build" gerada no estágio anterior ("builder")
# para a pasta onde o Nginx serve os arquivos.
COPY --from=builder /app/build /usr/share/nginx/html

# Copia o nosso arquivo de configuração customizado do Nginx para dentro do contêiner.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Informa ao Docker que o contêiner vai expor a porta 80.
EXPOSE 80

# Comando para iniciar o servidor Nginx quando o contêiner for executado.
CMD ["nginx", "-g", "daemon off;"]