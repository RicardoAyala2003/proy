import React, { useState } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import './EditarUsuario.css';

const CreateEditUser = ({ usuarioData, openModal, handleCancel, mode }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Datos editados exitosamente!');
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Por favor, completa todos los campos requeridos!');
    console.log('Errores:', errorInfo);
  };

  return (
    <div className="registro-container">
      <Modal
        title={mode ? 'Crear Usuario' : 'Editar Usuario'}
        visible={openModal}
        onCancel={handleCancel}
        footer={null} // No mostrar botones predeterminados
        width={500}
      >
        <Form
          name="editarUsuario"
          initialValues={usuarioData} // Usamos los valores de usuarioData para llenar el formulario
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
          layout="vertical"
        >
          {/* Código de Usuario */}
          <Form.Item
            name="codigoUsuario"
            label="Código de Usuario"
            rules={[
              {
                required: true,
                message: 'Por favor, ingresa un código de usuario válido!',
              },
              {
                pattern: /^[A-Z]{3}-\d{6}$/,
                message: 'El código debe tener el formato ABC-123456',
              },
            ]}
          >
            <Input placeholder="Código de Usuario (ABC-123456)" />
          </Form.Item>

          {/* Usuario */}
          <Form.Item
            name="usuario"
            label="Usuario"
            rules={[{ required: true, message: 'Por favor, ingresa un nombre de usuario!' }]}
          >
            <Input placeholder="Nombre de Usuario" />
          </Form.Item>

          {/* Contraseña */}
          <Form.Item
            name="contraseña"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: 'Por favor, ingresa una contraseña!',
              },
              {
                min: 6,
                message: 'La contraseña debe tener al menos 6 caracteres!',
              },
            ]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          {/* Correo Electrónico */}
          <Form.Item
            name="correo"
            label="Correo Electrónico"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Por favor, ingresa un correo válido!',
              },
            ]}
          >
            <Input placeholder="Correo Electrónico" />
          </Form.Item>

          {/* Botón de Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="registro-button"
            >
              {mode ? 'Crear Usuario' : 'Editar Usuario'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateEditUser;
