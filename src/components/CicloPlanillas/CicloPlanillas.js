import React, { useEffect, useState } from 'react';
import { Form, Select, Input, Button, Modal, message } from 'antd';
import './CicloPlanillas.css';

const { Option } = Select;

const CicloPlanillas = ({ visible, onClose, planilla }) => { // <-- Asegúrate de recibir las props aquí
  const [form] = Form.useForm(); // <-- Hook para manejar el formulario
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (planilla) {
      form.setFieldsValue(planilla); // Rellena los valores si se pasa una planilla
    } else {
      form.resetFields(); // Limpia los valores si es un nuevo ciclo
    }
  }, [planilla, form]);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Ciclo de planilla configurado correctamente.');
      console.log('Datos enviados:', values);
      onClose(); // Cierra el modal
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Por favor completa todos los campos.');
    console.log('Error:', errorInfo);
  };

  return (
    <Modal
      title={planilla ? 'Editar Ciclo de Planilla' : 'Agregar Ciclo de Planilla'}
      visible={visible} // <-- Prop para mostrar/ocultar el modal
      onCancel={onClose} // <-- Prop para cerrar el modal
      footer={null}
    >
      <Form
        form={form} // Asocia el formulario al hook `useForm`
        name="cicloPlanillas"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="tipoCiclo"
          label="Tipo de Ciclo"
          rules={[{ required: true, message: 'Selecciona el tipo de ciclo.' }]}
        >
          <Select placeholder="Selecciona el ciclo de planilla">
            <Option value="Mensual">Mensual</Option>
            <Option value="Quincenal">Quincenal</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="fechaInicio"
          label="Fecha de Inicio"
          rules={[{ required: true, message: 'Selecciona la fecha de inicio.' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          name="fechaFin"
          label="Fecha de Fin"
          rules={[{ required: true, message: 'Selecciona la fecha de fin.' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          name="estado"
          label="Estado"
          rules={[{ required: true, message: 'Selecciona el estado.' }]}
        >
          <Select placeholder="Selecciona el estado">
            <Option value="Pendiente">Pendiente</Option>
            <Option value="Aprobada">Aprobada</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Guardar Configuración
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CicloPlanillas;
