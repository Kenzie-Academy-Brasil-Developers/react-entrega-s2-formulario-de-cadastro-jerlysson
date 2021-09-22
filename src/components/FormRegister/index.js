import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo Obrigatorio")
    .min(6, "Minimo 6 Caracteres"),
  email: yup.string().email("E-mail Invalido").required("Campo Obrigatorio"),
  password: yup
    .string()
    .required("Campo Obrigatorio")
    .min(8, "Minimo 8 Caracteres")
    .matches(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    ),
  pwdComfirm: yup
    .string()
    .oneOf([yup.ref("password"), "Senhas Devem Ser Iguais!"]),
});

function FormRegister() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUp = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <div>
        <TextField
          variant="outlined"
          label="Nome"
          margin="normal"
          size="small"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="E-mail"
          margin="normal"
          size="small"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          // type="password"
          variant="outlined"
          label="Senha"
          margin="normal"
          size="small"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          // type="password"
          variant="outlined"
          label="Confirme a Senha"
          margin="normal"
          size="small"
          {...register("pwdComfirm")}
          error={!!errors.pwdComfirm}
          helperText={errors.pwdComfirm?.message}
        />
      </div>
      <div>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
export default FormRegister;
