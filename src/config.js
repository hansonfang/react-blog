import React from 'react'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
export const API_BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://47.95.123.147:6060' : 'http://127.0.0.1:6060'

// project config
export const HEADER_BLOG_NAME = '房晓松的博客' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/shameless.jpg'), // 侧边栏头像
  // avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  title: 'Hansonfang', // 标题
  subTitle: '前端坑深，劝君慎入', // 子标题
  // 个人主页
  homepages: {
    github: 'https://github.com/hansonfang',
    juejin: 'https://juejin.im/user/598d61fd6fb9a03c3c14cde8'
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * loadingType: github 登录中 等待的加载方式
 *  loadingType 1 采用路由方式跳转至一个路由组件，需要在 github 中设置好回调路径 如 www.guodada.fun/github 跳转到 /github 页面
 *  loadingType 2 采用 Spin 组件包裹形式 等待 loading... 详见 AppMain.jsx 组件
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: 'c6a96a84105bb0be1fe5', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize', // 跳转的登录的地址
  loadingType: 1
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}
