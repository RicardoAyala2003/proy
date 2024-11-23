import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, message, Row, Col, Modal } from 'antd';
import './EditarUsuario.css';

const { Option } = Select;

function EditarUsuario({usuarioData, openModal, handleCancel}) {
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
      <Card
        title={<h1> Editar Usuario</h1>}
        bordered={false}
        className="registro-card"
      >
   
        <Modal
          title="Editar Usuario"
          visible={openModal}
          onCancel={handleCancel}
          footer={null}  // No mostrar los botones predeterminados
          width={800}
        >
          <Form
            name="editarUsuario"
            initialValues={usuarioData} // Usamos los valores de usuarioData para llenar el formulario
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            layout="vertical"
          >

          <Row gutter={24}>
            {/* Nombre */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="nombre"
                label="Nombre"
                rules={[{ required: true, message: 'Por favor, ingresa tu nombre!' }]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
            </Col>

            {/* Apellido */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="apellido"
                label="Apellido"
                rules={[{ required: true, message: 'Por favor, ingresa tu apellido!' }]}
              >
                <Input placeholder="Apellido" />
              </Form.Item>
            </Col>

            {/* Código de Empleado */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="codigoEmpleado"
                label="Código de Empleado"
                rules={[{ required: true, message: 'Por favor, ingresa un código único!' }]}
              >
                <Input placeholder="Código de Empleado" />
              </Form.Item>
            </Col>

            {/* Edad */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="edad"
                label="Edad"
                rules={[{ required: true, message: 'Por favor, ingresa tu edad!' }]}
              >
                <Input type="number" placeholder="Edad (18-65)" />
              </Form.Item>
            </Col>

            {/* Dirección */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="direccion"
                label="Dirección"
                rules={[{ required: true, message: 'Por favor, ingresa tu dirección!' }]}
              >
                <Input placeholder="Dirección" />
              </Form.Item>
            </Col>

            {/* Rol */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="rol"
                label="Rol"
                rules={[{ required: true, message: 'Por favor, selecciona un rol!' }]}
              >
                <Select placeholder="Selecciona un rol">
                  <Option value="Administrador">Administrador</Option>
                  <Option value="Usuario de Planilla">Usuario de Planilla</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Correo Electrónico Personal */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="correoPersonal"
                label="Correo Electrónico Personal"
                rules={[{ required: true, type: 'email', message: 'Por favor, ingresa un correo válido!' }]}
              >
                <Input placeholder="Correo Electrónico Personal" />
              </Form.Item>
            </Col>

            {/* Correo Electrónico Empresarial */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="correoEmpresarial"
                label="Correo Electrónico Empresarial"
                rules={[{ type: 'email', message: 'Por favor, ingresa un correo empresarial válido!' }]}
              >
                <Input placeholder="Correo Electrónico Empresarial (opcional)" />
              </Form.Item>
            </Col>

            {/* Tipo de Salario */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="tipoSalario"
                label="Tipo de Salario"
                rules={[{ required: true, message: 'Por favor, selecciona un tipo de salario!' }]}
              >
                <Select placeholder="Selecciona">
                  <Option value="Mensual">Mensual</Option>
                  <Option value="Por Hora">Por Hora</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Medio de Pago */}
            <Col xs={24} sm={12}>
              <Form.Item
                name="medioPago"
                label="Medio de Pago"
                rules={[{ required: true, message: 'Por favor, selecciona un medio de pago!' }]}
              >
                <Select placeholder="Selecciona">
                  <Option value="Banco">Banco</Option>
                  <Option value="Transferencia Internacional">Transferencia Internacional</Option>
                  <Option value="Plataforma Internacional">Plataforma Internacional</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Botón de Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="registro-button"
            >
              Editar
            </Button>
          </Form.Item>

          </Form>
        </Modal>
          
      </Card>
    </div>
  );
}

export default EditarUsuario;
