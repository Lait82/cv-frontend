# Etapa de construcción
FROM node:18-alpine as build

WORKDIR /var/www/frontend

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build
