import styles from './App.module.css';
import Converter from './components/Converter';

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
  return (
    <div className={styles.container}>
      <h1>可逆ホーホケキョ語メモ</h1>
      <div className={styles.converterContainer}>
        <Converter
          title="日本語 → ホーホケキョ語"
          placeholder="ここに文字を入力..."
          convertFunction={convertToHohokekyo}
        />
        <Converter
          title="ホーホケキョ語 → 日本語"
          placeholder="ここにホーホケキョ語を入力..."
          convertFunction={convertFromHohokekyo}
        />
      </div>
    </div>
  );
}

export default App;
