import Header1 from "../components/Header";
import { Layout, Col, Row, Avatar } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

function Index() {
  return (
    <>
      <Row>
        <Col span={20} push={4} className="bg-blue-600 h-screen">
          <Row
            className="bg-blue-400"
            justify="space-between items-center h-12 px-2"
          >
            <Col>col-8</Col>
            <Col>
              <Avatar icon={<UserOutlined />} className="mr-8" /> col-8
              <DownOutlined className="text-yellow-400" />
            </Col>
          </Row>
          Container
        </Col>
        <Col span={4} pull={20} className="bg-red-600 h-screen">
          Menu
        </Col>
      </Row>
    </>
  );
}
export default Index;
