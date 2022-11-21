FROM docker.io/node:16.17.1

WORKDIR /home/node
COPY .yarn/releases/ .yarn/releases
COPY .yarnrc.yml package.json yarn.lock .
RUN yarn install

COPY src/ src
COPY data/ data

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
