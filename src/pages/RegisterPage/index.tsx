import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/imgLogin.svg';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';

function RegisterPage() {
  const styles = useStyles();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const outerSubmitHandler = async (values: any, actions: any) => {
    const { email, password } = values;
    try {
      const response = await axios.post(
        'https://app-82f2b56d-a8f6-4dbf-994b-8b3cb75e26aa.cleverapps.io/singUp',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      navigate('/dashboard');
      actions.setSubmitting(false);
    } catch (err) {
      setError(true);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.contentBox}>
        <div className={styles.pictureBox}>
          <img style={{ height: '100%', float: 'right' }} src={imgLogin} alt="Login" />
        </div>
        <div className={styles.loginBox}>
          <h1 className={styles.fristText}>Olá! Seja bem vindo.</h1>
          <h2 className={styles.secondText}>
            Insira um email válido e uma senha para que possamos registrar seus dados.
          </h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              outerSubmitHandler(values, actions);
            }}
            validate={(values) => {
              const errors: Record<string, string> = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
            }) => (
              <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <div className={styles.formik}>
                  <span className={styles.titles}>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    onFocus={() => setError(false)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={styles.input}
                    placeholder="Exemplo@email.com"
                  />
                  <span style={{ color: 'red' }}>
                    {errors.email && touched.email && errors.email}
                  </span>
                  <div
                    style={{
                      marginBottom: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className={styles.titles}>Senha</span>
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
                  <span style={{ color: 'red' }}>
                    {errors.password && touched.password && errors.password}
                  </span>
                  {error && (
                    <div style={{ color: 'red', margin: 'auto' }}>
                      Usuário já cadastrado no banco de dados
                    </div>
                  )}
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
                    disabled={isSubmitting}
                  >
                    Cadastrar
                  </LoadingButton>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
