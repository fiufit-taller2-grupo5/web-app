import { Button, InputNumber, Select, Typography } from 'antd';
import { Config } from './dashboard';
import { ReloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

export interface MetricsFormProps {
  setConfig: (config: Config) => void;
  config: Config;
  metrics: { key: string; name: string }[];
  handleReload: () => void;
  metricName: string;
}

export const DashboardForm = (props: MetricsFormProps) => {
  return (
    <div>
      <h3
        style={{
          fontSize: 22,
        }}
      >
        {props.metricName}
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            marginRight: 10,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          From Last
        </Text>
        <InputNumber
          style={{
            width: 130,
            height: 32,
            marginRight: 5,
            fontWeight: 600,
            backgroundColor: 'white',
            color: 'black',
          }}
          value={props.config.timeFrameCount}
          min={1}
          onChange={(value) => {
            props.setConfig({
              ...props.config,
              timeFrameCount: value as number,
            });
          }}
        />
        <Select
          placeholder="Select a time frame interval"
          style={{
            marginRight: 25,
            width: 100,
            fontWeight: 600,
            backgroundColor: 'white',
            color: 'black',
          }}
          value={props.config.timeFrameInterval}
          onChange={(value) => {
            props.setConfig({ ...props.config, timeFrameInterval: value });
          }}
        >
          <Select.Option value="minutes">Minutes</Select.Option>
          <Select.Option value="hours">Hours</Select.Option>
          <Select.Option value="days">Days</Select.Option>
          <Select.Option value="weeks">Weeks</Select.Option>
          <Select.Option value="months">Months</Select.Option>
          <Select.Option value="years">Years</Select.Option>
        </Select>

        <Text
          style={{
            marginRight: 10,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Interval
        </Text>
        <Select
          value={props.config.groupBy}
          style={{ marginRight: 25, width: 120 }}
          placeholder="Select a time interval to group by"
          onChange={(value) => {
            props.setConfig({ ...props.config, groupBy: value });
          }}
        >
          <Select.Option value="minutes">Minutes</Select.Option>
          <Select.Option value="hours">Hours</Select.Option>
          <Select.Option value="days">Days</Select.Option>
          <Select.Option value="weeks">Weeks</Select.Option>
          <Select.Option value="months">Months</Select.Option>
          <Select.Option value="years">Years</Select.Option>
        </Select>
        <Button
          type="primary"
          size="large"
          shape="circle"
          icon={<ReloadOutlined />}
          onClick={props.handleReload}
        />
      </div>
    </div>
  );
};
