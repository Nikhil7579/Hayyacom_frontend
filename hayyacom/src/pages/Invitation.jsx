import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Button } from 'antd'
import { Modal } from 'antd';
import Footer from '../Component/Footer'
import { API_URL } from '../Config/api'
import QRCode from "react-qr-code";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
const InviteImage = styled.img`
  max-width: 100%;
  width: 100%;
`
const InviteBody = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0px;
    left:2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
 `
const QRContainer = styled.div`
    display: flex;
    justify-content: center;
`
const InfoContainer = styled.div`
    text-align: center;
    padding: 10px;
    font-size: 14px;
  
`

const Invitation = () => {

    const [image, setimage] = useState([]);
    const [totalguest, setTotalguest] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpentwo, setIsModalOpentwo] = useState(false);
    const [invite, setInvite] = useState({})
    const [value, setValue] = useState()
    const [values, setValues] = useState({})
    const [udata, setData] = useState([])
    const [demo, setDemo] = useState([])

    const [visible, setVisible] = useState(false);

    const cancleToast = () => {
        toast.error("Change Details Successfully !")
    };

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    const showModal = async (type) => {
        let data = {
            InvitationId: demo.id,
            status: type,
            total_guest: totalguest,
        }
        if (totalguest === 1) {
                console.log("11111")
                setIsModalOpen(true);
            }
            else {
                   setIsModalOpentwo(true);
            }
        console.log(data)
        const response = await axios.put(`${API_URL}invitationPage/update-status`,(data))
        console.log(response)
        if(response.status===200){
            toast.info(response.data.message)
        }


        // if (totalguest === 2) {
        //     console.log("11111")
        //     setIsModalOpen(true);
        // }
        // else {
        //     setIsModalOpentwo(true);
        // }
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsModalOpentwo(false);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalOpentwo(false);
    };
    useEffect(() => {
        data();
    }, [])

    const data = async () => {
        let res = await axios.get(`${API_URL}invitationPage/invitation-page-details/400`)
        setimage(res.data.CardData);
        setTotalguest(res.data.invitationData.total_guest)
        setValue(res.data.invitationData.total_guest)
        setData(res.data.ContactData)
        setValues(res.data.DesignData)
        setInvite(res.data.QRData)
        setDemo(res.data.invitationData)
        console.log(res);
    }
    const display = (e) => {
        setValue(e.target.value)
    }

    // const invitationAction = () => {
    //         let data = {
    //             InvitationId: 400,
    //             status : Accepted 
    //         }
    // }

    return (
        <>
            <CardContainer id='google_translate_element'>
            </CardContainer>
            <ToastContainer
                autoClose={2000}
                position="top-center"
                className="toast-container"
                toastClassName="dark-toast"
                theme="colored" />
            <Wrapper>
                <div className='nav' >
                    <span>Home /</span>
                    <span style={{ color: 'black' }}>&nbsp;invitation</span>
                </div>
                <div>
                    <Image src={image.invitation} alt="" />
                </div>
                <Wrapone >
                    <div className='text' > Please review the invitation details, and then respond with acceptance or apology</div>
                </Wrapone>
                <ul>
                    <li><p onClick={() => showModal("Accepted")}><AiOutlineCheck style={{ marginBottom: '-2px' }} />Acceptance</p></li>
                    <li><p onClick={() => showModal("Rejected")}><AiOutlineClose style={{ marginBottom: '-2px' }} />Apology</p></li>
                </ul>
            </Wrapper>
            <Modal
                title="Select the number of invitees they wish to attend"
                open={isModalOpentwo}
                onCancel={handleCancel}
                footer={[]}
                centered
                onOk={handleOk}
            >
                <div>
                    <p>Total guests to invite: <input type="number" onChange={display} value={value} min="0" max={totalguest} /> </p>
                    <Button type="primary">Ok</Button>
                </div>
            </Modal>
            <Modal
                // title="Select the number of invitees they wish to attend"
                centered
                // width={500}
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}

            >
                <InviteImage src={image.entrance} />
                <InviteBody>
                    <QRContainer>
                        <QRCode
                            value={JSON.stringify(invite)}
                            size={values.QRsize}
                            color={values.QRcolor}
                        />
                    </QRContainer>
                    <InfoContainer style={{ fontWeight: values.fontweight, color: values.infocolor, fontFamily: values.fontfamily }}>
                        <div>
                            <label>Name</label>: <span>{udata.name}</span>
                        </div>
                        <div>
                            <label>Total Guests</label>: <span>{udata.totalGuest}</span>
                        </div>
                        <div>
                            <label>Childrens</label>: <span>{udata.totalChildren}</span>
                        </div>
                    </InfoContainer>
                </InviteBody>
            </Modal>
            <Footer udata={udata} />
        </>
    )
}

export default Invitation