import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
const items: MenuProps["items"] = [
  {
    label: "Notiication",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Product",
    key: "Product",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Home",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
];

const HeaderPg: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div style={{ display: "flex" }}>
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ width: "100%", height: 60 }}
      />
    </div>
  );
};

export default HeaderPg;
