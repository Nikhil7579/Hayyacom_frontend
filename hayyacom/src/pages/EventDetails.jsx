import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Footer from '../Component/Footer';
import { BASE_URL } from '../Config/api';

const EventDetails = () => {
    const [cardData, setCardData] = useState([]);
    const [Eventdetails, setEventdetails] = useState([]);
    const [FooterDetails, setFooterDetails] = useState([]);
    const param = useParams();
    const id = param.id;
    const lang = param.lang;

    useEffect(() => {
        EventData();
    }, [])

    const EventData = async () => {
        await axios.get(`${BASE_URL}invitationPage/Event-page-details/${id}`)
            .then((response) => {
                console.log(response);
                setCardData(response.data.CardData)
                setEventdetails(response.data.EventDetailsData)
                setFooterDetails(response.data.InvitationPage)
                console.log(Eventdetails.LocationURL)
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Event Details</title>
            </Helmet>
            <EventWrapper>
                {cardData.media === "video" &&
                    <div>
                        <Video controls>
                            <source src={cardData.invitation} type="video/mp4" />
                            <source src={cardData.invitation} type="video/ogg" />
                        </Video>
                    </div>
}
                    {cardData.media === "image" &&
                    <div style={{padding:'10px 50px 10px 50px'}}>
                    <Image src={cardData.invitation} />
                    </div>
                }
                {lang === "en" ?
                    <div>
                        <Title>Event Details</Title>
                        <EngDetailsWrapperone >
                            <div style={{ padding: '5px' }}>Event Title:</div>
                            <div style={{ padding: '3px' }}>{Eventdetails.EventTitle}</div>
                        </EngDetailsWrapperone>
                        <EngDetailsWrapper >
                            <div style={{ padding: '5px' }}>Date:</div>
                            <div style={{ padding: '5px' }}>{Eventdetails.EventDate}</div>
                        </EngDetailsWrapper>
                        <EngDetailsWrapperone >
                            <div style={{ padding: '5px' }}> Time:</div>
                            <div style={{ padding: '5px' }}>{Eventdetails.EventTime}</div>
                        </EngDetailsWrapperone>
                        <EngDetailsWrapper>
                            <div style={{ padding: '5px' }}>Location Name:</div>
                            <div style={{ padding: '3px' }}>
                                {Eventdetails.LocationName}</div>
                        </EngDetailsWrapper>
                        <EngDetailsWrapperone >
                            <div style={{ width: '80px', padding: '5px' }}>Location Url:</div>
                            <div style={{ overflowWrap: 'anywhere', padding: "3px" }}>
                                <a href={Eventdetails.LocationURL} style={{ textDecoration: 'none', color: '#79000b' }} target='_blank'>{Eventdetails.LocationURL}</a>
                            </div>
                        </EngDetailsWrapperone>
                        <EngDetailsWrapper>
                            <div style={{ padding: '5px' }}>City:</div>
                            <div style={{ padding: '3px' }}>
                                {Eventdetails.City}</div>
                        </EngDetailsWrapper>
                        <EngDetailsWrapperone>
                            <div style={{ padding: '5px' }}>Country:</div>
                            <div style={{ padding: '3px' }}>{Eventdetails.Country}</div>
                        </EngDetailsWrapperone>
                        <EngDetailsWrapper >
                            <div style={{ padding: '5px' }}>Inviters:</div>
                            <div style={{ padding: '5px' }}>
                                {Eventdetails.Inviters}</div>
                        </EngDetailsWrapper>
                        <EngDetailsWrapperone >
                            <div style={{ padding: '5px' }}>Inviters Contact:</div>
                            <div style={{ padding: '5px' }}>{Eventdetails.InvitersContact}</div>
                        </EngDetailsWrapperone>
                        <EngDetailsWrapper >
                            <div style={{ width: '93px', padding: '5px' }}>Snapchat Lense:</div>
                            <div style={{ overflowWrap: 'anywhere', padding: "5px" }}>
                                <a href={Eventdetails.LocationURL} style={{ textDecoration: 'none', color: '#79000b' }} target='_blank'>{Eventdetails.SnapchatURL}</a>
                            </div>
                        </EngDetailsWrapper>
                    </div>
                    :
                    <div>
                        <Title>تفاصيل الحدث</Title>
                        <ArabicdetailsWrapperone >
                            <div style={{ padding: '5px' }}>{Eventdetails.EventTitle}</div>
                            <div style={{ padding: '5px',direction:'rtl' }}>تفاصيل الدعوة:</div>
                        </ArabicdetailsWrapperone>
                        <ArabicdetailsWrapper /* style={{ display: 'flex', fontSize: '14px', borderStyle: 'solid', borderWidth: ' 0px 0', backgroundColor: '#a9a9a9', borderColor: '#c9c9c9', color: '#79000b', justifyContent: 'right' }} */>
                            <div style={{ padding: '5px' }}>{Eventdetails.EventDate}</div>
                            <div style={{ padding: '3px',direction:'rtl' }}>التاريخ:</div>
                        </ArabicdetailsWrapper>
                        <ArabicdetailsWrapperone /* style={{ display: 'flex', fontSize: '14px', borderStyle: 'solid', borderWidth: ' 0.5px 0', backgroundColor: '#a9a9a9', borderColor: '#c9c9c9', color: '#79000b', justifyContent: 'right' }} */>
                            <div style={{ padding: '5px' }}>{Eventdetails.EventTime}</div>
                            <div style={{ padding: '3px' ,direction:'rtl'}}>الوقت:</div>
                        </ArabicdetailsWrapperone>
                        <ArabicdetailsWrapper >
                            <div style={{ padding: '5px' }}>{Eventdetails.LocationName}</div>
                            <div style={{ padding: '5px',direction:'rtl' }}>الموقع:</div>
                        </ArabicdetailsWrapper>
                        <ArabicdetailsWrapperone >
                            <div style={{ overflowWrap: 'anywhere', padding: "5px" }}>
                                <a href={Eventdetails.LocationURL} style={{ textDecoration: 'none', color: '#79000b' }} target='_blank'>{Eventdetails.LocationURL}</a>
                            </div>
                            <div style={{ width: '68x', padding: '3px',direction:'rtl' }}>رابط الموقع:</div>
                        </ArabicdetailsWrapperone>
                        <ArabicdetailsWrapper >
                            <div style={{ padding: '3px' }}>{Eventdetails.City}</div>
                            <div style={{ padding: '5px',direction:'rtl' }}> المدينة:</div>
                        </ArabicdetailsWrapper>
                        <ArabicdetailsWrapperone >
                            <div style={{ padding: '5px' }}>{Eventdetails.Country}</div>
                            <div style={{ padding: '5px' ,direction:'rtl'}}>الدولة:</div>
                        </ArabicdetailsWrapperone>
                        <ArabicdetailsWrapper >
                            <div style={{ padding: '5px',direction:'rtl' }}>{Eventdetails.Inviters}</div>
                            <div style={{ padding: '5px',direction:'rtl' }}>الداعيين:</div>
                        </ArabicdetailsWrapper>
                        <ArabicdetailsWrapperone >
                            <div style={{ padding: '5px' }}>{Eventdetails.InvitersContact}</div>
                            <div style={{ padding: '3px' ,direction:'rtl'}}>رقم التواصل للداعيين:</div>
                        </ArabicdetailsWrapperone>
                        <ArabicdetailsWrapper >
                            <div style={{ overflowWrap: 'anywhere', padding: "5px" }}>
                                <a href={Eventdetails.LocationURL} style={{ textDecoration: 'none', color: '#79000b' }} target='_blank'>{Eventdetails.SnapchatURL}</a>
                            </div>
                            <div style={{ width: '120px', padding: '3px',direction:'rtl' }}>رابط عدسة سناب شات:</div>
                        </ArabicdetailsWrapper>
                    </div>
                }
<br />
                <Footer lang={lang} footer={FooterDetails} />

            </EventWrapper>

        </>
    )
}

export default EventDetails

const EventWrapper = styled.div`
// padding:50px 50px 0px 50px;
margin:0px;
max-width:100%;
font-family:AdobeCleanRegular;
@media only screen and (max-width: 480px) {
    max-height:1000px;
    min-height:450px;
    font-family:AdobeCleanRegular;
    max-width:100%;
    `
const Title = styled.div`
    text-align: center;
     color: #79000b;
     `
const Video = styled.video`
    padding:10px 50px 10px 50px;
    display:block;
    height:400px;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 480px) {
    padding:10px 50px 10px 50px;
     margin-left: auto;
    margin-right: auto;
    max-width:300px;
    height:350px;
        }
  `
const Image = styled.img`
    // padding:10px 50px 10px 50px;
  display:block;
  height:550px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 480px) {
//   padding:10px 50px 10px 50px;
  max-height:400px;
width:100%;
// margin:0px;
//     margin-left: auto;
//   margin-right: auto;
      }
      `

    const EngDetailsWrapper = styled.div`
     display: flex; 
     font-size: 14px; 
     border-style: solid; 
     border-width: 0px 0;
     background-color: #a9a9a9;
     border-color: #c9c9c9;
     color: #79000b
      `
      const EngDetailsWrapperone = styled.div`
      display: flex; 
      font-size: 14px; 
      border-style: solid; 
      border-width: 0.5px 0;
      background-color: #a9a9a9;
      border-color: #c9c9c9;
      color: #79000b
       `
       const  ArabicdetailsWrapper= styled.div`
       display: flex; 
       font-size: 14px;
        border-style: solid;
        border-width: 0px 0;
         background-color: #a9a9a9; 
         border-color: #c9c9c9;
          color: #79000b;
       justify-content: right;
        `
       const  ArabicdetailsWrapperone= styled.div`
        display: flex; 
        font-size: 14px;
         border-style: solid;
         border-width: 0.5px 0;
          background-color: #a9a9a9; 
          border-color: #c9c9c9;
           color: #79000b;
        justify-content: right; 
        `
const Heading = styled.div`
      padding-left:5px;
      font-size:14px;
    //   color:#6F0A12;
    color:#7d0812;
      display:inline;
      `
const EnglishWrapper = styled.div`
      display:flex;
      margin: auto;
      `
const ArabicWrapper = styled.div`
      display:flex;
        margin: auto;
       justify-content: right;
     `
const ArabicHeading = styled.div`
      padding-right:5px;
      font-size:14px;
    //   color:#6F0A12;
    color:#7d0812;
      direction: rtl;
      `
const Data = styled.div`
      padding-left:5px;
      font-size:14px;
    //   color:#6F0A12;
    color:#7d0812;
      display:inline;
      `
const ArabicData = styled.div`
      font-size:14px; 
      padding-right:5px;
    //   color:#6F0A12;
    color:#7d0812;
      `
