import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Button, message } from 'antd';
import './AgregarHoras.css';

const AgregarHoras = ({ visible, onCancel, onAddHoras }) => {
  const [form] = Form.useForm();

  const handleAddHoras = (values) => {
    onAddHoras(values); // Llamar la función pasada como prop para agregar las horas
    form.resetFields();
    message.success('Horas ingresadas exitosamente.');
  };

  return (
    <Modal
      title="Registrar Horas"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="agregar-horas-modal"
    >
      <Form form={form} layout="vertical" onFinish={handleAddHoras}>
        <Form.Item
          name="empleado"
          label="Nombre del Empleado"
          rules={[{ required: true, message: 'Por favor, ingrese el nombre del empleado.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="horasTrabajadas"
          label="Horas Trabajadas"
          rules={[
            { required: true, message: 'Por favor, ingrese las horas trabajadas.' },
            { type: 'number', min: 0, message: 'Ingrese un número válido.' },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="horasExtras"
          label="Horas Extras"
          rules={[{ type: 'number', min: 0, message: 'Ingrese un número válido.' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="agregar-horas-button">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AgregarHoras;
