import React, { useState } from 'react';
import styles from './login.module.css'
import { Input, Message,Form,Button } from '@arco-design/web-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = ( ) => {
    console.log('username',username,'password',password)
    // 模拟登录验证过程，实际项目中，你需要调用后端 API 进行验证
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      Message.success('登陆成功！')
    } else {
      Message.error('账号或者密码不存在！')
    }
  };

  const handleUsernameChange = (e) => {
    // console.log('event',event)
    setUsername(e)
  };

  const handlePasswordChange = (e) => {
    setPassword(e)
  };

  return (
    <div class={styles.loginContainer}>
      <h2>欢迎使用</h2>
      <Form class={styles.loginForm}>
        <div class={styles.inputGroup}>
          <label>用户名</label>
          <Input value={username} onChange={handleUsernameChange} allowClear placeholder='请输入用户名' />
        </div>
        <div class={styles.inputGroup}>
          <label>密码</label>
          <Input.Password  value={password} onChange={handlePasswordChange} allowClear placeholder='请输入密码' />
        </div>
        <Button type='primary' onClick={handleLogin}>登陆</Button >
      </Form>
    </div>
  )
}

export default Login;
