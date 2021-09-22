import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BoxHome, Title } from "../../components/styles";
import { useParams } from "react-router";

function Home() {
  const params = useParams();
  return (
    <BoxHome>
      <Title>Bem Vindo {params.name}</Title>
      <Link to="/">
        <Button variant="contained"> Voltar</Button>
      </Link>
    </BoxHome>
  );
}
export default Home;
