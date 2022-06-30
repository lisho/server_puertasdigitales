# Dockerfile

# base image
FROM node:15

# create & set working directory
#RUN mkdir -p /usr/server
WORKDIR /app

# copy source files
#COPY . /usr/server

# install dependencies
RUN npm install

# COPY . .

# start app desarrolllo
# RUN npm run build

EXPOSE 3030
#CMD node index.js
CMD npm run start