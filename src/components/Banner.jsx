import { Card, Flex, Typography } from "antd";

const Banner = () => {
  return (
    <Card style={{height: 260, padding: '20px'}}>
      <Flex vertical gap='30px'>
        <Flex vertical align="flex-start">
            <Typography.Title level={2} strong>
                Create and sell products
            </Typography.Title>
            <Typography.Text type="secondary" strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, amet.

            </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
