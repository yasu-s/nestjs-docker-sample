FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションのソースをバンドルする
COPY . .

# パッケージインストール
RUN npm install -g yarn
RUN yarn install

# ビルド
RUN yarn build

EXPOSE 3000
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
