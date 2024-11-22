import React, { useState } from 'react';
import { Table, Button, Space, Modal } from 'antd';
import EditarUsuario from '../EditarUsuario/EditarUsuario'; // Importar el componente de editar usuario
import './CommonTable.css'; // Estilos con los colores azules

const CommonTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
    },
    {
      title: 'Código Único',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Tipo de Salario',
      dataIndex: 'tipoSalario',
      key: 'tipoSalario',
    },
    {
      title: 'Medio de Pago',
      dataIndex: 'medioPago',
      key: 'medioPago',
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="ant-btn-edit"
            onClick={() => handleEdit(record)}
          >
            Editar
          </Button>
          <Button
            className="ant-btn-delete"
            onClick={() => handleDelete(record.key)}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      nombre: 'Juan',
      apellido: 'Pérez',
      codigo: 'A123',
      edad: 30,
      tipoSalario: 'Mensual',
      medioPago: 'Transferencia',
    },
    {
      key: '2',
      nombre: 'María',
      apellido: 'González',
      codigo: 'B456',
      edad: 25,
      tipoSalario: 'Quincenal',
      medioPago: 'Cheque',
    },
    {
      key: '3',
      nombre: 'Carlos',
      apellido: 'López',
      codigo: 'C789',
      edad: 40,
      tipoSalario: 'Por hora',
      medioPago: 'Efectivo',
    },
  ];

  const handleEdit = (user) => {
    setCurrentUser(user);  // Asignar el usuario seleccionado
    setIsModalVisible(true);  // Mostrar el Modal con el formulario de edición
  };

  const handleDelete = (key) => {
    console.log('Eliminar usuario con código:', key);
  };

  const handleCancel = () => {
    setIsModalVisible(false);  // Cerrar el Modal
    setCurrentUser(null);  // Limpiar los datos del usuario
  };

  return (
    <div className="table-container">
      <Table columns={columns} dataSource={data} pagination={false} />

      {/* Modal para editar usuario */}
      <Modal
        title="Editar Usuario"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}  // No mostrar los botones predeterminados
        width={800}
      >
        {currentUser && (
          <EditarUsuario usuarioData={currentUser} />  // Pasar los datos del usuario actual
        )}
      </Modal>
    </div>
  );
};

export default CommonTable;
