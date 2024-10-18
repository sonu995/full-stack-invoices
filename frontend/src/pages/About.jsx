import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'EasyPayPro'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Mobile : <a href="https://portfolio-beu89my3m-sonu995s-projects.vercel.app/">7004826110</a>{' '}
          </p>
       
           <p>
            GitHub :{' '}
            <a href="https://github.com/sonu995">
            https://github.com/sonu995
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://portfolio-beu89my3m-sonu995s-projects.vercel.app/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
