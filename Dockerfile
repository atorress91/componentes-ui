# Utiliza una imagen base de Node.js 18 para compilar la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación Angular
RUN npm run build -- --configuration production

# Utiliza una imagen base de NGINX para servir la aplicación
FROM nginx:alpine

# Copia los archivos de compilación a la carpeta de NGINX
COPY --from=build /app/dist/componentes-ui /usr/share/nginx/html

# Copia la configuración de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto en el que NGINX estará sirviendo la aplicación
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
