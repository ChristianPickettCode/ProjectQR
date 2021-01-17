import React, { useState } from "react";
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import CreateModal from "./CreateModal";
import AttendeeList from "./AttendeeList";

import { PageHeader, Layout, Button } from 'antd';

const { Content, Footer } = Layout;

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout style={{height:"100%"}}>
      <Router>
        <PageHeader
          title={<Link to="/" style={{ color:"black" }}>"Project QR"</Link>}
          extra={[
            <Button onClick={() => setModalVisible(true)} type="primary" key="create">Create</Button>,
          ]}
        />
        <Content 
          style={{
            height:"20px",
            width:"95%", 
            margin:"auto",
            overflow:"scroll"
            }}>
          
            <Switch>
              <Route path="/code/:id">
                <AttendeeList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <b>Created by Chris and Tunde.</b>
        </Footer>
      </Router>
      <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </Layout>
  );
}

export default withAuthenticator(App);
