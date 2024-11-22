import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Hook para redirigir
import './Login.css';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.username === 'admin' && values.password === '1234') {
        message.success('Inicio de sesión exitoso!');
        navigate('/dashboard'); // Redirige al SideMenu
      } else {
        message.error('Usuario o contraseña inválidos!');
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Por favor completa todos los campos requeridos!');
    console.log('Error:', errorInfo);
  };

  return (
    <div className="login-container">
      <Card
        title={
          <div className="login-title">
            <h1>MÓDULO DE PLANILLAS</h1>
            <h2>Inicio de Sesión</h2>
          </div>
        }
        bordered={false}
        className="login-card"
      >
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor ingresa tu usuario!' }]}
          >
            <Input placeholder="Usuario" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recuérdame</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="login-button"
            >
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
