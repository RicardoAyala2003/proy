import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import './Deducciones.css';
import AgregarDeducciones from './AgregarDeducciones'; // Importamos el componente de AgregarDeducciones

const Deducciones = () => {
  const [deducciones, setDeducciones] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Función para mostrar el modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Función para cerrar el modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Función para agregar una nueva deducción
  const handleAddDeduccion = (values) => {
    const nuevaDeduccion = {
      key: deducciones.length + 1,
      nombre: values.nombre,
      frecuencia: values.frecuencia,
      monto: values.monto,
    };

    setDeducciones([...deducciones, nuevaDeduccion]);
    setIsModalVisible(false); // Cierra el modal después de agregar
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

      {/* Aquí usamos el componente AgregarDeducciones */}
      <AgregarDeducciones 
        visible={isModalVisible}
        onCancel={handleCancel}
        onAddDeduccion={handleAddDeduccion}
      />
    </div>
  );
};

export default Deducciones;
