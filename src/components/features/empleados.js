// users.js
import React, { useState } from 'react';
import CommonTable from '../CommonTable/CommonTable';
import { Button, Space } from 'antd';
import CreateEditEmpleado from '../EditarEmpleado/EditarEmpleados';

const Users = () => {
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState(false);
    

    const data2 = [
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

    const columns2 = [
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
                onClick={() => {
                    setOpenModal(true);
                    setMode(false)
                }}
              >
                Editar
              </Button>
              <Button
                className="ant-btn-delete"
                //onClick={() => handleDelete(record.key)}
              >
                Desactivar
              </Button>
            </Space>
          ),
        },
    ];
    return (
        <div>
        <h1> Empleados </h1>
        <Button
            onClick={()=>{
                setOpenModal(true);
                setMode(true);
            }}
            type="primary"
        >
            Agregar Empleados
        </Button>
            <CommonTable 
                columns={columns2} 
                dataSource={data2}    
            />
            <CreateEditEmpleado mode={mode} openModal={openModal} handleCancel={() => {setOpenModal(false);}} />
        </div>
    );
};

export default Users;