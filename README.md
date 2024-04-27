# REST-API-EXPRESS-MONGO

Use Node、Express and MongoDB create a RESTFUL API

## Study

- [MongoDB Official](https://www.mongodb.com/)
- [MongoDB Download](https://www.mongodb.com/try/download/community)

```bash
pnpm add express mongoose nodemon dotenv
```

1. Express 将被用于中间件，以创建各种 CRUD 端点
2. Mongoose 用于使用各种查询来管理 MongoDB 中的数据
3. Nodemon 用于在我们每次保存文件时重新启动我们的服务器
4. Dotenv 管理 .env 文件

### MongoDB

- NoSQL
- 面向文档存储的数据库
- 由C++语言编写的开源数据库
- 分布式文件存储系统
- 文件存储格式为BSON（一种JSON的扩展）

## Quick Start

### Install Deps

```bash
pnpm i
```

### Config Env

In the `.env` file, configure your MongoDB address and other config.

### Activate

```bash
pnpm start
```

## Usage

You can create a model in the `app/models` directory and reference it using `app/models/tutorials.schema.js`.

## Contribute

Contributions are welcome, PR is welcome, More references [LeoStar's Contribute](https://github.com/ileostar/contribute)
