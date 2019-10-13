FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
COPY package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 3000
EXPOSE 3001
CMD node -r dotenv/config ./node_modules/@nestjs/cli/bin/nest.js start --webpack
