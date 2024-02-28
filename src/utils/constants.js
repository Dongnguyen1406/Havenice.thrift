import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Sứ mệnh của chúng tôi là mang đến sự lựa chọn đa dạng và chắc chắn trong thế giới thời trang cổ điển và đồ cũ. Chúng tôi cam kết cung cấp sản phẩm chất lượng và khuyến khích tái chế, tái sử dụng để bảo vệ môi trường. Chúng tôi tin rằng mỗi món đồ là một bước nhỏ nhưng có ý nghĩa trong việc xây dựng một cộng đồng thời trang có trách nhiệm.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
    'Với mong muốn tạo ra một cộng đồng thời trang vintage và secondhand sôi động và bền vững, chúng tôi tin rằng mỗi món đồ trong tay bạn là một bước nhỏ trong hành trình chung của chúng ta để bảo vệ môi trường và thúc đẩy phong cách cá nhân bền vững.',  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Được thành lập bởi 6 thành viên đam mê với thời trang Vintage và đem tới phong cách mới cho công đồng Việt Nam về giá trị sản phẩm cũng như bảo vệ môi trường bằng thời trang bền vững.',
  },
]
