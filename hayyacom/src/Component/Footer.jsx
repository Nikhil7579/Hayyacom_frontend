import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.footer`
  padding:48px 50px;
  font-size:14px;
  color:rgba(0,0,0,.85);
  text-align:center;

  a{
     color:#1890ff;
     text-decoration: none;
  }`

const Footer = () => {
  return (
    <>
     <FooterBar>
        <div>
          <p>
            For assistance and more information, please <a href="/"> click here to contact via WhatsApp</a>
          </p>
          <p>All rights reserved to Hayyakum Foundation</p>
        </div>
      </FooterBar>
    </>
  )
}

export default Footer