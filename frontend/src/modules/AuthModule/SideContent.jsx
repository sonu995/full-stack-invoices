import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/logo.png';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';


const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", }}>
        <img
          src={logo}
          alt="EasyPayPro"
          style={{ margin: '0 0 40px', display: 'block' }}
      
          width={220}
        />

        <h1 style={{fontSize:"30px"}}>EasyPayPro <span style={{fontSize:"25px", color:"bule"}}>ERP / CRM</span> </h1>

        </div>
       

        <Title level={1} style={{ fontSize: 28 }}>
          Free Open Source ERP / CRM
        </Title>
        <Text>
          Accounting / Invoicing / Quote App <b /> based on Node.js React.js Ant Design
        </Text>

        <div className="space20"></div>
      </div>
    </Content>
  );
}
