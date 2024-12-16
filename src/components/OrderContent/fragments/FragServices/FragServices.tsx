import styles from "./FragServices.module.css";

export const FragServices = () => {
  return (
    <table className={styles.tableContainer}>
      <h3>SERVIÇOS</h3>
      <tr className={styles.highlight}>
        <th>Ítem</th>
        <th>Quantidade</th>
        <th>SERVIÇOS</th>
        <th>Valor</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>
          Instalação do roto 30 com abertura de parede com acabamento e entrega
          técnica.
          <br />
          <em>
            Obs: cliente é responsável por ponto de energia e hidráulica para a
            instalação do equipamento.
          </em>
        </td>
        <td>R$ 1.200,00</td>
      </tr>
      <tr>
        <td colSpan={3} className={`${styles.right} ${styles.bold}`}>
          Total Serviços:
        </td>
        <td className={styles.highlight}>R$ 1.200,00</td>
      </tr>
    </table>
  );
};
