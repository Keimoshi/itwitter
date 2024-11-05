"use strict"

const bcrypt = require("bcryptjs")
const faker = require("faker")

module.exports = {
  up: (queryInterface, Sequelize) => {
    // 创建管理员用户
    const admin = {
      email: "admin@example.com",
      password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)),
      name: "Admin",
      introduction: "I am the administrator",
      avatar: "/images/default-avatar.png",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // 创建测试用户
    const users = Array.from({ length: 5 }).map((_, index) => ({
      email: `user${index + 1}@example.com`,
      password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)),
      name: `User${index + 1}`,
      introduction: faker.lorem.sentence(),
      avatar: "/images/default-avatar.png",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('Users', [admin, ...users], {})
      .then(() => {
        // 创建推文
        const tweets = Array.from({ length: 20 }).map(() => ({
          UserId: Math.floor(Math.random() * 6) + 1,
          description: faker.lorem.paragraph(),
          createdAt: faker.date.past(),
          updatedAt: new Date()
        }))
        return queryInterface.bulkInsert('Tweets', tweets, {})
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
      .then(() => queryInterface.bulkDelete('Tweets', null, {}))
  }
}
