import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BoxHome, Title } from "../../components/styles";

function Home({ name }) {
  return (
    <BoxHome>
      <Title>Bem Vindo {name}</Title>
      <Link to="/">
        <Button variant="contained"> Voltar</Button>
      </Link>
    </BoxHome>
  );
}
export default Home;
