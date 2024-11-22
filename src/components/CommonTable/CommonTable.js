import React from 'react';
import { Table, Button, Space } from 'antd';
import './CommonTable.css'; // Estilos con los colores azules

const CommonTable = () => {
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
            onClick={() => handleEdit(record.key)}
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

  const handleEdit = (key) => {
    console.log('Editar usuario con código:', key);
  };

  const handleDelete = (key) => {
    console.log('Eliminar usuario con código:', key);
  };

  return (
    <div className="table-container">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default CommonTable;
