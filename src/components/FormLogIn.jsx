import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogIn() {

    const initialState = { user: "", password: "" };
    const [formValues, setFormValues] = useState(initialState)
    const [validationStates, setValidationStates] = useState({userState: false, passwordState: false})
    const handleUserChange = ((e) => {
      setFormValues({...formValues, user: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      setFormValues({...formValues, password: e.target.value})
    });

    const handleCancel = () => {
        setFormValues(initialState);
        setValidationStates({ userState: false, passwordState: false });
      };
   

  
    const clickSubmit = (() => {
      const userState= formValues.user
      console.log(userState)
      setValidationStates ({...validationStates, userState: userState})
      const regex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{9,}$/;
      const passwordState= regex.test(formValues.password);
      console.log(passwordState)
      setValidationStates ({...validationStates, passwordState: passwordState})
      
      if (userState && passwordState){
        //Call fetch
        alert(JSON.stringify(formValues))
      }
      else{
        alert("Error en los datos")
      }
    })
    return (

        <div>
       
        <Form>
        <Form.Group className="mb-6 " controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="user" placeholder="Ingrese su usuario" onChange={handleUserChange} value={formValues.email}/>
        </Form.Group>
   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" onChange={handlePasswordChange} value={formValues.password} />
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Ingresar
        </Button>
        <Button variant="primary" onClick={handleCancel}>
          Cancelar
        </Button>
      </Form>
      </div>

);
}

export default FormLogIn;