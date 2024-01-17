import React from 'react'
import { Card, Col, Row, Typography, Button, Layout, Breadcrumb } from 'antd/lib'
import styles from '@/styles/portal.module.css';
import router from 'next/router';

const { Content } = Layout;
const { Text } = Typography;

const pageportal = () => {
  router.push('/portal')
}


const pagedccountry = () => {
  router.push('/mersetting/dc-countryarea')
}


const style1: React.CSSProperties = { background: '#cae5f4', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style2: React.CSSProperties = { background: '#d0bbdd', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style3: React.CSSProperties = { background: '#d0c6aa', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style4: React.CSSProperties = { background: '#cce6da', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style5: React.CSSProperties = { background: '#ffeed9', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };

export default function homesetting() {

  //Breadcrumb
  const pageoption = [
    { title: 'หน้าแรก' },
    { title: 'ตั้งค่าระบบ' },
  ];

  return (
    <>
      <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

      {/* <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> ตั้งค่าส่วนกลาง </Text>} style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ color: '#0a5a95' }}>
          <Col className="gutter-row" span={6}>
            <Row style={style1}>
              <Row className={styles.options} style={{ backgroundColor: "#f0f8fc" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าการแสดงผลสถานะพัสดุ</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style1}>
              <Row className={styles.options} style={{ backgroundColor: "#f0f8fc" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าระยะเวลารอคอย</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style1}>
              <Row className={styles.options} style={{ backgroundColor: "#f0f8fc" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าข้อมูลการแจ้งเตือน<br />
                  (SMS & Email)
                </div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style1}>
              <Row className={styles.options} style={{ backgroundColor: "#f0f8fc" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าแจ้งเตือนหน้าล็อคอิน</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style1}>
              <Row className={styles.options} style={{ backgroundColor: "#f0f8fc" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่า SLA (ระยะเวลาส่งพัสดุ)</div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card> */}


      <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> ตั้งค่าเกี่ยวกับลูกค้า</Text>} style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ color: '#87649c' }}>
          {/* <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าประเภทพัสดุ</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าการแสดงผลการตรวจสอบ<br />
                  การจองผ่าน import File
                </div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่า Price Scheme</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าจุดเข้ารับพัสดุ (B2C)</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>จัดการสัญญา</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าฟอร์ม K2</div>
              </Row>
            </Row>
          </Col> */}
          <Col className="gutter-row" span={6}>
            <Row style={style2}>
              <Row className={styles.options} style={{ backgroundColor: "#fbf7fd" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่า Cut off time Booking</div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> ตั้งค่าบัญชี </Text>} style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ color: '#a69f8b' }}>
          <Col className="gutter-row" span={6}>
            <Row style={style3}>
              <Row className={styles.options} style={{ backgroundColor: "#f8f4e9" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าโลโก้และที่อยู่ในใบเสร็จ/ <br />
                  ใบวางบิลและใบกำกับภาษี
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card> */}

      {/* <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> ตั้งค่าเกี่ยวกับ Customer Care </Text>} style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ color: '#3b9742' }}>
          <Col className="gutter-row" span={6}>
            <Row style={style4}>
              <Row className={styles.options} style={{ backgroundColor: "#f2fcf7" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าหัวข้อปัญหาการส่งพัสดุ</div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card> */}

      <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> ตั้งค่าคลังสินค้า </Text>} style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ color: '#f57517' }}>
          
         <Col className="gutter-row" span={6}>
            <Row style={style5}>
              <Row onClick={pagedccountry} className={styles.options} style={{ backgroundColor: "#fdf7ed" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าเขตพื้นที่</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style5}>
              <Row className={styles.options} style={{ backgroundColor: "#fdf7ed" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่า Assign Courier</div>
              </Row>
            </Row>
          </Col>
          <Col className="gutter-row" span={6}>
            <Row style={style5}>
              <Row className={styles.options} style={{ backgroundColor: "#fdf7ed" }} justify={'center'} align={'middle'}>
                <div>ตั้งค่าร้านที่ให้บริการ Fast Delivery</div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card>

      <Button type="primary" danger className="mb-8" onClick={pageportal}>
        ย้อนกลับ
      </Button>

    </>

  )
}
