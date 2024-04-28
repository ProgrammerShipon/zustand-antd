"use client";

import { useZustandStore } from "@/Store/useZustandStore";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Table } from "antd";
import { useState } from "react";

// columns options
const columns = [
  { title: "Serial", dataIndex: "serial", key: "serial" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Location", dataIndex: "location", key: "location" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <div className="flex items-center justify-center gap-5">
        <Button type="primary" icon={<EditOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

// add notes form layout
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export default function UsersNotes() {
  const { notes } = useZustandStore();
  // const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // handle modal
  const handleModal = () => setOpenModal(!openModal);

  console.log("notes ", notes);

  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenModal(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="userNotes py-7 relative">
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.note}</p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={notes}
        />

        <div className="inline-block absolute bottom-10 left-0">
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Add New Notes
          </Button>
        </div>
      </div>

      {/* add notes modal */}
      <Modal
        open={openModal}
        title="Add Your Notes"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {/* on submit */}
        <Form
          name="validate_other"
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
          className="mx-auto px-3 pt-3 "
        >
          <Form.Item
            label="name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="location"
            name="Location"
            rules={[
              {
                required: true,
                message: "Please Location!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="notes"
            name="notes"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
