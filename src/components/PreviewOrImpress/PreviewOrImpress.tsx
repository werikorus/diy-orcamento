import { Button, TextField } from "@mui/material"

export const PreviewOrImpress = () => {
  return (
    <section>
      <h1>Dê um nome para o seu arquivo: </h1>
      <TextField label="Nome arquivo" variant="outlined" id="name-file" />
      
      <div className="buttonContainer">
        <Button>Preview</Button>
        <Button>Imprimir</Button>
      </div>
    </section>
  );
};