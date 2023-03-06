import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPreviewDetails } from '../../api/Preview';

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
        const preview = await getPreviewDetails(id);
        console.log(preview)
        setCardData(preview.CardData);
        setDesignData(preview.DesignData);
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
            <Wrapper>
                <div style={{ position: 'relative',margin:'100px 0px' }}>
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
                            <div>إجمالي &nbsp;&nbsp;إجمالي </div>
                            <div>2&nbsp;&nbsp;إجمالي الضيف</div>
                            <div>2&nbsp;&nbsp;عدد الأطفال</div>
                        </div>
                    }
                </div>
            </Wrapper>
        </>
    )
}

export default Preview
const Wrapper = styled.div`
padding: 0px;
// width: 100vw;
line-height:1.5714285714285714;
word-wrap:break-word;
    width :350px;
    margin-left:auto;
    margin-right:auto;
    @media only screen and (max-width: 480px) {
        padding:0px;
        width:100vw;
        line-height:1.5714285714285714;
        word-wrap:break-word;
    }
`
const InviteImage = styled.img`
     width: 100%;
     height:100%;
`