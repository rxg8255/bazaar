import logo from "./logo.svg";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";

function App() {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <h1>Yours shopping cart</h1>
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <Product />
        </Col>
        <Divider type="vertical" />
        {/* <Col span={1}></Col> */}
        <Col span={9}></Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
