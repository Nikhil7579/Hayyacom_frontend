import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../Config/api';

const Preview = () => {
    const [cardData, setCardData] = useState([]);
    const [designData, setDesignData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const param = useParams();
    const id = param.id;
    useEffect(() => {
        PreviewDetails();
    }, [])

    const PreviewDetails = async () => {
        await axios.get(`${BASE_URL}invitationPage/preview-page/${id}`)
            .then((response) => {
                console.log(response);
                setCardData(response.data.CardData);
                setDesignData(response.data.DesignData);
            }).catch((error) => {
                console.log(error);
            })
    }

    const qrcss = {
        position: 'absolute',
        margin: 'auto',
        top: designData.QRH + "px",
        left: designData.QRW + "px",
        display: 'block',
        alignItems: 'center',
    }

    const sncss = {
        position: 'absolute',
        top: designData.SNH + "px",
        left: designData.SNW + "px",
        color: designData.textcolor,
    }

    const fonturls = designData.fontUrl;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>Gold Preview</title>
                <style>
                    {`
                         @font-face {
                            font-family: ${designData.fontfamily};
                            src: url(${fonturls});
                          }
                  `}
                </style>
            </Helmet>
            <Wrapper >
                <InviteImage src={cardData.entrance} onLoad={() => setLoaded(true)} />
                {loaded &&
                    <div
                        style={qrcss}
                    >
                        <QRCode
                            value={"hello"}
                            size={designData.QRsize}
                            fgColor={designData.QRcolor}
                            bgColor={designData.bgcolorQR === null ? 'white' : designData.bgcolorQR}
                        />
                    </div>
                }
                {loaded &&
                    <div
                        style={sncss}
                    >
                        {cardData.id + '100'}
                    </div>
                }
                {loaded &&
                    <div
                        // style={textcss}
                        // className='hello'
                        style={{
                            color: designData.textcolor,
                            position: 'absolute',
                            top: designData.TextH + "px",
                            left: designData.TextW + "px",
                            fontFamily: designData.fontfamily,
                            fontWeight: designData.fontweight,
                            fontSize: designData.fontsize + "px",
                            textAlign: 'center',
                            width: '250px',
                        }}
                    >
                        <div>Guest Name&nbsp;&nbsp;</div>
                        <div>2&nbsp;&nbsp;إجمالي الضيف</div>
                        <div>2&nbsp;&nbsp;عدد الأطفال</div>

                    </div>
                }
            </Wrapper>
        </>
    )
}

export default Preview
const Wrapper = styled.div`
    position : relative;
    width :350px;
    margin-left:auto;
    margin-right:auto;
    @media only screen and (max-width: 480px) {
        margin-left:0;
    margin-right:0;
    width:100%;
    }
`
const InviteImage = styled.img`
     width: 100%;
     height:100%;
`