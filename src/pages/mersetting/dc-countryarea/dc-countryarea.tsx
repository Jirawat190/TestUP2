import React, { useState, useEffect } from 'react'
import { Card, Form, Col, Row, Typography, Button, DatePicker, Breadcrumb, Tabs, Table, CollapseProps, Collapse, Select } from 'antd/lib'
import Styles from '@/styles/dc-countryarea.module.scss'
import { CaretLeftOutlined, FilterFilled, FormOutlined, HighlightOutlined, SearchOutlined, UndoOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import router from 'next/router';
import { count } from 'console';

const { Text } = Typography;
const { TabPane } = Tabs;

const pageback = () => {
    router.push('/homesetting')
}


export default function dcarea() {
    //API ดึงข้อมูล
    const [data, setData] = useState();
    const [formattedData1, setFormattedData1] = useState<any[]>([]);
    const [dataOption, setdataOption] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_revert_tambon_with_amphure_province.json')
            .then((response) => response.json())
            .then(result => {
                setData(result.map((item: any) => (
                    {
                        // "id":100101,
                        // "zip_code":10200,
                        // "name_th":"พระบรมมหาราชวัง",
                        // "name_en":"Phra Borom Maha Ratchawang",
                        // "amphure_id":1001,
                        // "created_at":"2019-08-09T03:33:09.000+07:00",
                        // "updated_at":"2022-05-16T06:31:31.324+07:00",
                        // "deleted_at":null,
                        // "amphure":
                        id: item.id,
                        name: item.name_th,
                        description: item.amphure_id,
                    })));

                let datalist1: any[] = [];
                let option: any[] = [];
                let datalist2: any[] = [];

                if (result?.length > 0) {

                    //ข้อมูลตารางเขตพื้นที่
                    result.forEach((element: any) => {
                        datalist1.push({
                            key: element.id, area: element.name_th, county: element.name_en, stock: 'RDC HY', date: element.created_at
                        });
                    });

                    if (datalist1.length > 0) {
                        setFormattedData1(datalist1);
                    }

                    result.forEach((element: any) => {
                        option.push({ area: element.name_th });
                    });

                    if (option.length > 0) {
                        setdataOption(option);
                    }
                };
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    //ข้อมูล CP All
    const setdatalist2 = [
        { name: 'ภาคใต้', value: '20' },
        { name: 'ภาคเหนือ', value: '20' },
        { name: 'ภาคกลาง', value: '30' },
        { name: 'ภาคตะวันตก', value: '7' },
    ];

    //ข้อมูล kerry
    const setdatalist3 = [
        { name: 'ภาคใต้', value: '20' },
        { name: 'ภาคเหนือ', value: '20' },
        { name: 'ภาคกลาง', value: '30' },
        { name: 'ภาคตะวันตก', value: '7' },
    ];


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



    const clearData = () => {
        console.log('กดแล้วน่ะ');

    };

    //หัวตารางของเขตพื้นที่
    const columns = [
        { title: 'ประเภทพื้นที่', dataIndex: 'area', key: 'area', },
        { title: 'จังหวัด/อำเภอ/ตำบล/รหัสไปรษณีย์', dataIndex: 'county', key: 'county' },
        { title: 'คลังที่รับผิดชอบ', dataIndex: 'stock', key: 'stock' },
        { title: 'วันที่เริ่มมีผลใช้งาน', dataIndex: 'date', key: 'date' },
    ];

    //หัวตารางของร้านสาขา
    const columns2 = [
        { title: 'ชื่อภูมิภาค', dataIndex: 'name', key: 'name', },
        { title: 'จำนวนจังหวัดในภาค', dataIndex: 'value', key: 'value', },
    ];

    //Mapdata เลือก option ใน จังหวัด/อำเภอ/ตำบล/รหัสไปรษณีย์
    const formattedDataOption = dataOption.map(({ area }, index) => ({
        value: area
    }));
    console.log(formattedDataOption);

    //แบบฟอร์มตัวกรองของเขตพื้นที่ 
    const text = (
        <Card className='bg-[#f5f5fa] w-full'>
            <Form onFinish={onFinish}>
                <Row>
                    <Col className='w-4/5'>
                        <Row className='w-full p-2'>
                            <Col className='w-2/5'>
                                <Text style={{ fontSize: '16px' }}>จังหวัด/อำเภอ/ตำบล/รหัสไปรษณีย์</Text>
                            </Col>

                            <Form.Item className='w-3/5' name="area">
                                <Select style={{ width: '100%' }} options={formattedDataOption} placeholder="ระบุคำค้นหา"></Select>
                            </Form.Item>


                        </Row>

                        <Row className='w-full p-2'>
                            <Row className='w-1/3' justify={'center'} align={'middle'}>
                                <Col className='w-1/2'>
                                    <Text style={{ fontSize: '16px' }}>ประเภทพื้นที่</Text>
                                </Col>

                                <Form.Item className='w-1/2' name="county" >
                                    <Select style={{ width: '100%' }}></Select>
                                </Form.Item>

                            </Row>

                            <Row className='w-1/3' justify={'center'} align={'middle'}>
                                <Col className='w-1/2'>
                                    <Text style={{ fontSize: '16px', textAlign: 'center' }}>ชื่อคลังที่รับผิดชอบ</ Text>
                                </Col>

                                <Form.Item className='w-1/2' name="stock">
                                    <Select style={{ width: '100%' }}></Select>
                                </Form.Item>

                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Col className='w-1/2'>
                                    <Text style={{ fontSize: '16px', textAlign: 'center' }}>วันที่เริ่มมีผลใช้งาน</ Text>
                                </Col>

                                <Form.Item className='w-1/2' name="date">
                                    <DatePicker style={{ width: '100%' }} onChange={onChange} placeholder="เลือกวันที่" />
                                </Form.Item>

                            </Row>
                        </Row>
                    </Col>

                    <Col className='w-1/5 p-3' >

                        <Form.Item>
                            <Row className='w-full' justify={'center'} align={'middle'}>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#5687bc', color: '#fff', marginBottom: '10px' }} icon={<SearchOutlined />}>ค้นหา</Button>
                            </Row>
                            <Row className='w-full' justify={'center'} align={'middle'}>
                                <Button htmlType="button" onClick={onReset} style={{ color: '#5687bc' }} icon={<HighlightOutlined />}>เคลียร์</Button>
                            </Row>
                        </Form.Item>

                    </Col>
                </Row>
            </Form>
        </Card>

    );

    //ตัวกรองของเขตพื้นที่ 
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
        { title: 'ตั้งค่าระบบ' },
        { title: 'ตั้งค่าเขตพื้นที่' },
    ];
    return (
        <>
            <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />;

            <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}>ตั้งค่าเขตพื้นที่</Text>} style={{ width: "100%" }}>
                <div className={Styles.cardcontainer}>
                    <Tabs type="card">

                        {/* ตั้งค่าประเภทพื้นที่จัดส่ง ALL speedy */}
                        <TabPane tab="ตั้งค่าประเภทพื้นที่จัดส่ง All Speedy" key="1">
                            <Row>
                                <Collapse className='w-full' ghost items={items} ></Collapse>
                            </Row>
                            <Table dataSource={formattedData1} columns={columns} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} />
                            <Button className="mb-8" onClick={pageback} style={{ color: 'red' }} icon={<CaretLeftOutlined />}>
                                ย้อนกลับ
                            </Button>
                            <Button className="mb-8 ml-4" style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<UndoOutlined />}>
                                ดูประวัติการแก้ไข
                            </Button>
                        </TabPane>

                        {/* ตั้งค่าประเภทพื้นที่ Courier */}
                        <TabPane tab="ตั้งค่าพื้นที่ของ Courier" key="2">

                            <div className={Styles.ExpeditedCard}>
                                <Tabs type="card" >

                                    <TabPane tab="ตั้งค่าภูมิภาคของ Courier" key="2">
                                        <Row className='w-full pt-4 rounded-lg p-9 border-2 border-stone-600'>
                                            <Row className='w-full'>
                                                <Col className='w-2/5'>
                                                    <Text className='text-base font-bold'>Couier: CP All</Text>
                                                </Col>
                                                <Col className='w-3/5'>
                                                    <Text className='text-base font-bold'>จำนวนจังหวัดที่ยังไม่ได้ระบุ 1 จังหวัด</Text>
                                                </Col>
                                            </Row>
                                            <Table dataSource={setdatalist2} columns={columns2} className='table custom-table' rowClassName={getRowClassName} />
                                            <Row className='w-full' justify={'end'}>
                                                <Button className="mt-5" style={{ backgroundColor: '#f5b131', color: '#000000' }} icon={<FormOutlined />}>
                                                    แก้ไข
                                                </Button>
                                            </Row>

                                        </Row>

                                        <Row className='w-full pt-4 rounded-lg p-9 border-2 border-stone-600 mt-5'>
                                            <Row className='w-full'>
                                                <Col className='w-2/5'>
                                                    <Text className='text-base font-bold'>Couier: kerry</Text>
                                                </Col>
                                                <Col className='w-3/5'>
                                                    <Text className='text-base font-bold'>จำนวนจังหวัดที่ยังไม่ได้ระบุ 1 จังหวัด</Text>
                                                </Col>
                                            </Row>
                                            <Table dataSource={setdatalist2} columns={columns2} className='table custom-table' rowClassName={getRowClassName} />
                                            <Row className='w-full' justify={'end'}>
                                                <Button className="mt-5" style={{ backgroundColor: '#f5b131', color: '#000000' }} icon={<FormOutlined />}>
                                                    แก้ไข
                                                </Button>
                                            </Row>

                                        </Row>

                                    </TabPane>

                                    <TabPane tab="ตั้งค่าพื้นที่พิเศษของ Courier" key="3">

                                    </TabPane>

                                </Tabs>
                            </div>

                            <div className='mt-8 w-full'>
                                <Button className="mb-8" onClick={pageback} style={{ color: 'red' }} icon={<CaretLeftOutlined />}>
                                    ย้อนกลับ
                                </Button>
                                <Button className="mb-8 ml-4" style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<UndoOutlined />}>
                                    ดูประวัติการแก้ไข
                                </Button>
                                <Button className="mb-8 ml-4" style={{ color: '#61aae8', borderColor: '#61aae8' }} >
                                    Export File
                                </Button>
                            </div>

                        </TabPane>

                    </Tabs>
                </div>
            </Card>
        </>
    )
}
