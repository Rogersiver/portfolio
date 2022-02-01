# base image
FROM node:14.17.3-alpine
WORKDIR /usr/app
COPY . .
RUN npm ci --only=production
RUN npm run build
CMD [ "npm", "start" ]

# docker build <path> -t <repo_name>:<tag>
# docker build . -t nextjs-app:latest
# docker run -p 3000:3000 nextjs-app