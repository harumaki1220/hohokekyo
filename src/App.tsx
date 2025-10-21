import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [text, setText] = useState<string>('');

  return (
    <div className={styles.container}>
      <h1>テキスト入力エリア</h1>
      <p>自由に入力してください。</p>

      <textarea
        rows={10}
        placeholder="ここに文字を入力..."
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <textarea rows={10} className={styles.textareaOutput} value={text} readOnly />
    </div>
  );
}

export default App;
