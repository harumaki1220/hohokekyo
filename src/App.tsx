import { useState } from 'react';
import styles from './App.module.css';

const convertToHohokekyo = (originalText: string): string => {
  if (!originalText) {
    return '';
  }

  const chars = originalText.split('');

  const encodedChars = chars.map((char) => {
    const charCode = char.charCodeAt(0);

    const base3String = charCode.toString(3);

    const hohokekyoString = base3String
      .replace(/0/g, 'ホ')
      .replace(/1/g, 'ケ')
      .replace(/2/g, 'キョ');

    return hohokekyoString;
  });

  return encodedChars.join('ー');
};

function App() {
  const [text, setText] = useState<string>('');
  const convertedText = convertToHohokekyo(text);

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

      <textarea rows={10} className={styles.textareaOutput} value={convertedText} readOnly />
    </div>
  );
}

export default App;
