
import react from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal, ModalBody,ModalHeader,FormGroup,ModalFooter } from 'reactstrap';


const data= [
    { id:1, personaje: 'Naruto', anime: 'Naruto'},
    { id:2, personaje: 'Nezuco', anime: 'Demon Slayer'},
    { id:3, personaje: 'Goku', anime: 'Dragon Ball'},
    { id:4, personaje: 'Kenshin', anime: 'Roruouni'},
    { id:5, personaje: 'Monkey D. Luffy', anime: 'One Piece'},
    { id:6, personaje: 'Seto Kaiba', anime: 'Yu-Gi-Oh!'},
];


function App() {

  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personaje: "",
      anime: "",
    },
  };
  return (
      <Fragment>
        <Container> 
          <br/>
            <Button color="primary">Insertar Nuevo Personaje</Button>
          <br/> 

          <Table>
            <thead><tr><th>Id</th>
            <th>Personaje</th>
            <th>Anime</th>
            <th>Acciones</th>
            </tr></thead>

            <tbody>
              {this.state.data.map( (elemento) =>{
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td><Button color="primary">Editar </Button></td>
                  <td><Button color="danger">Eliminar </Button></td>
                </tr>
              } )}
            </tbody>
              
          </Table>



        </Container>
      </Fragment>
  );
}

export default App;
