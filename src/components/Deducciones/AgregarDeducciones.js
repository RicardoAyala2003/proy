import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, DatePicker, InputNumber } from 'antd';
import './AgregarDeducciones.css'; // Añadimos un archivo de estilos personalizado
const { RangePicker } = DatePicker;
const { Option } = Select;

const AgregarDeducciones = ({ visible, onCancel, onAddDeduccion }) => {

  const [form] = Form.useForm();
  const [isEndDateDisabled, setIsEndDateDisabled] = useState(true); 

  const handleSubmit = (values) => {
    onAddDeduccion(values);
    form.resetFields();
  };
  const disabledDate = (current) => {
    return current && current.date() !== 15 && current.date() !== 30;
  };

  const validateEndDate = (_, value) => {
    const startDate = form.getFieldValue('startDate');
    if (value && startDate && (value.isBefore(startDate, 'day') || value.isSame(startDate, 'day'))) {
      return Promise.reject('La fecha final debe ser posterior a la fecha de inicio.');
    }
    return Promise.resolve();
  };
  const handleStartDateChange = (value) => {
    setIsEndDateDisabled(!value);
  }

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
          name="startDate"
          label="Fecha de Inicio"
          rules={[{ 
            required: true,
            message: 'Seleccione una fecha de inicio.' 
          }]}
        >
          <DatePicker
            disabledDate={disabledDate}
            format="DD/MM/YYYY"
            onChange={handleStartDateChange}
          />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="Fecha de Final"
          rules={[
            { validator: validateEndDate } // Validación personalizada para fecha final
          ]}
        >
          <DatePicker
            disabledDate={disabledDate}
            format="DD/MM/YYYY"
            disabled={isEndDateDisabled} 
          />
        </Form.Item>

        <Form.Item
          name="monto"
          label="Monto"
          rules={[
            { required: true, message: 'Por favor, ingrese el monto.' },
            { pattern: /^[0-9]+$/, message: 'Solo se permiten números.' },
          ]}
        >
          <InputNumber
            defaultValue={0}
            formatter={(value) => `L ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
          />
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
