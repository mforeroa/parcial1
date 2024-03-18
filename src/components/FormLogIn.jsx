import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function FormLogIn() {

    const [error, setError] = useState('');
    const history = useNavigate();

    const initialState = { login: "", password: "" };
    const [formValues, setFormValues] = useState(initialState)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const clickSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.status === 'success') {
          // Redirect to another route if credentials are correct
          history('/home');
        } else {
          setError('Error de autenticación. Revise sus credenciales');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Error de conexión. Intente de nuevo más tarde.');
      });
    };

    const handleCancel = () => {
        setFormValues(initialState);
        setError('');
      };

    return (
        <div className="d-flex justify-content-center">
            <Form className='formLogIn'>
                <h2 className='logInTitle'><FormattedMessage id= "FormTitle"/></h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='formLabels'><FormattedMessage id= "UserName"/></Form.Label>
                    <Form.Control className= 'logInControls' type="text" name="login" onChange={handleInputChange} value={formValues.login} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='formLabels'><FormattedMessage id= "Pass"/></Form.Label>
                    <Form.Control className= 'logInControls'type="password" name="password" onChange={handleInputChange} value={formValues.password} />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <Button className='formButtonsBlue' onClick={clickSubmit}>
                    <FormattedMessage id= "logInButton"/>
                    </Button>
                    <Button className='formButtonsRed' onClick={handleCancel}>
                    <FormattedMessage id= "cancelButton"/>
                    </Button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>
        </div>
    );
}

export default FormLogIn;