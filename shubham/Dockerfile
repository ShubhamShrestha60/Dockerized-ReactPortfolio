FROM node:18-alpine 
WORKDIR /app
COPY package.json ./
RUN npm install 

COPY . . 
RUN npm run build 

FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]