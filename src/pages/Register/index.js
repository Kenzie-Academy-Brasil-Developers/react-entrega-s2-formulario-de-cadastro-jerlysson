import FormRegister from "../../components/FormRegister";
import { Formulario, Title } from "../../components/styles";

function Register({ setName }) {
  return (
    <Formulario>
      <Title>Cadastro</Title>
      <FormRegister setName={setName} />
    </Formulario>
  );
}
export default Register;
