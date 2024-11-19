FROM nginx:1.23.3
COPY ./dist/angular-example-app /usr/share/nginx/html
# Toimiiko muutos?
COPY nginx.conf ./nginx.conf

EXPOSE 8080 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
