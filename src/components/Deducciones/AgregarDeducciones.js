import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import './AgregarDeducciones.css'; // Añadimos un archivo de estilos personalizado
const { Option } = Select;

const AgregarDeducciones = ({ visible, onCancel, onAddDeduccion }) => {

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onAddDeduccion(values);
    form.resetFields();
  };

  return (
    <Modal
      title="Agregar Nueva Deducción"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="deducciones-modal" // Estilo adicional para el modal
      centered
      destroyOnClose
      width={500}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit} className="deducciones-form">
        <Form.Item
          name="nombre"
          label="Nombre de la Deducción"
          rules={[{ required: true, message: 'Por favor, ingrese el nombre.' }]}
        >
          <Input placeholder="Ej: Seguro de salud" className="deducciones-input" />
        </Form.Item>

        <Form.Item
          name="frecuencia"
          label="Frecuencia"
          rules={[{ required: true, message: 'Por favor, seleccione la frecuencia.' }]}
        >
          <Select placeholder="Seleccione una frecuencia" className="deducciones-input">
            <Option value="Mensual">Mensual</Option>
            <Option value="Quincenal">Quincenal</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="monto"
          label="Monto"
          rules={[
            { required: true, message: 'Por favor, ingrese el monto.' },
            { pattern: /^[0-9]+$/, message: 'Solo se permiten números.' },
          ]}
        >
          <Input placeholder="Ej: 200" className="deducciones-input" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="deducciones-button">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AgregarDeducciones;
