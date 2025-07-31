import React from 'react';
import { Layout, Typography } from 'antd';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NewsFeed from './components/NewsFeed';
import 'antd/dist/reset.css';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Layout.Header style={{ background: '#076CFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography.Title level={3} style={{ color: 'white', margin: 0 }}>
          Лента новостей. Тестовое задание.
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={{ padding: '20px' }}>
        <NewsFeed />
      </Layout.Content>
    </Layout>
  </Provider>
);

export default App;
