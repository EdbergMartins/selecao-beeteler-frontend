import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/imgLogin.svg';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';

interface FormValues {
  email: string;
  password: string;
}

function HomePage() {
  const styles = useStyles();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const { email, password } = values;
    try {
      const response = await axios.post('https://app-82f2b56d-a8f6-4dbf-994b-8b3cb75e26aa.cleverapps.io/singIn', {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
        actions.setSubmitting(false);
      } else {
        setError(true);
        actions.setSubmitting(false);
      }
    } catch (error) {
      setError(true);
      actions.setSubmitting(false);
    }
  };

  return (
    <Box className={styles.container}>
      <TopBar />
      <div className={styles.contentBox}>
        <div className={styles.pictureBox}>
          <img style={{ height: '100%', float: 'right' }} src={imgLogin} alt="Login" />
        </div>
        <div className={styles.loginBox}>
          <Typography variant="h4" className={styles.fristText}>
            Olá! Bem-vindo de volta.
          </Typography>
          <Typography variant="h6" className={styles.secondText}>
            Faça login com seus dados inseridos durante o seu registro.
          </Typography>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validate={(values) => {
              const errors: Partial<FormValues> = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
          >
            {(formikProps: FormikProps<FormValues>) => (
              <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={formikProps.handleSubmit}>
                <div className={styles.formik}>
                  <span className={styles.titles}>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    onChange={formikProps.handleChange}
                    onFocus={() => setError(false)}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.email}
                    className={styles.input}
                    placeholder="Exemplo@email.com"
                  />
                  {formikProps.errors.email && formikProps.touched.email && formikProps.errors.email}
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span className={styles.titles}>Senha</span>
                    <span className={styles.link}>Esqueceu a senha</span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.password}
                    className={styles.input}
                    placeholder="Enter password"
                  />
                  {formikProps.errors.password && formikProps.touched.password && formikProps.errors.password}
                  {error && <Box style={{ color: 'red', margin: 'auto' }}>Usuário ou senha incorretos </Box>}
                  <LoadingButton
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '20px 8px',
                      gap: '10px',
                      width: '417px',
                      height: '56px',
                      background: '#F4C23B',
                      '& .Mui-focusVisible': { background: 'black' },
                    }}
                    type="submit"
                    disabled={formikProps.isSubmitting}
                  >
                    Login
                  </LoadingButton>
                  <LoadingButton
                    sx={{
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
                      '& .Mui-focusVisible': { background: 'black' },
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
