import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  ScheduleOutlined,
  CalculatorOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Navigate } from 'react-router-dom';
import CommonTable from '../CommonTable/CommonTable'; // Importamos el componente CommonTable
import Registro from '../Registro/Registro'; // Importamos Registro
import './SideMenu.css';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [selectedKey, setSelectedKey] = useState(''); // Para controlar la selección

  const handleMenuClick = (menuKey) => {
    console.log('Opción seleccionada:', menuKey);

    if (menuKey === 'logout') {
      setIsLoggedOut(true);
    } else {
      setSelectedKey(menuKey);
    }
  };

  if (isLoggedOut) {
    return <Navigate to="/login" />;
  }

  const renderContent = () => {
    switch (selectedKey) {
      case 'crear-usuarios':
        return <Registro />; // Mostrar Registro para "Crear Usuarios"
      case 'gestionar-usuarios':
        return <CommonTable />; // Mostrar CommonTable para "Gestionar Usuarios"
      case 'gestion-empleados':
        return <CommonTable />; // Reutilizamos CommonTable para "Gestión de Empleados"
      default:
        return (
          <div>
            <h2>Bienvenido al Panel de Control</h2>
            <p>Selecciona una opción del menú lateral para empezar.</p>
          </div>
        );
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Menú lateral */}
      <Sider collapsible className="side-menu">
        <div className="logo">
          <h1 style={{ color: 'white', textAlign: 'center', padding: '10px' }}>Mi App</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(item) => handleMenuClick(item.key)}
        >
          <SubMenu key="gestion-usuarios" icon={<UserOutlined />} title="Gestión de Usuarios">
            <Menu.Item key="crear-usuarios">Crear Usuarios</Menu.Item>
            <Menu.Item key="gestionar-usuarios">Gestionar Usuarios</Menu.Item>
          </SubMenu>
          <Menu.Item key="gestion-empleados" icon={<TeamOutlined />}>
            Gestión de Empleados
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Configuración de Deducciones
          </Menu.Item>
          <Menu.Item key="4" icon={<ScheduleOutlined />}>
            Ciclo de Planillas
          </Menu.Item>
          <Menu.Item key="5" icon={<CalculatorOutlined />}>
            Cálculo Salarial
          </Menu.Item>

          {/* Opción de Cerrar sesión */}
          <Menu.Item key="logout" icon={<PoweroffOutlined />}>
            Cerrar Sesión
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Contenido principal */}
      <Content
        style={{
          margin: '16px',
          padding: '24px',
          background: '#fff',
        }}
      >
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default SideMenu;
