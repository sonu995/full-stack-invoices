import useLanguage from '@/locale/useLanguage';

import { Layout, Col, Divider, Typography } from 'antd';

import AuthLayout from '@/layout/AuthLayout';
import SideContent from './SideContent';

import logo from '@/style/images/logo.png';

const { Content } = Layout;
const { Title } = Typography;

const AuthModule = ({ authContent, AUTH_TITLE, isForRegistre = false }) => {
  const translate = useLanguage();
  return (
    <AuthLayout sideContent={<SideContent />}>
      <Content
        style={{
          padding: isForRegistre ? '40px 30px 30px' : '100px 30px 30px',
          maxWidth: '440px',
          margin: '0 auto',
        }}
      >
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 0 }} span={0}>
          <img
            src={logo}
            alt="Logo"
            style={{
              margin: '0px auto 20px',
              display: 'block',
            }}
          
            width={220}
          />
          <h1 style={{fontSize:"30px", textAlign:"center"}}>EasyPayPro <span style={{fontSize:"25px", color:"bule"}}>ERP / CRM</span> </h1>
          <div className="space10" />
        </Col>
        <Title level={1}>{translate(AUTH_TITLE)}</Title>

        <Divider />
        <div className="site-layout-content">{authContent}</div>
      </Content>
    </AuthLayout>
  );
};

export default AuthModule;
