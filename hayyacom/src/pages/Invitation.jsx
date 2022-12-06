import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { ConfigProvider } from 'antd'
import arEG from 'antd/locale/ar_EG';
import { Modal } from 'antd';
import Footer from '../Component/Footer'
import { API_URL } from '../Config/api'

// css
const CardContainer = styled.div`
  height: 64px;
  padding:0 50px;
`
const Wrapper = styled.div`
padding:0px 50px;
font-family:sans-serif;
.nav{
  margin:16px 0px;
  font-size:14px
}
.nav span{
  color:rgba(0,0,0,.45);
  line-height: 1.5715
}
ul{
  list-style:none;
  color:rgba(0,0,0,.45);
  font-size:14px;
  height:47px
}
li{
  float:left;
  margin:12px 0;
  text-align:center;
  width:50%;
  cursor:pointer;
      &:hover
        {
          color:#1890ff;
        }
}  
  `
const Image = styled.img`
  display:block;
  width:100%
  `
const Wrapone = styled.div`
  padding:24px;
  .text{
    color:rgba(0,0,0,.45);
    font-size:14px
  }
  `



const Invitation = () => {

  const [image, setimage] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    data();
  }, [])

  const data = async () => {
    let res = await axios.get(`${API_URL}invitationPage/invitation-page-details/400`)
    setimage(res.data.CardData.invitation);
  }

  return (
    <>
      <CardContainer>
        {/* <div>home / invitation</div>
      <div><Image src={image} alt='' /></div> */}
      </CardContainer>
      <Wrapper>
        <div className='nav' >
          <span>Home /</span>
          <span style={{color:'black'}}>&nbsp;invitation</span>
        </div>
        <div>
          <Image src={image} alt="" />
        </div>
        <Wrapone >
          <div className='text' > Please review the invitation details, and then respond with acceptance or apology</div>
        </Wrapone>
        <ul>
          <li><p onClick={showModal}><AiOutlineCheck style={{marginBottom: '-2px'}}  />Acceptance</p></li>
          <li><p><AiOutlineClose style={{marginBottom: '-2px'}}  />Apology</p></li>
        </ul>
      </Wrapper>
      
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
     <Footer />
    </>
  )
}

export default Invitation