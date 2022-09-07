import Header1 from "../components/Header";
import { Col, Row, Avatar, Space, Table, Tag, Checkbox, Drawer } from "antd";

import {
  UserOutlined,
  CaretDownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const columns = [
  {
    title: "Year_HDK",
    dataIndex: "year_hdk",
    key: "year_hdk",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "Month_HDK",
    dataIndex: "month_hdk",
    key: "month_hdk",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "CBDA",
    dataIndex: "cbda",
    key: "cbda",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "Project",
    key: "project",
    dataIndex: "project",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "HDC_no",
    key: "hdc_no",
    dataIndex: "hdc_no",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "HDK_no",
    key: "hdk_no",
    dataIndex: "hdk_no",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "DVTT",
    key: "dvtt",
    dataIndex: "dvtt",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
  {
    title: "Contractor",
    key: "contractor",
    dataIndex: "contractor",
    render(data) {
      return <Checkbox onChange={onChange}>{data}</Checkbox>;
    },
  },
];

const dataSource = [
  {
    key: "1",
    year_hdk: "(All)",
    month_hdk: "(All)",
    cbda: "(All)asdddddddddddddddd",
    project: "(All)",
    hdc_no: "(All)",
    hdk_no: "(All)",
    dvtt: "(All)",
    contractor: "(All)",
  },
  {
    key: "2",
    year_hdk: "(All)",
    month_hdk: "(All)",
    cbda: "(All)",
    project: "(All)",
    hdc_no: "(All)",
    hdk_no: "(All)",
    dvtt: "(All)",
    contractor: "(All)",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Row>
        <Col span={24} className="main">
          <Row className="header">
            <Col>
              <MenuOutlined
                className="header_menuOutLined"
                onClick={showDrawer}
              />
            </Col>
            <Col>
              <Avatar icon={<UserOutlined />} className="header__avatar" />
              col-8
              <CaretDownOutlined className="header__dropdownIcon" />
            </Col>
          </Row>
          <Row className="container">
            <Row className="dashboard">
              <Row className="dashboard__title">Dashboard</Row>
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className="dashboard__table"
              />
            </Row>
          </Row>
        </Col>
        <Drawer
          title="Basic Drawer"
          placement="left"
          onClose={onClose}
          open={open}
          closeIcon={
            <CloseOutlined style={{ flexDirection: "row !important" }} />
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Row>
    </>
  );
}
export default Index;
