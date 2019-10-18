import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: 'HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面',
    rate: 3
  },
  {
    label: 'react vue 框架：熟练掌握使用',
    rate: 3
  },
  {
    label: '熟悉移动端以及PC端页面的基本布局以及兼容性',
    rate: 3
  },
  {
    label: ' es6：日常开发必备，以及掌握基本面向对象编程实现',
    rate: 3
  },
  {
    label: 'webpack: 可以对脚手架进行针对性的打包配置',
    rate: 2
  },
  {
    label: 'node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计',
    rate: 2
  }
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation='left'>博客简述</Divider>
      <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
      <p>
        源码地址为 <Href href='https://github.com/hansonfang/react-blog'>github</Href>
        ，仅供参考，禁止商用
      </p>

      <Divider orientation='left'>关于我</Divider>

      <ul className='about-list'>
        <li>姓名：房晓松</li>
        <li>学历专业：本科 计算机科学与技术</li>
        <li>
          联系方式：
          <Icon type='qq' /> 1597700958
          <Divider type='vertical' />
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='fang1597700958@gmail.com'>fang1597700958@gmail.com</a>
        </li>
        <li>坐标：北京 Beijing</li>
        <li>
          其他博客地址：
          <Href href='https://juejin.im/user/598d61fd6fb9a03c3c14cde8'>掘金主页</Href>
        </li>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
        <li>
          其他
          <ul>
            <li>常用开发工具： vscode、git、iTerm2</li>
            <li>熟悉的 UI 工具： element-ui、Vuetify</li>
            <li>良好的代码习惯： 略微代码洁癖、注释规范、《代码整洁知道》资深受益者</li>
          </ul>
        </li>
        <li>
          个人
          <ul>
            <li>偶尔玩玩游戏、看看书</li>
            <li>欢迎交流！</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
