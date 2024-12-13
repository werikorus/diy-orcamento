import styles from "./FragProducts.module.css";

export const FragProducts = () => {
  return (
    <tr className={styles.contactContainer}>
      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>Razão Social:</strong>
        </td>
        <td className={styles.rowValue}>Nome da empresa aqui</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>CPF/CNPJ:</strong>
        </td>
        <td className={styles.rowValue}>123.312.321-03</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>Inscrição Estadual:</strong>
        </td>
        <td className={styles.rowValue}>261704559</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>Município:</strong>
        </td>
        <td className={styles.rowValue}>Araguaína-To</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>CEP:</strong>
        </td>
        <td className={styles.rowValue}>88058300</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>Telefone:</strong>
        </td>
        <td className={styles.rowValue}>88058300</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>E-mail:</strong>
        </td>
        <td className={styles.rowValue}>email@gmail.com</td>
      </div>

      <div className={styles.containerRow}>
        <td className={styles.rowTitle}>
          <strong>Medição:</strong>
        </td>
        <td className={styles.rowValue}></td>
      </div>
    </tr>
  );
};
