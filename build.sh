docker rm frontend --force
docker build -t frontend .
docker run --name frontend -p 80:80 -d frontend:latest
