import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, message, Row, Col } from 'antd';
import './Registro.css';

// Opciones predefinidas
const ROLES = ['Administrador', 'Usuario de Planilla'];
const TIPOS_SALARIO = ['Mensual', 'Por Hora'];
const MEDIOS_PAGO = ['Banco', 'Transferencia Internacional', 'Plataforma Internacional'];

const { Option } = Select;

const Registro = () => {
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Registro exitoso!');
      console.log('Valores enviados:', values);
    }, 1000);
  };

  const handleFinishFailed = ({ errorFields }) => {
    errorFields.forEach(({ name, errors }) => {
      message.error(`Error en el campo "${name}": ${errors[0]}`);
    });
  };

  // Componente reutilizable para Inputs
  const CustomInput = ({ name, label, rules, placeholder, type = 'text' }) => (
    <Form.Item name={name} label={label} rules={rules}>
      <Input type={type} placeholder={placeholder} aria-label={label} aria-required="true" />
    </Form.Item>
  );

  // Componente reutilizable para Selects
  const CustomSelect = ({ name, label, rules, placeholder, options }) => (
    <Form.Item name={name} label={label} rules={rules}>
      <Select placeholder={placeholder} aria-label={label} aria-required="true">
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <div className="registro-container">
      <Card title={<h1>Registrar Usuario</h1>} bordered={false} className="registro-card">
        <Form
          name="registro"
          initialValues={{
            tipoSalario: 'Mensual',
            medioPago: 'Banco',
            rol: 'Usuario de Planilla',
          }}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          size="large"
          layout="vertical"
        >
          <Row gutter={24}>
            {/* Campos del formulario */}
            <Col xs={24} sm={12}>
              <CustomInput
                name="nombre"
                label="Nombre"
                rules={[
                  { required: true, message: 'Por favor, ingresa tu nombre!' },
                  { whitespace: true, message: 'Este campo no puede estar vacío!' },
                ]}
                placeholder="Nombre"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="apellido"
                label="Apellido"
                rules={[
                  { required: true, message: 'Por favor, ingresa tu apellido!' },
                  { whitespace: true, message: 'Este campo no puede estar vacío!' },
                ]}
                placeholder="Apellido"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="codigoEmpleado"
                label="Código de Empleado"
                rules={[{ required: true, message: 'Por favor, ingresa un código único!' }]}
                placeholder="Código de Empleado"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="edad"
                label="Edad"
                rules={[
                  { required: true, message: 'Por favor, ingresa tu edad!' },
                  { type: 'number', min: 18, max: 65, message: 'La edad debe estar entre 18 y 65 años!', transform: (value) => Number(value) },
                ]}
                placeholder="Edad (18-65)"
                type="number"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="direccion"
                label="Dirección"
                rules={[{ required: true, message: 'Por favor, ingresa tu dirección!' }]}
                placeholder="Dirección"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomSelect
                name="rol"
                label="Rol"
                rules={[{ required: true, message: 'Por favor, selecciona un rol!' }]}
                placeholder="Selecciona un rol"
                options={ROLES}
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="correoPersonal"
                label="Correo Electrónico Personal"
                rules={[
                  { required: true, type: 'email', message: 'Por favor, ingresa un correo personal válido!' },
                ]}
                placeholder="Correo Electrónico Personal"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomInput
                name="correoEmpresarial"
                label="Correo Electrónico Empresarial"
                rules={[{ type: 'email', message: 'Por favor, ingresa un correo empresarial válido!' }]}
                placeholder="Correo Electrónico Empresarial (opcional)"
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomSelect
                name="tipoSalario"
                label="Tipo de Salario"
                rules={[{ required: true, message: 'Por favor, selecciona un tipo de salario!' }]}
                placeholder="Selecciona"
                options={TIPOS_SALARIO}
              />
            </Col>

            <Col xs={24} sm={12}>
              <CustomSelect
                name="medioPago"
                label="Medio de Pago"
                rules={[{ required: true, message: 'Por favor, selecciona un medio de pago!' }]}
                placeholder="Selecciona"
                options={MEDIOS_PAGO}
              />
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="registro-button">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Registro;
