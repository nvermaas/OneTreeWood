# production environment
FROM nginx:latest
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# sudo docker run -d --name one-tree-wood -p 3080:80 --restart always middle-earth:5000/onetreewood:latest
# docker exec -it one-tree-wood bash