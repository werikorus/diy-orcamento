import { Form, Header } from "@/components";
import styles from './Pedido.module.css'

const Pedido = () => {
  return (
    <div className={styles.pedidoContainer}>
      <Header typeOrder={0} />
      <Form />
    </div>
  );
};

export default Pedido;