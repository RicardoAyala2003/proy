import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import AgregarHoras from './AgregarHoras';
import './IngresoHoras.css';

const IngresoHoras = () => {
  const [horas, setHoras] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      
      {/* AgregarHoras modal */}
      <AgregarHoras
        visible={isModalVisible}
        onCancel={handleCancel}
        onAddHoras={handleAddHoras}
      />
    </div>
  );
};

export default IngresoHoras;
