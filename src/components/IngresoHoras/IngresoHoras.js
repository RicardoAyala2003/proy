import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, message } from 'antd';
import './IngresoHoras.css';

const IngresoHoras = () => {
  const [horas, setHoras] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddHoras = (values) => {
    const nuevaEntrada = {
      key: horas.length + 1,
      empleado: values.empleado,
      horasTrabajadas: values.horasTrabajadas,
      horasExtras: values.horasExtras || 0,
    };

    setHoras([...horas, nuevaEntrada]);
    setIsModalVisible(false);
    form.resetFields();
    message.success('Horas ingresadas exitosamente.');
  };

  const columns = [
    {
      title: 'Empleado',
      dataIndex: 'empleado',
      key: 'empleado',
    },
    {
      title: 'Horas Trabajadas',
      dataIndex: 'horasTrabajadas',
      key: 'horasTrabajadas',
    },
    {
      title: 'Horas Extras',
      dataIndex: 'horasExtras',
      key: 'horasExtras',
    },
  ];

  return (
    <div className="ingreso-horas-container">
      <h2>Ingreso de Horas Laboradas</h2>
      <Button type="primary" onClick={showModal}>
        Registrar Horas
      </Button>
      <Table
        style={{ marginTop: '20px' }}
        dataSource={horas}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Registrar Horas"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
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
            rules={[
              { type: 'number', min: 0, message: 'Ingrese un número válido.' },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default IngresoHoras;
