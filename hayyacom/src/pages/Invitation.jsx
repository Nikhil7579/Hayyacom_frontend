import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
// import { AiOutlineClose } from 'react-icons/ai'
import { Button, Space } from 'antd'
import { Modal } from 'antd';
import { BASE_URL } from '../Config/api'
import QRCode from "react-qr-code";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import '../index.css';
import { Helmet } from "react-helmet";
import WebFont from 'webfontloader';
import { formatMuiErrorMessage } from '@mui/utils';


// css
const Wrapper = styled.div`
padding:0px 0px;
// font-family:sans-serif;
@media only screen and (max-width: 480px) {
    max-height:1000px;
    min-height:450px;
.toast-container{
background:#6f0a12;
}

  `
const Image = styled.img`
  display:block;
  margin-top:20px;
  width:97%;
  margin:22px;
  @media only screen and (max-width: 480px) {
  max-width:93%;
  margin-top:20px;
  margin:10px;
  min-height:350px;
  max-height:750px;
      }

  `
const Video = styled.video`
  display:block;
  margin-top:20px;
  width:97%;
  margin:22px;
  @media only screen and (max-width: 480px) {
  max-width:93%;
  margin-top:20px;
  margin:10px;
  min-height:350px;
  max-height:750px;
      }
`
const InviteImage = styled.img`
//   max-width: 95%;
  width: 100%;
//   margin:8px;
`
const InviteBody = styled.div`
    position: absolute;
    // z-index: 1;
    width: 100%;
    height: 100%;
    top: 30px;
    left:2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
 `
const QRContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const InfoContainer = styled.div`
    text-align: center;
    display: inline;
    // padding: 10px;
    justify-content:center;
    align-items:center;      
`

const FooterBar = styled.footer`

  font-size:14px;
  color:rgba(0,0,0,.85);
  text-align:center;
 
  @media only screen and (max-width: 480px) {
   width:100%;
   font-size:10px;
  }
  a{
     color:#1890ff;
     text-decoration: none;
  }

  `
const WrapperButton = styled.div`

.btn1{
    margin: 10px; color: white; background-color: #145629; width:48%;height:50px;
}
.btn2{
    margin: 10px; color: white; background-color: #6f0a12; width:48%;height:50px;
}
.btn3{
    margin: 10px; color: white; background-color: #145629; width:48%;height:50px;
}
.btn4{
    margin: 10px; color: white; background-color: #6f0a12; width:48%;height:50px;
}
@media only screen and (max-width: 480px) {
    display:flex;
    align-items: center;

    .btn1{
     max-width:40%;
     margin:10px 0px 10px 30px;
     margin-top:25px;
     height:40px;
     font-weight:bold;
    }
    .btn2{
        max-width:40%;
        height:40px;
        margin:10px;
        margin-top:25px;
        font-weight:bold;
       }
       .btn3{
        max-width:40%;
        margin:10px;
        margin-top:25px;
        height:40px;
        font-weight:bold;
       }
       .btn4{
           max-width:40%;
           height:40px;
           margin:10px 0px 10px 30px;
           margin-top:25px;
           font-weight:bold;

          }
   }
`
const Text = styled.div`
@media only screen and (max-width: 480px) {

}
`



