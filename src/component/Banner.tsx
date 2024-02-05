import React, { useEffect, useState } from "react";
import { usePhoto } from "../api/GetApi";
import SampleCard from "./SampleCard";
import { Col, Layout, Row, Space } from "antd";

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
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <SwiperComponent items={list} />
    </Layout>
  );
};

export default Banner;
