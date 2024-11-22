import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import './Deducciones.css';

const { Option } = Select;

const Deducciones = () => {
  const [deducciones, setDeducciones] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddDeduccion = (values) => {
    const nuevaDeduccion = {
      key: deducciones.length + 1,
      nombre: values.nombre,
      frecuencia: values.frecuencia,
      monto: values.monto,
    };

    setDeducciones([...deducciones, nuevaDeduccion]);
    setIsModalVisible(false);
    form.resetFields();
    message.success('Deducción agregada exitosamente.');
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Frecuencia',
      dataIndex: 'frecuencia',
      key: 'frecuencia',
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
      key: 'monto',
    },
  ];

  return (
    <div className="deducciones-container">
      <h2>Gestión de Deducciones</h2>
      <Button type="primary" onClick={showModal}>
        Agregar Deducción
      </Button>
      <Table
        style={{ marginTop: '20px' }}
        dataSource={deducciones}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Agregar Nueva Deducción"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddDeduccion}>
          <Form.Item
            name="nombre"
            label="Nombre de la Deducción"
            rules={[{ required: true, message: 'Por favor, ingrese el nombre.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="frecuencia"
            label="Frecuencia"
            rules={[{ required: true, message: 'Por favor, seleccione la frecuencia.' }]}
          >
            <Select placeholder="Seleccione una frecuencia">
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
            <Input />
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

export default Deducciones;
