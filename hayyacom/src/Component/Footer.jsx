import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.footer`

  font-size:14px;
  color:rgba(0,0,0,.85);
  text-align:center;

  a{
     color:#1890ff;
     text-decoration: none;
  }`

const Footer = ({udata}) => {
  const url = `https://api.whatsapp.com/send/?phone=${udata.phoneNumber}&text&type=phone_number&app_absent=0whatsApp`
  return (
    <>
     <FooterBar>
        <div>
          <p>
            For more information, please contact via <a href={url}>WhatsApp</a>
          </p>
          <p>all rights reserved @ Hayyacomapp</p>
        </div>
      </FooterBar>
    </>
  )
}

export default Footer