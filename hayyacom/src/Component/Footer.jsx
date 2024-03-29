import React from 'react'
import styled from 'styled-components'


const Footer = ({ lang, footer, loading ,errmsg}) => {
  // console.log(lang);
  const url = `https://api.whatsapp.com/send/?phone=${footer.WhatsappnumberURL}&text&type=phone_number&app_absent=0whatsApp`
  return (
    <>
      {lang === "ar" && loading === false && errmsg===false &&
        <FooterBar>
          <div>
            <a href={url}>WhatsApp</a> لمزيد من المعلومات ، يرجى الاتصال عبر
            <p>{footer.FooterAR} </p>
          </div>
        </FooterBar>
      }
      {lang === "en" && loading === false && errmsg===false &&
        <FooterBar>
          <div>
            For more information, please contact via <a href={url}>WhatsApp</a>
            <p>{footer.FooterEN} </p>
          </div>
        </FooterBar>
      }
    </>
  )
}

export default Footer
const FooterBar = styled.footer`

  font-size:14px;
  color:rgba(0,0,0,.85);
  text-align:center;

  @media only screen and (max-width: 480px) {
    width:100%;
    font-size:11px;
   }
   a{
      color:#1890ff;
      text-decoration: none;
   }
   p{
     margin:5px 0px;
   }
   `