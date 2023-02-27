import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BASE_URL } from '../Config/api';


const Preview = () => {
    const [carddata, setCardData] = useState([]);
    const [designdata, setDesignData] = useState([]);
    const param = useParams();
    let id = param.id
    useEffect(() => {
        Previewdata();
    }, [])
    const Previewdata = async () => {
        await axios.get(`${BASE_URL}invitationPage/preview-page/${id}`)
            .then((res) => {
                console.log(res);
                setCardData(res.data.CardData);
                setDesignData(res.data.DesignData);
                console.log(designdata.fontUrl.length)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div>
                <div>
                    <EntranceImage src={carddata.entrance} alt="preview image" />
                </div>
            </div>
            <PreviewWrapper>
                <div>
                    <QrDesignHeading>QRcolor</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.QRcolor}</QrDesignValue>
                </div>
                <hr />
                <div>
                    <QrDesignHeading>
                        bgcolorQR</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>
                        {designdata.bgcolorQR}
                    </QrDesignValue>
                </div>
                <hr />

                <div>
                    <QrDesignHeading>infocolor</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.infocolor}</QrDesignValue>
                </div>
                <hr />

                <div>
                    <QrDesignHeading>Text color</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.textcolor}</QrDesignValue>

                </div>
                <hr />

                <div>
                    <QrDesignHeading>Fontsize</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.fontsize}</QrDesignValue>

                </div>
                <hr />

                <div>
                    <QrDesignHeading>Font family</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.fontfamily}</QrDesignValue>

                </div>
                <hr />

                <div>
                    <QrDesignHeading >Font url</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{ display: 'inline', fontSize: '12px',whiteSpace:"nowrap" }}>{designdata.fontUrl}</div>
                </div>
                <hr />

                <div>
                    <QrDesignHeading>Font weight</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.fontweight}</QrDesignValue>

                    <hr />
                </div>
                <div>
                    <QrDesignHeading>TextH</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.TextH}</QrDesignValue>

                    <hr />
                </div>
                <div>
                    <QrDesignHeading>TextW</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.TextW}</QrDesignValue>

                    <hr />
                </div>
                <div>
                    <QrDesignHeading>SNW</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.SNW}</QrDesignValue>

                    <hr />
                </div>
                <div>
                    <QrDesignHeading>SNH</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.SNH}</QrDesignValue>

                    <hr />
                </div>
                <div>
                    <QrDesignHeading>QR size</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.QRsize}</QrDesignValue>

                    <hr />
                </div><div>
                    <QrDesignHeading>QRH
                    </QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.QRH  }</QrDesignValue>
                    <hr />
                </div><div>
                    <QrDesignHeading>QRW</QrDesignHeading>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <QrDesignValue>{designdata.QRW}</QrDesignValue>

                    <hr />
                </div>
             
            </PreviewWrapper>
        </>
    )
}

export default Preview
const PreviewWrapper = styled.div`
width:100%;
margin:0px`
const EntranceImage = styled.img`
width:100%;
height:100%;
`
const QrDesignHeading = styled.div`
display:inline;
color:#6F0A12;
font-weight:600;
padding:5px;
font-size:14px
`
const QrDesignValue = styled.div`
display:inline;
font-size:14px

`
