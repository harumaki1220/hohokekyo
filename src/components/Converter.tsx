import { useRef, useState } from 'react';
import styles from '../App.module.css';
import Button from './Button';

type ConverterProps = {
  title: string;
  placeholder: string;
  convertFunction: (text: string) => string;
};

const Converter = ({ title, placeholder, convertFunction }: ConverterProps) => {
  const [text, setText] = useState<string>('');
  const [showCopied, setShowCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const convertedText = convertFunction(text);

  const handleCopy = () => {
    if (!convertedText) return;
    navigator.clipboard.writeText(convertedText);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowCopied(false);
    setTimeout(() => {
      setShowCopied(true);
      timerRef.current = setTimeout(() => {
        setShowCopied(false);
        timerRef.current = null;
      }, 1500);
    }, 10);
  };

  return (
    <div className={styles.converterSection}>
      <h2>{title}</h2>
      <textarea
        rows={10}
        placeholder={placeholder}
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
  );
};

export default Converter;
