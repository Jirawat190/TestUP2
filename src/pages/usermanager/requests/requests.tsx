import React, { useState, useEffect } from 'react'
import { Card, Form, Col, Row, Typography, Button, DatePicker, Breadcrumb, Tabs, Table, CollapseProps, Collapse, Select, Input } from 'antd/lib'
import Styles from '@/styles/requests.module.scss'
import { CaretLeftOutlined, FilterFilled, FormOutlined, HighlightOutlined, PlusCircleOutlined, SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { DatePickerProps, Modal } from 'antd';
import router from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { format } from 'date-fns';
import edit3 from '../../../../public/images/icon/edit-3.png';
// import EditModal from './EditModal'

const { Text } = Typography;
const { TabPane } = Tabs;

const pageadduser = () => {
    router.push('')
}

const pageedit = () => {
    router.push('')
}


export default function requests() {
    //API ดึงข้อมูล
    const [status, setStatus] = useState('อนุมัติ');
    const changeStatus = (newStatus: any) => {
        setStatus(newStatus);
    };

    const getStatusColor = () => {
        switch (status) {
            case 'อนุมัติ':
            case 'ยืนยันการส่ง link':
                return 'green';
            case 'รอตรวจสอบ':
                return 'blue';
            case 'รอยืนยัน':
            case 'รออนุมัติ':
                return 'orange';
            case 'ส่งกลับแก้ไข':
                return 'pink';
            case 'ปฏิเสธ':
                return 'red';
            case 'รอลูกค้ายืนยัน':
                return 'purple';
            // สีเริ่มต้นหรือสีอื่น ๆ ตามต้องการ
        }
    };

    const postdetail = async (data: any) => {
        try {
            console.log(data);
            const response = await axios.post('/usermanager/requests/detail', { data });
            console.log('status : ', response);
            router.push('/usermanager/requests/detail');
        } catch (error) {
            console.error("แก้จ้า อีกแล้วว", error);
        }
    };

    const [datalist, setDatalist] = useState<any[]>([]);

    // console.log(datalist);

    const getdata = async () => {
        try {
            let datalist: any[] = [];
            // "id":100101,
            // "zip_code":10200,
            // "name_th":"พระบรมมหาราชวัง",
            // "name_en":"Phra Borom Maha Ratchawang",
            // "amphure_id":1001,
            // "created_at":"2019-08-09T03:33:09.000+07:00",
            // "updated_at":"2022-05-16T06:31:31.324+07:00",
            // "deleted_at":null,
            // "amphure":
            const data = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_revert_tambon_with_amphure_province.json');
            // console.log(data.data);

            data.data.forEach((element: any) => {
                datalist.push({
                    requestnum: element.id,
                    file: element.zip_code,
                    status: <Row style={{
                        borderRadius: '5px',
                        border: '2px solid ',
                        color: getStatusColor(),
                        padding: '5px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }} justify={'center'}>{status}</Row>,
                    name: element.name_th,
                    user: element.name_en,
                    date: format(new Date(element.created_at), 'dd/MM/yyyy HH:mm'),
                    button: <Row justify={'center'}>
                        <Image
                            src={edit3}
                            width={30}
                            height={30}
                            alt="edit"
                        />
                    </Row>,

                });
            });

            if (datalist.length > 0) {
                setDatalist(datalist);
            }
        }
        catch (error) {
            console.log("เกิดข้อผิดพลาด", error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);



    //แบบฟอร์ม
    const [form] = Form.useForm();

    //ข้อมูลค้นหา
    const onFinish = (values: any) => {
        console.log(values);
    };

    //การReset valvu (ยังทำไม่ได้)
    const onReset = () => {
        form.resetFields();
    };


    //ปฏิทิน
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    //ตารางสสับสี
    const getRowClassName = (record: any, index: number) => {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
    };

    //หัวตารางของpre-ทั้งหมด
    const columns = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ชื่อผู้ติดต่อ', dataIndex: 'user', key: 'user' },
        { title: 'เบอร์โทรศัพท์', dataIndex: 'number', key: 'number' },
        { title: '#ต่อ', dataIndex: 'number2', key: 'number2' },
        { title: 'RM', dataIndex: 'RM', key: 'RM' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของpre-รอดำเนิน
    const columns2 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ชื่อผู้ติดต่อ', dataIndex: 'user', key: 'user' },
        { title: 'เบอร์โทรศัพท์', dataIndex: 'number', key: 'number' },
        { title: '#ต่อ', dataIndex: 'number2', key: 'number2' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของfull-ทั้งหมด
    const columns3 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ชื่อผู้ติดต่อ', dataIndex: 'user', key: 'user' },
        { title: 'เบอร์โทรศัพท์', dataIndex: 'number', key: 'number' },
        { title: '#ต่อ', dataIndex: 'number2', key: 'number2' },
        { title: 'RM', dataIndex: 'RM', key: 'RM' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของfull-รอดำเนิน
    const columns4 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ชื่อผู้ติดต่อ', dataIndex: 'user', key: 'user' },
        { title: 'เบอร์โทรศัพท์', dataIndex: 'number', key: 'number' },
        { title: '#ต่อ', dataIndex: 'number2', key: 'number2' },
        { title: 'RM', dataIndex: 'RM', key: 'RM' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของcompany-ทั้งหมด
    const columns5 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ประเภทคำขอ', dataIndex: 'typeuser', key: 'typeuser' },
        { title: 'ชื่อผู้ทำคำขอ', dataIndex: 'userreq', key: 'userreq' },
        { title: 'RM', dataIndex: 'RM', key: 'RM' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของcompany-รอดำเนินการ
    const columns6 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ประเภทคำขอ', dataIndex: 'typeuser', key: 'typeuser' },
        { title: 'ชื่อผู้ทำคำขอ', dataIndex: 'userreq', key: 'userreq' },
        { title: 'RM', dataIndex: 'RM', key: 'RM' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของเปลี่ยนแปลงข้อมูลบริษัท-ทั้งหมด
    const columns7 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ประเภทคำขอ', dataIndex: 'typeuser', key: 'typeuser' },
        { title: 'ชื่อผู้ทำคำขอ', dataIndex: 'userreq', key: 'userreq' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];

    //หัวตารางของเปลี่ยนแปลงข้อมูลบริษัท-รอดำเนินการ
    const columns8 = [
        { title: 'เลขที่คำขอ', dataIndex: 'requestnum', key: 'requestnum', },
        { title: 'วันที่คำขอ', dataIndex: 'date', key: 'date' },
        { title: 'ประเภทลูกค้า', dataIndex: 'usertype', key: 'usertype' },
        { title: 'ชื่อลูกค้า', dataIndex: 'name', key: 'name' },
        { title: 'ประเภทคำขอ', dataIndex: 'typeuser', key: 'typeuser' },
        { title: 'ชื่อผู้ทำคำขอ', dataIndex: 'userreq', key: 'userreq' },
        { title: 'สถานะคำขอ', dataIndex: 'status', key: 'status' },
        { title: 'ดำเนินการ', dataIndex: 'button', key: 'button' },
    ];


    // value สถานะคำขอ 
    const optionestatus = [
        {
            value: 'อนุมัติ',
            label: 'อนุมัติ',
        },
        {
            value: 'รอตรวจสอบ',
            label: 'รอตรวจสอบ',
        },
        {
            value: 'รออนุมัติ',
            label: 'รออนุมัติ',
        },
        {
            value: 'ส่งกลับแก้ไข',
            label: 'ส่งกลับแก้ไข',
        },
        {
            value: 'ปฏิเสธ',
            label: 'ปฏิเสธ',
        },
        {
            value: 'รอมอบหมาย',
            label: 'รอมอบหมาย',
        },
        {
            value: 'รอลูกค้ายืนยัน',
            label: 'รอลูกค้ายืนยัน',
        },
    ];

    //แบบฟอร์มตัวกรองของจัดการคำขอ
    const text = (
        <Card className='bg-[#f5f5fa] w-full'>
            <Form onFinish={onFinish}>
                <Row>
                    <Col className='w-full'>

                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="รหัสลูกค้า" className='w-full' name="userID"  >
                                    <Input style={{ width: '80%' }} placeholder="ระบุรหัสลูกค้า" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="ชื่อลูกค้า" className='w-full' name="username">
                                    <Input style={{ width: '80%' }} placeholder="ระบุชื่อลูกค้า" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="สถานะใบคำขอ" className='w-full' name="status" >
                                    <Select style={{ width: '80%' }} options={optionestatus}></Select>
                                </Form.Item>
                            </Row>

                        </Row>


                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="เลขที่คำขอ" className='w-full' name="requestnum" >
                                    <Input style={{ width: '80%' }} placeholder="ระบุเลขที่คำขอ" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="วันที่คำขอ" className='w-full' name="date" >
                                    <DatePicker style={{ width: '80%' }} onChange={onChange} placeholder="DD/MM/YYYY" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 ' justify={'center'} align={'middle'}>
                                <Row className='w-full' justify={'end'} align={'middle'}>
                                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#5687bc', color: '#fff', marginBottom: '10px', marginLeft: '10px' }} icon={<SearchOutlined />}>ค้นหา</Button>
                                    <Button htmlType="button" style={{ color: '#5687bc', marginBottom: '10px', marginLeft: '10px' }} icon={<HighlightOutlined />}>เคลียร์</Button>
                                </Row>
                            </Row>
                        </Row>

                    </Col>
                </Row>
            </Form>
        </Card>
    );

    //ตัวกรองของจัดการคำขอ
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label:
                <Row justify={'end'} className='w-full'>
                    <Col className='filterBotton'>
                        <Button icon={<FilterFilled />}>ตัวกรอง</Button>
                    </Col>
                </Row>,
            children: <p>{text}</p>,
            showArrow: false,
        },
    ];

    //Breadcrumb
    const pageoption = [
        { title: 'หน้าแรก' },
        { title: 'จัดการคำขอลูกค้า' },
        { title: 'จัดการคำขอ' },
    ];


    return (
        <>
            <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

            <Card headStyle={{ border: 0, padding: 30 }} title={
                <Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}>จัดการคำขอ
                    <Row>
                        <Collapse className='w-full' ghost items={items} style={{ marginTop: "-40px" }}></Collapse>
                    </Row>

                </Text>
            } style={{ width: "100%" }}>

                <div className={Styles.cardcontainer}>
                    <Tabs type="card">
                        {/* Pre-Register */}
                        <TabPane tab="Pre-Register" key="1">

                            <div className={Styles.ExpeditedCard}>
                                <Tabs type="card" >

                                    <TabPane tab="รายการทั้งหมด" key="2">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>

                                    </TabPane>

                                    <TabPane tab="รอดำเนินการ" key="3" >
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns2} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>
                                    </TabPane>

                                </Tabs>
                            </div>
                        </TabPane>

                        {/* Full-Register */}
                        <TabPane tab="Full-Register" key="2">
                            <Row className='w-full' justify={'end'}>
                                <Button onClick={pageadduser} style={{ background: '#558961', color: '#ffffff', fontSize: '17px', height: '35px' }} icon={<PlusCircleOutlined />}>
                                    เพิ่มลูกค้าใหม่
                                </Button>
                            </Row>
                            <div className={Styles.ExpeditedCard}>
                                <Tabs type="card" >

                                    <TabPane tab="รายการทั้งหมด" key="2">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns3} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>

                                    </TabPane>

                                    <TabPane tab="รอดำเนินการ" key="3" >
                                        <Row className='w-full' >
                                            <Table dataSource={datalist} columns={columns4} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </TabPane>

                        {/* CompanyAdmin */}
                        <TabPane tab="CompanyAdmin" key="3">
                            <div className={Styles.ExpeditedCard}>
                                <Tabs type="card" >

                                    <TabPane tab="รายการทั้งหมด" key="2">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns5} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>

                                    </TabPane>

                                    <TabPane tab="รอดำเนินการ" key="3">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns6} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </TabPane>

                        {/* เปลี่ยนแปลงข้อมูลบริษัท */}
                        <TabPane tab="เปลี่ยนแปลงข้อมูลบริษัท" key="4">
                            <Row className='w-full ' justify={'end'}>
                                <Button onClick={pageedit} style={{ background: '#558961', color: '#ffffff', fontSize: '17px', height: '35px' }} icon={<PlusCircleOutlined />}>
                                    เพิ่มคำขอแก้ไขบริการ
                                </Button>
                            </Row>
                            <div className={Styles.ExpeditedCard}>
                                <Tabs type="card" >

                                    <TabPane tab="รายการทั้งหมด" key="2">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns7} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>

                                    </TabPane>

                                    <TabPane tab="รอดำเนินการ" key="3">
                                        <Row className='w-full'>
                                            <Table dataSource={datalist} columns={columns8} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} onRow={(data, rowIndex) => {
                                                return {
                                                    onClick: () => postdetail(data),
                                                };
                                            }} />
                                        </Row>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </TabPane>

                    </Tabs>
                </div>
            </Card>
        </>
    )
}