const Invitation = () => {


    const [image, setimage] = useState([]);
    const [totalguest, setTotalguest] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpentwo, setIsModalOpentwo] = useState(false);
    const [invite, setInvite] = useState([])
    const [value, setValue] = useState()
    const [values, setValues] = useState([])
    const [udata, setData] = useState([])
    const [demo, setDemo] = useState([])
    const [msgdata, setMsgdata] = useState([])
    const [datadata, setdatadata] = useState()
    const [change, changeData] = useState('');
    const [optiontwo, setOptiontwo] = useState('')
    const [optionthree, setOptionthree] = useState('')
    const [optionfour, setOptionfour] = useState('')
    const [optionfive, setOptionfive] = useState('')
    const [footer, setFooter] = useState([]);

    // Reject Modal State
    const [isrejectedModalOpen, setIsRjectedModalOpen] = useState(false);
    const handleOkreject = () => {
        setIsRjectedModalOpen(false);
    };
    const handleCancelreject = () => {
        setIsRjectedModalOpen(false);
    };

    // Param
    const params = useParams();
    const id = params.id;
    const lang = params.lang;

    // whatsapp link
    const url = `https://api.whatsapp.com/send/?phone=${footer.WhatsappnumberURL}&text&type=phone_number&app_absent=0whatsApp`


    // reject toast language wise
    const reject = () => {
        toast.error("Invitation has been Rejected, You cannot change invitation status. Please contact inviter to modify your status")
    };

    const rejectarabic = () => {
        toast.error("تم رفض الدعوة ، لا يمكنك تغيير حالة الدعوة. يرجى الاتصال بالدعوة لتعديل حالتك")
    };


    const attendToast = () => {
        toast.error("Invitation has been attend you can not change the invitation status !")
    };

    const arabicattendToast = () => {
        toast.error("تم حضور الدعوة ولا يمكنك تغيير حالة الدعوة")
    };


    const showModal = async (type) => {
        if (demo.attended > 0) {
            setIsModalOpen(false)
            setIsRjectedModalOpen(false)
            setIsModalOpentwo(false)
            if (params.lang === "ar") {
                arabicattendToast();
            }
            else {
                attendToast();
            }
        }
        else {
            if (change === 2) {
                setOptiontwo(true)
            }
            else if (change === 3) {
                setOptionthree(true)
            }
            else if (change === 4) {
                setOptionfour(true)

            }
            else if (change === 5) {
                setOptionfive(true)

            }
            // console.log(type)
            setdatadata(type)
            let data = {
                InvitationId: demo.id,
                status: type,
                total_guest: totalguest,
            }
            // console.log(datadata)
            // console.log(demo.status)
            if (totalguest < 2 && type === "Accepted" && demo.status === null) {
                setIsModalOpen(true);
                const response = await axios.put(`${BASE_URL}invitationPage/update-status`, (data))
                console.log(response)
            }
            else if (totalguest > 1 && type === "Accepted" && demo.status === null) {

                setIsModalOpentwo(true);
            } else if (demo.status === "Accepted") {
                // console.log(true)
                setIsModalOpen(true);

            }
            // else if (demo.attended.length > 0 ) {
            //     setIsModalOpen(false)
            //     setIsRjectedModalOpen(false)
            //     setIsModalOpentwo(false)
            //     if (params.lang === "ar") {
            //         arabicattendToast();
            //     }
            //     else {
            //         attendToast();
            //     }
            // }
            else if (demo.status === "Rejected") {
                setIsModalOpen(false);
                if (params.lang === "ar") {
                    rejectarabic();
                }
                else {
                    reject();
                }
            }
        }

        // console.log(data)
    };
    const statusApi = async (datadata, type) => {
        // console.log(change)
        // console.log(datadata)
        // console.log(type)
        let data = {
            InvitationId: demo.id,
            status: "Accepted",
            total_guest: change,
        }
        // console.log(data)

        const response = await axios.put(`${BASE_URL}invitationPage/update-status`, (data))
        console.log(response)

        if (response.status === 200) {
            // toast.info(response.data.message)
            setIsModalOpentwo(false);
            setIsModalOpen(true);
            InvitationApidata();


        }

    }
    const showModalRejected = async (type) => {

        let reject = {
            InvitationId: demo.id,
            status: "Rejected",
            total_guest: change,
        }
        if (demo.attended > 0) {
            console.log('greater than 0 ')
            if (params.lang === "ar") {
                arabicattendToast();
            }
            else {
                attendToast();
            }
        }
        else {
            const response = await axios.put(`${BASE_URL}invitationPage/update-status`, (reject))
            console.log(response)
            setIsRjectedModalOpen(true)
            InvitationApidata()
        }
    }
    const handleOk = () => {
        setIsModalOpen(false);
        setIsModalOpentwo(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalOpentwo(false);
    };
    useEffect(() => {
        InvitationApidata();
        // loadFonts();
    }, [totalguest])


    // invitation data api Integration
    const InvitationApidata = async () => {
        let res = await axios.get(`${BASE_URL}invitationPage/invitation-page-details/${id}`)
        // http://178.128.35.221:6000/invitationPage/invitation-page-details/2100
        setimage(res.data.CardData);
        setTotalguest(res.data.ContactData.totalGuest)
        const article = res.data.ContactData
        changeData(article.totalGuest)
        // setDatacontact(res.data.ContactData.totalGuest)
        setValue(res.data.invitationData.total_guest)
        setData(res.data.ContactData)
        setMsgdata(res.data.MessageData)
        setValues(res.data.DesignData)
        setInvite(res.data.QRData)
        setDemo(res.data.invitationData)
        console.log(res);
        setFooter(res.data.InvitationPageData);
        // console.log(invite.invitationId)
        // console.log('values', values);
        // console.log(values.QRsize)
    }

    // const mystyle = {
    //     position: 'absolute',
    //     top: '150px',
    //     left: '170px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     fontSize: values.fontsize,
    // }


    const qrcss = {
        position: 'absolute',
        // top: '150px',
        margin: 'auto',
        top: values.QRH + "px",
        // left: '170px',
        left: values.QRW + "px",
        display: 'flex',
        alignItems: 'center',
    }



    const sncss = {
        position: 'absolute',
        // top: '300px',
        top: values.SNH + "px",
        // left: '210px',
        left: values.SNW + "px",
        color: values.textcolor,

    }
    const contentcss = {
        color: values.textcolor,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
    // const hello = 'Noto Nastaliq Urdu'

    const textcss = {
        position: 'absolute',
        top: values.TextH + "px",
        left: values.TextW + "px",
        fontFamily: values.fontfamily,
        fontWeight: values.fontweight,
        fontSize: values.fontsize + "px",
    }

    const numbercss = {
        position: 'relative',
        top: values.NumberH + "px",
        left: values.NumberW + "px",
        display: 'inline'
    }
    

    WebFont.load({
        google: {
            families: [`BlakaInk-Regular`],
            // urls:[`https://app.hayyacom.net:3009/Font/BlakaInk-Regular.ttf`]
        }
    })



    return (
        <>
            <ToastContainer
                autoClose={2000}
                position="top-right"
                className="toast-container"
                toastClassName="dark-toast"
                theme="colored"
                width='400px'
                toastStyle={{ backgroundColor: '#6F0A12' }}
            />


            <Wrapper >
                <div >
                    {image.media === "video" ?
                        <div>

                            <Video controls>
                                <source src={image.invitation} type="video/mp4" />
                                <source src={image.invitation} type="video/ogg" />
                            </Video>
                        </div>
                        :
                        <Image src={image.invitation} alt="/" />
                    }
                </div>
                {params.lang === "ar" ?
                    <WrapperButton>
                        <Button type="none" className='btn4' onClick={() => showModalRejected("Rejected")} >رفض</Button>
                        <Button type="none" className='btn3' onClick={() => showModal("Accepted")} >قبول</Button>
                    </WrapperButton>
                    :
                    <WrapperButton>
                        <Button type="none" className='btn1' onClick={() => showModal("Accepted")}  >Accept</Button>
                        <Button type="none" className='btn2' onClick={() => showModalRejected("Rejected")} >Reject</Button>
                    </WrapperButton>
                }
                {params.lang === "ar" ?
                    <FooterBar>
                        <div style={{ fontFamily:'BlakaInk-Regular'}}>
                            لمزيد من المعلومات ، يرجى الاتصال عبر  <a href={url}>WhatsApp</a><br />
                            <p>{footer.FooterAR} </p>
                        </div>
                    </FooterBar>
                    :
                    <FooterBar>
                        <div >
                            For more information, please contact via <a href={url}>WhatsApp</a><br />
                            <p>{footer.FooterEN} </p>
                        </div>
                    </FooterBar>
                }
            </Wrapper>

            {/*  select guest modal start */}

            <Modal
                open={isModalOpentwo}
                onCancel={handleCancel}
                footer={[]}
                centered
                onOk={handleOk}
                closable={false}
                className="newStylemodeltwo"
            >
                <div>
                    <br />
                    {params.lang === "ar" ?
                        <p>فضلاً اختر عدد المدعوين القادمين</p>
                        :
                        <p>Please select total guest coming !&nbsp;</p>}
                    {params.lang === "ar"
                        ?
                        <p>عدد القادمين
                            &nbsp;
                            {optiontwo
                                &&
                                <select name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            }
                            {optionthree
                                &&
                                <select name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            }
                            {optionfour
                                &&
                                <select name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            }
                            {optionfive
                                &&
                                <select name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            }
                            {/* </p> */}
                            {/* <input type="number" name='number' onChange={(e) => changeData(e.target.value)} value={change} min="0" max={totalguest} style={{ width: '40px' }} /> */}
                            {/* <small>you can select max: {totalguest}</small> */}
                        </p>
                        :
                        <p>Total Guest &nbsp;
                            {optiontwo
                                &&
                                <select name="number" id="cars" className='cars' value={change}
                                    onChange={(e) => {
                                        changeData(e.target.value)
                                    }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            }
                            {optionthree
                                &&
                                <select name="number" id="cars" className='cars' value={change}
                                    onChange={(e) => {
                                        changeData(e.target.value)
                                    }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            }
                            {optionfour
                                &&
                                <select name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            }
                            {optionfive
                                &&
                                <select style={{ width: '27px' }} name="number" id="cars" className='cars' value={change} onChange={(e) => {
                                    changeData(e.target.value)
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                            }
                            {/* <br/>
                            <select className='newmodel' style={{width:'25px'}}>
                            <option  value="1">1</option>
                                    <option  value="2">2</option>
                                    <option  value="3">3</option>
                                    <option  value="4">4</option>
                                    <option  value="5">5</option>
                            </select> */}
                            {/* </p> */}
                            {/* <input type="number" name='number' onChange={(e) => changeData(e.target.value)} value={change} min="0" max={totalguest} style={{ width: '40px' }} /> */}
                            {/* <small>you can select max: {totalguest}</small> */}
                        </p>
                    }
                    <br />
                    {params.lang === "ar" ?
                        <Button
                            style={{ width: '100%', height: '50px', backgroundColor: '#6F0A12', color: 'white', borderRadius: '0px', fontWeight: 'bold' }} type="none" onClick={statusApi}><p style={{ lineHeight: "0px" }}>حفظ</p></Button>
                        :
                        <Button
                            style={{ width: '100%', height: '50px', backgroundColor: '#6F0A12', color: 'white', borderRadius: '0px', fontWeight: 'bold' }} type="none" onClick={statusApi}><p style={{ lineHeight: "0px" }}>Send</p></Button>
                    }
                </div>
            </Modal>

            {/*  select guest modal end */}


            {/*  QR Code modal start */}

            <Modal
                centered
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[]}
                closable={false}
                className="qrcodeModal"

            >
                <div>
                    <img src="/closeicon1.png" alt=""
                        width={20}
                        height={20}
                        style={{ margin: '6px', marginLeft: '8px', display: 'inline' }}
                        onClick={handleCancel}
                    />
                </div>
                <div style={{ fontSize: "16px", marginTop: '-14px', marginBottom: 2, textAlign: 'center' }}>
                    &nbsp;&nbsp;&nbsp;{msgdata.save_qr_message}&nbsp;&nbsp;&nbsp;
                </div>
                <div style={{ position: 'relative' }}>
                    <InviteImage src={image.entrance} />
                    <div
                        style={qrcss}
                        className="qrcss"
                    // style={{
                    //     position: 'absolute',
                    //     top: '150px',
                    //     left: '170px',
                    //     display: 'flex',
                    //     alignItems: 'center',
                    // }}
                    >
                        <QRCode
                            value={"" + invite.invitationId}
                            size={values.QRsize}
                            fgColor={values.QRcolor}
                            bgColor={values.bgcolorQR === null ? 'white' : values.bgcolorQR}
                        />
                    </div>
                    {/* <InviteBody> */}
                    <div
                        style={sncss}
                    // style={{
                    //     position: 'absolute',
                    //     top: '300px',
                    //     left: '210px',
                    // }}
                    >
                        {demo.id}
                    </div>
                    <div
                        style={contentcss}
                    >
                        {/* <InfoContainer > */}
                        <Text
                            // style={textcss}
                            style={{
                                position: 'absolute',
                                top: values.TextH + "px",
                                left: values.TextW + "px",
                                fontFamily: values.fontfamily,
                                // fontFamily:'BlakaInk-Regular',
                                fontWeight: values.fontweight,
                                fontSize: values.fontsize + "px",
                            }}
                        >
                            <div>
                                {msgdata.Guest_name_title}&nbsp;&nbsp;
                                {udata.name}
                                <div>{values.numberMessage}{/* &nbsp;&nbsp;{udata.totalGuest} */}&nbsp;&nbsp;
                                    <div style={numbercss}>{udata.totalGuest}
                                    </div>
                                </div>
                            </div>

                            {udata.totalChildren === 0 ?
                                ""
                                :
                                params.lang === "ar" ?
                                    <div
                                        style={{ textAlign: 'center' }}>
                                        عدد الأطفال{/* &nbsp;&nbsp;{udata.totalChildren} */}&nbsp;&nbsp;
                                        <div
                                            style={numbercss}>
                                            {udata.totalChildren}
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div
                                            style={{ textAlign: 'center' }}>
                                            Total Children&nbsp;&nbsp;
                                            <div
                                                style={numbercss}
                                            >{udata.totalChildren}
                                            </div>
                                        </div>
                                    </>
                            }
                        </Text>

                        {/* </InfoContainer> */}
                    </div>
                </div>

                {/* </InviteBody> */}
            </Modal>

            {/*  QR Code modal end */}


            {/*  reject modal start */}

            <Modal open={isrejectedModalOpen}
                centered
                onOk={handleOkreject}
                onCancel={handleCancelreject}
                closable={false}
                footer={[]}
                className="newStyle"

            >
                <img src="/closeicon.png" alt=""
                    width={30}
                    height={30}
                    style={{ margin: '5px' }}
                    onClick={handleCancelreject}
                />
                {/* <AiOutlineClose style={{ color: '#6F0A12', width: '30px', height: '30px', cursor: 'pointer' }} onClick={handleCancelreject} /> */}
                {params.lang === "ar" ?
                    <div>
                        <p>تم حفظ حالة الدعوة برفض</p>
                        <p>شكراً لردكم</p>
                        <br />
                        <br />
                    </div> :
                    <div>
                        <p>Your status has been saved as Rejected !</p>
                        <p>Thank you for your response !    </p>
                        <br />
                        <br />
                    </div>}
            </Modal>

            {/*  reject modal end */}

        </>
    )
}

export default Invitation