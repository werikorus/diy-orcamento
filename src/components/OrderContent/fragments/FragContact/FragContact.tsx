import styles from "./FragContact.module.css";

export const FragContact = () => {
  return (
    <table className={styles.tableContainer}>
      <tr>
        <td className={styles.bold}>Razão Social:</td>
        <td>SS comércio de frutas limitada</td>
        <td className={styles.center}>(X) Orçamento ( ) Pedido</td>
      </tr>
      <tr>
        <td className={styles.bold}>CNPJ/CPF:</td>
        <td colSpan={2}></td>
      </tr>
      <tr>
        <td className={styles.bold}>Inscrição Estadual:</td>
        <td>261704559</td>
        <td>24/10/24</td>
      </tr>
      <tr>
        <td className={styles.bold}>Município:</td>
        <td>Florianópolis</td>
        <td></td>
      </tr>
      <tr>
        <td className={styles.bold}>Endereço:</td>
        <td colSpan={2}>Rodovia João Gualberto Soares , 37</td>
      </tr>
      <tr>
        <td className={styles.bold}>CEP:</td>
        <td>88058300</td>
        <td>Santa Catarina</td>
      </tr>
      <tr>
        <td className={styles.bold}>Telefone:</td>
        <td>(48) 99604-8833</td>
        <td></td>
      </tr>
      <tr>
        <td className={styles.bold}>E-mail:</td>
        <td colSpan={2}>sacolaofrutodaterra@gmail.com</td>
      </tr>
    </table>
  );
};
