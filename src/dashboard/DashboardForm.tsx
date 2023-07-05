import { Button, InputNumber, Select, Typography } from 'antd';
import { Config } from './dashboard';
import { ReloadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Text } = Typography;

export interface MetricsFormProps {
  setConfig: (config: Config) => void;
  config: Config;
  metricName: string;
}

export const DashboardForm = (props: MetricsFormProps) => {
  const [timeFrameCountValue, setTimeFrameCountValue] = useState<number>(
    props.config.timeFrameCount
  );

  const [timeFrameIntervalValue, setTimeFrameIntervalValue] = useState<string>(
    props.config.timeFrameInterval
  );

  const [groupByValue, setGroupByValue] = useState<string>(
    props.config.groupBy || 'minutes'
  );

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1100px',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      >
        <Text
          style={{
            marginRight: 10,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          From Last
        </Text>
        <InputNumber
          style={{
            width: 65,
            height: 32,
            marginRight: 5,
            fontWeight: 600,
            backgroundColor: 'white',
            color: 'black',
          }}
          value={timeFrameCountValue}
          min={1}
          onChange={(value) => {
            setTimeFrameCountValue(value || 1);
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
          value={timeFrameIntervalValue}
          onChange={(value) => {
            setTimeFrameIntervalValue(value || 'minutes');
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
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Interval
        </Text>
        <Select
          value={groupByValue}
          style={{ marginRight: 25, width: 120 }}
          placeholder="Select a time interval to group by"
          onChange={(value) => {
            setGroupByValue(value || 'minutes');
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
          onClick={() => {
            props.setConfig({
              timeFrameCount: timeFrameCountValue,
              timeFrameInterval: timeFrameIntervalValue as
                | 'hours'
                | 'minutes'
                | 'days'
                | 'weeks'
                | 'months'
                | 'years',
              groupBy: groupByValue as
                | 'hours'
                | 'minutes'
                | 'days'
                | 'weeks'
                | 'months'
                | 'years',
            });
          }}
        />
      </div>
    </div>
  );
};
