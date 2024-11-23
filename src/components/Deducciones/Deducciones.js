import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import './Deducciones.css';
import AgregarDeducciones from './AgregarDeducciones'; // Importamos el componente de AgregarDeducciones
import CommonTable from '../CommonTable/CommonTable';

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
      title: 'Fecha de Inicio',
      dataIndex: 'startDale',
      key: 'frecuencia',
    },
    {
      title: 'Fecha de final',
      dataIndex: 'endDate',
      key: 'endDate',
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

      <CommonTable
        columns={columns}
      />

      <AgregarDeducciones 
        visible={isModalVisible}
        onCancel={handleCancel}
        onAddDeduccion={handleAddDeduccion}
      />
    </div>
  );
};

export default Deducciones;
