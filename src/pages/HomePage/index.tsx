import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/imgLogin.svg';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';


function HomePage() {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const navigate = useNavigate()



  const handleSubmit = async (values: any, actions: any) => {
    const { email, password } = values
    const response = await axios.post('http://localhost:3000/singIn',
      JSON.stringify({ email, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
      actions.setSubmitting(false)
    } else {
      setError(true)
      actions.setSubmitting(false)
    }
  };

  return (
    <Box className={styles.container}>
      <TopBar />
      <div className={styles.contentBox}>
        <div className={styles.pictureBox}>
          <img style={{ height: '100%', float: 'right' }} src={imgLogin} />
        </div>
        <div className={styles.loginBox}>
          <h1 className={styles.fristText}>
            Olá! Bem vindo de volta.
          </h1>
          <h2 className={styles.secondText}>
            Faça login com seus dados inseridos
            durante o seu registro.
          </h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions)

            }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <div className={styles.formik}>
                  <span className={styles.titles}>
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onFocus={() => setError(false)}
                    onBlur={handleBlur}
                    value={values.email}
                    className={styles.input}
                    placeholder="Exemplo@email.com"
                  />
                  {errors.email && touched.email && errors.email}
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span className={styles.titles}>
                      Senha
                    </span>
                    <span className={styles.link}>
                      Esqueceu a senha
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={styles.input}
                    placeholder="Enter password"
                  />
                  {errors.password && touched.password && errors.password}
                  {error && <Box style={{ color: 'red', margin: 'auto' }}>Usuário ou senha incorretos </Box>}
                  <LoadingButton sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px 8px',
                    gap: '10px',
                    width: '417px',
                    height: '56px',
                    background: '#F4C23B',
                    '& .Mui-focusVisible': { background: 'black' }
                  }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </LoadingButton>
                  <LoadingButton sx={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px 8px',
                    gap: '10px',
                    width: '417px',
                    height: '56px',
                    background: '#F4C23B',
                    '& .Mui-focusVisible': { background: 'black' }
                  }}
                    onClick={() => navigate('/register')}
                  >
                    Registrar
                  </LoadingButton>
                </div>
              </form>
            )}
          </Formik>

        </div>
      </div>
    </Box>
  );
}

export default HomePage;

