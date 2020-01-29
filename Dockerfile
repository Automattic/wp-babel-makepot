FROM node:13.7-stretch-slim

# /src is where we expect source javascript to run our babel config over
RUN mkdir /src

# /babel is where we drop babel javascript output -- todo: code: false, ast: true?
RUN mkdir /babel

# `cwd`/build/ is the default output location for @automattic/babel-plugin-i18n-calypso
RUN mkdir /build

# Copy + install packages
COPY ./package.json /
COPY ./package-lock.json /
RUN npm install

# Copy over babel config
COPY ./babel.config.json /

# /src is user code lives, /build is pot file output, /babel is babel transpiled output (preferably we disable this)
VOLUME /src /build /babel

# Entrypoint runs babel with required params
ENTRYPOINT /node_modules/.bin/babel /src --out-dir /babel

# Any extra parameters after `docker run wp-babel-makepot` will replace this value
CMD "--ignore \"src/node_modules/*\"\,\"src/**/*.spec.js\"\,\"src/**/*.test.js\""
