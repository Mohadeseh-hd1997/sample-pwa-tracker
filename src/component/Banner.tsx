import React, { useEffect, useState } from "react";
import { usePhoto } from "../api/GetApi";
import SampleCard from "./SampleCard";
import { Button, Col, Layout, Row, Space } from "antd";
import {AppstoreAddOutlined } from '@ant-design/icons';
interface PhotoItem {
  id: number;
  title: string;
  image: string;
}

const SwiperComponent: React.FC<{ items: PhotoItem[] }> = ({ items }) => (
  <Layout>
    <Row>
      {items.map((img) => (
        <Col xs={12} sm={3} md={4}  className="gutter-row">
          <SampleCard
            btn1="Add"
            btn2="View"
            desc=""
            head={img.title}
            img={img.image}
          />
        </Col>
      ))}
    </Row>
  </Layout>
);

const Banner: React.FC = () => {
  const [list, setList] = useState<PhotoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await usePhoto();
        setList(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Button id='AddHome'>
      <AppstoreAddOutlined />Add to Home Screen
      </Button>
    
      <hr/>
      <SwiperComponent items={list} />
    </div>
  );
};

export default Banner;
