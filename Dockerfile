FROM node:alpine 

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]

#docker build . -t name
#docker run --- or go to docker tab rightclick the latest image and then run
