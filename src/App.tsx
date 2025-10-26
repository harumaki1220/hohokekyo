import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';

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

const convertFromHohokekyo = (hohokekyoText: string): string => {
  if (!hohokekyoText) {
    return '';
  }
  const encodedChars = hohokekyoText.split('ー');
  const decodedChars = encodedChars.map((hohokekyoString) => {
    const base3String = hohokekyoString
      .replace(/ホ/g, '0')
      .replace(/ケ/g, '1')
      .replace(/キョ/g, '2');
    const charCode = parseInt(base3String, 3);
    return String.fromCharCode(charCode);
  });
  return decodedChars.join('');
};

function App() {
  const [text, setText] = useState<string>('');
  const convertedText = convertToHohokekyo(text);
  const [showCopied, setShowCopied] = useState(false);

  const [hohoText, setHohoText] = useState('');
  const decodedText = convertFromHohokekyo(hohoText);
  const [showCopiedHoho, setShowCopiedHoho] = useState(false);

  const handleCopy = () => {
    if (!convertedText) return;
    navigator.clipboard.writeText(convertedText);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1500);
  };

  const handleCopyHoho = () => {
    if (!decodedText) return;
    navigator.clipboard.writeText(decodedText);
    setShowCopiedHoho(true);
    setTimeout(() => {
      setShowCopiedHoho(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1>可逆ホーホケキョ語メモ</h1>
      <div className={styles.converterContainer}>
        <div className={styles.converterSection}>
          <h2>日本語 → ホーホケキョ語</h2>
          <textarea
            rows={10}
            placeholder="ここに文字を入力..."
            className={styles.textarea}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className={styles.buttonGroup}>
            <Button onClick={handleCopy}>コピー</Button>
            <Button onClick={() => setText('')}>クリア</Button>
            {showCopied && <div className={styles.copiedMessage}>Copied!</div>}
          </div>
          <textarea rows={10} className={styles.textareaOutput} value={convertedText} readOnly />
        </div>

        <div className={styles.converterSection}>
          <h2>ホーホケキョ語 → 日本語</h2>
          <textarea
            rows={10}
            placeholder="ここにホーホケキョ語を入力..."
            className={styles.textarea}
            value={hohoText}
            onChange={(e) => setHohoText(e.target.value)}
          />
          <div className={styles.buttonGroup}>
            <Button onClick={handleCopyHoho}>コピー</Button>
            <Button onClick={() => setHohoText('')}>クリア</Button>
            {showCopiedHoho && <div className={styles.copiedMessage}>Copied!</div>}
          </div>
          <textarea rows={10} className={styles.textareaOutput} value={decodedText} readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;
