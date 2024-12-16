import styles from "./FragConditions.module.css";

export const FragConditions = () => {
  return (
    <table className={styles.tableContainer}>
      <h3>CONDIÇÕES</h3>
      <tr>
        <td className={styles.bold}>Pagamento:</td>
        <td>à combinar</td>
        <td className={styles.bold}>Produto:</td>
        <td>R$ 6.346,25</td>
      </tr>
      <tr>
        <td className={styles.bold}>Prazo de entrega:</td>
        <td>20 dias úteis após envio de pedido para a fábrica</td>
        <td className={styles.bold}>Total:</td>
        <td className={styles.highlight}>R$ 6.346,25</td>
      </tr>
      <tr>
        <td className={styles.bold}>Prazo de instalação:</td>
        <td>Data a ser definida após o recebimento das máquinas</td>
        <td colSpan={2}></td>
      </tr>
      <tr>
        <td className={styles.bold}>Garantia:</td>
        <td>12 meses</td>
        <td className={styles.bold}>Frete:</td>
        <td>(X) CIF</td>
      </tr>
      <tr>
        <td colSpan={4} className={styles.noBorder}>
          <strong>OBSERVAÇÕES:</strong> Cliente ficará responsável pela parte
          elétrica, hidráulica e serviços de empilhadeira, andaimes ou munques.
        </td>
      </tr>
      <tr>
        <td colSpan={4} className={styles.bold}>
          Assinatura e carimbo do cliente:
        </td>
      </tr>
      <p className={styles.bold}>Proposta válida por 7 dias.</p>
    </table>
  );
};
