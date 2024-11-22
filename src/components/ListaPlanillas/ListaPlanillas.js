import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import './ListaPlanillas.css';

const { Option } = Select;

const ListaPlanillas = () => {
  // Estado de los datos de planillas
  const [data, setData] = useState([
    {
      key: '1',
      tipoCiclo: 'Mensual',
      diaCorte: '30',
    },
    {
      key: '2',
      tipoCiclo: 'Quincenal',
      diaCorte: '15',
    },
    {
      key: '3',
      tipoCiclo: 'Semanal',
      diaCorte: '7',
    },
  ]);

  // Estado para el modal de edición
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  // Abrir el modal de edición
  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  // Eliminar un registro
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    message.success('Ciclo eliminado exitosamente.');
  };

  // Guardar cambios en el modal de edición
  const handleSave = (values) => {
    const newData = data.map((item) =>
      item.key === currentRecord.key ? { ...item, ...values } : item
    );
    setData(newData);
    setIsModalOpen(false);
    message.success('Ciclo actualizado exitosamente.');
  };

  // Cancelar edición
  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  };

  // Columnas de la tabla
  const columns = [
    {
      title: 'Tipo de Ciclo',
      dataIndex: 'tipoCiclo',
      key: 'tipoCiclo',
    },
    {
      title: 'Día de Corte',
      dataIndex: 'diaCorte',
      key: 'diaCorte',
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Editar
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.key)}>
            Eliminar
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="lista-planillas-container">
      <h2>Lista de Planillas Configuradas</h2>
      <Table dataSource={data} columns={columns} />

      {/* Modal para editar */}
      <Modal
        title="Editar Ciclo de Planilla"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={currentRecord}
          onFinish={handleSave}
        >
          <Form.Item
            name="tipoCiclo"
            label="Tipo de Ciclo"
            rules={[{ required: true, message: 'Selecciona el tipo de ciclo.' }]}
          >
            <Select placeholder="Selecciona el ciclo de planilla">
              <Option value="Mensual">Mensual</Option>
              <Option value="Quincenal">Quincenal</Option>
              <Option value="Semanal">Semanal</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="diaCorte"
            label="Día de Corte"
            rules={[
              { required: true, message: 'Ingresa el día de corte de planilla.' },
              { pattern: /^[0-9]+$/, message: 'Debe ser un número válido.' },
            ]}
          >
            <Input placeholder="Por ejemplo: 15 para quincenal o 30 para mensual" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Guardar Cambios
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ListaPlanillas;
