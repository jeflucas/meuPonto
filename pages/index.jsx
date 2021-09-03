import Tabela from "../components/Tabela";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Meu Ponto</h1>
      <Tabela />
    </div>
  );
}
