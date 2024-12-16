import styles from "./FragProducts.module.css";

export const FragProducts = () => {
  return (
    <table className={styles.tableContainer}>
      <h3>PRODUTOS</h3>
      <tr className={styles.highlight}>
        <th>Ítem</th>
        <th>Quantidade</th>
        <th>Produto</th>
        <th>Valor Unitário</th>
        <th>Valor dos Itens</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>Roto 30 linha Sense</td>
        <td>R$ 5.020,00</td>
        <td>R$ 5.020,00</td>
      </tr>
      <tr>
        <td>2</td>
        <td>1</td>
        <td>Placa evaporativa roto 100 standard</td>
        <td>R$ 126,25</td>
        <td>R$ 126,25</td>
      </tr>
      <tr>
        <td colSpan={4} className={`${styles.right} ${styles.bold}`}>
          Total Produtos:
        </td>
        <td className={styles.highlight}>R$ 5.146,25</td>
      </tr>
    </table>
  );
};
