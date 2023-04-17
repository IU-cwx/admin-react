import styles from './login.module.css'

function Login() {
  return (
    <div class={styles.loginContainer}>
      <h2>欢迎使用</h2>
      <form class={styles.loginForm}>
        <div class={styles.inputGroup}>
          <label for={styles.username}>用户名</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class={styles.inputGroup}>
          <label for="password">密码</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">登陆</button>
      </form>
    </div>
  );
}

export default Login;
