import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import imageabout from '../assets/imageabout.jpg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={imageabout} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          Chúng tôi là [ Havenice.thrift
], nơi mang đến cho bạn những trải nghiệm thời trang độc đáo và bền vững. Bắt nguồn từ đam mê với thế giới thời trang vintage và secondhand, chúng tôi đã hình thành một câu chuyện đầy cảm hứng và ý nghĩa. Tại đây, chúng tôi không chỉ cung cấp các sản phẩm chất lượng mà còn lan tỏa thông điệp về việc bảo vệ môi trường và tôn trọng lịch sử thời trang. Hãy cùng chúng tôi khám phá hành trình đặc biệt này và kết nối qua những mảnh ghép độc đáo của chúng tôi.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
