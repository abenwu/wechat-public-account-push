/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7f56866354fa84fc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3797c8ca10a0cb7b9487fe083c022909',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小邹总',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "obbjO6nSc2UU6LIMH0qCRCiqn3Os",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fnlM70N6YdGwVPQwAZz1t28athtUajYvboxtmN7AHhg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小邹总宝宝', year: '2000', date: '10-15',
        },
                  ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-16' },
              ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0OHhC9j_Hb0YGLRh1Y3ikOQ_ylF33fviHUxh0QklZxk',

  CALLBACK_USERS: [
    {
      name: 'obbjO6tb6rzQUXyCO3bcXenIP9oM',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

