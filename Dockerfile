FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションのソースをバンドルする
COPY ./package.json .
COPY ./dist ./dist

# パッケージインストール
RUN npm install --production

EXPOSE 3000
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
