import React from 'react';
import { Card, Tag, Space, Typography } from 'antd';
import { LikeTwoTone, DislikeTwoTone } from '@ant-design/icons';

const NewsCard = ({ post }) => (
  <Card>
    <Typography.Title level={4} style={{ background: '#C3FDD4', padding: '3px' }}>
      {post.title}
    </Typography.Title>
    <Typography.Paragraph ellipsis={{ rows: 3 }}>
        {post.body}
    </Typography.Paragraph>
    <Space direction="vertical" size="small">
      {post.tags?.length > 0 && (
        <Space wrap style={{paddingBottom: '10px'}}>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Space>
      )}
      <Space>
        <LikeTwoTone />
        <span>{post.reactions?.likes || 0}</span>
        <DislikeTwoTone />
        <span>{post.reactions?.dislikes || 0}</span>
      </Space>
    </Space>
  </Card>
);

export default NewsCard;