"use client";
import { useState } from "react";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from "icons";
import Container from "@/Components/Container";
import { Menu } from "antd";
const items = [
  {
    label: <a href="/">Home</a>,
    key: "Home",
  },
  {
    label: <a href="#t20">Counter</a>,
    key: "Counter",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Container>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Container>
    </>
  );
}
