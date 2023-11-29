import React from 'react';
import { Col, Row } from 'antd/lib';
import { Card, Button, Form, Input, Carousel,Typography } from 'antd/lib';
import speedsrc from "../../../public/images/SPEED-D-LOGO.png";
import Image from "next/image";
import { MailFilled, UnlockFilled, UploadOutlined } from '@ant-design/icons';
import router from 'next/router';
import styled from 'styled-components';

const { Text } = Typography;

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #778899;
    box-shadow: 1px 2px 3px 1px #888888;
  }
  > .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #F25920;
    box-shadow: 1px 2px 3px 1px #FFCC33
  }
`;

const pageportal = () => {
  router.push('/portal')
}

const style: React.CSSProperties = {
  width:'100%',
  height: '97vh'
};

const loginFunc = (values: any) => {
  console.log(values.email, values.password);
};

const loginFuncfaild = (values: any) => {
  console.log("faild", values);
};

type FieldType = {
  email?: string;
  password?: string;
};


const login: React.FC = () => (
  <>
    <Row style={style} gutter={8} className='w-full' align={'middle'} >
    <Image 
      src={"/images/bglogin.jpg"} 
      alt="" 
      layout="fill"
      objectFit="cover" 
      />
      <Col style={{ width: '55%' }} xs={24} sm={24} md={12} lg={12} xl={12} >
        <Row justify={'end'} >
          <Row style={{ width: '90%' }}  >
            <Row style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '20px 20px 0px 0px' }} gutter={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }} justify={'center'} >
              <Image
                width={300}
                draggable={false}
                src={speedsrc}
                alt=""
                style={{ marginBottom: '5px', }} />
            </Row>

            <Row style={{ width: '100%', backgroundColor: '#005390', padding: '60px', borderRadius: '0px 0px 20px 25px' }} gutter={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }} justify={'center'}>
              <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ width: '100%' }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={loginFunc}
                onFinishFailed={loginFuncfaild}
              >
                <Form.Item<FieldType>
                  name="email"
                  rules={[{ required: true, message: 'กรุณากรอก E-mail!' }]
                  
                  }
                >
                  <Input prefix={<MailFilled className="site-form-item-icon" style={{ color: "#0088B2" }} />} placeholder="E-mail" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="password"
                  rules={[{ required: true, message: 'กรุณากรอก รหัสผ่าน!' }]}
                >
                  <Input.Password prefix={<UnlockFilled className="site-form-item-icon" style={{ color: "#0088B2" }} />} placeholder="รหัสผ่าน" />
                </Form.Item>

                <Form.Item >
                  <Row justify={'center'} gutter={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }}>
                    <Button htmlType="submit" onClick={pageportal} className='w-full' style={{ width: '40%', height: '50px',backgroundColor:'#ffffff', color: "#0088B2", fontSize: '20px', textAlign: "center", fontWeight: "bold", borderRadius: "25px" }}>
                      <UploadOutlined style={{ color: "#0088B2" }} />เข้าสู่ระบบ
                    </Button>
                  </Row>
                </Form.Item>
              </Form>
            </Row>
          </Row>
        </Row>
      </Col>

      
      <Col style={{ width: '50%' }} >
      <Row justify={'center'}>
        <Card style={{ backgroundColor: '#ffffff', width: '80%', height: '405px', padding: '15px', borderRadius: '20px' }} >
          <CarouselWrapper autoplay >
            <Row justify={'center'} >
              <Card>
                <Image
                  width={300}
                  draggable={false}
                  src={speedsrc}
                  style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
                  alt="" />
              </Card>
              <Row style={{ marginBottom: '30px', color: '#0088B2' }}>
                <Text strong className='m-3 mb-1 text-blue-900' style={{ fontSize: '25px' }}>แจ้งเตือนการปิดปรับปรุง 1</Text>
                <Text strong className='p-3 mb-3 text-blue-900' style={{ fontSize: '16px' }}>แจ้งการปิดปรับปรุงระบบในวันที่ 6 สิงหาคม 2566 ตั้งแต่เวลา 00.00-06.00 น. เพื่อเพิ่มประสิทธิภาพให้กับระบบ</Text>
              </Row>
            </Row>
            <Row justify={'center'} >
              <Card>
                <Image
                  width={300}
                  draggable={false}
                  src={speedsrc}
                  style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
                  alt="" />
              </Card>
              <Row style={{ marginBottom: '30px', color: '#0088B2' }}>
                <Text strong className='m-3 mb-1 text-blue-900' style={{ fontSize: '25px' }}>แจ้งเตือนการปิดปรับปรุง 2</Text>
                <Text strong className='p-3 mb-3 text-blue-900' style={{ fontSize: '16px' }}>แจ้งการปิดปรับปรุงระบบในวันที่ 6 สิงหาคม 2566 ตั้งแต่เวลา 00.00-06.00 น. เพื่อเพิ่มประสิทธิภาพให้กับระบบ</Text>
              </Row>
            </Row>
            <Row justify={'center'} >
              <Card>
                <Image
                  width={300}
                  draggable={false}
                  src={speedsrc}
                  style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
                  alt="" />
              </Card>
              <Row style={{ marginBottom: '30px', color: '#0088B2' }}>
                <Text strong className='m-3 mb-1 text-blue-900' style={{ fontSize: '25px' }}>แจ้งเตือนการปิดปรับปรุง 3</Text>
                <Text strong className='p-3 mb-3 text-blue-900' style={{ fontSize: '16px' }}>แจ้งการปิดปรับปรุงระบบในวันที่ 6 สิงหาคม 2566 ตั้งแต่เวลา 00.00-06.00 น. เพื่อเพิ่มประสิทธิภาพให้กับระบบ</Text>
              </Row>
            </Row>
            <Row justify={'center'} >
              <Card>
                <Image
                  width={300}
                  draggable={false}
                  src={speedsrc}
                  style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
                  alt="" />
              </Card>
              <Row style={{ marginBottom: '30px', color: '#0088B2' }}>
                <Text strong className='m-3 mb-1 text-blue-900' style={{ fontSize: '25px' }}>แจ้งเตือนการปิดปรับปรุง 4</Text>
                <Text strong className='p-3 mb-3 text-blue-900' style={{ fontSize: '16px' }}>แจ้งการปิดปรับปรุงระบบในวันที่ 6 สิงหาคม 2566 ตั้งแต่เวลา 00.00-06.00 น. เพื่อเพิ่มประสิทธิภาพให้กับระบบ</Text>
              </Row>
            </Row>
          </CarouselWrapper>
        </Card>
        </Row>
      </Col>
      

    </Row>
  </>
);

export default login;
