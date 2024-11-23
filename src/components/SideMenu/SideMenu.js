import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  ScheduleOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Navigate } from 'react-router-dom'; // Componente existente
import Deducciones from '../Deducciones/Deducciones'; // Componente existente
import IngresoHoras from '../IngresoHoras/IngresoHoras'; // Componente existente
import CicloPlanillas from '../CicloPlanillas/CicloPlanillas'; // Componente existente
import ListaPlanillas from '../ListaPlanillas/ListaPlanillas'; // Nuevo componente
import ReportePago from '../ReportePago/ReportePago'; // Componente único para Reporte y Pago
import './SideMenu.css';
import Users from '../features/users';
import Empleados from '../features/empleados';

const { Sider, Content } = Layout;

const SideMenu = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');

  const handleMenuClick = (menuKey) => {
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
      case 'gestion-usuarios': // Mostrar el formulario directamente
        return <Users />;
        case 'gestion-empleados': 
        return <Empleados />;
      case 'deducciones':
        return <Deducciones />;
      case 'ingreso-horas':
        return <IngresoHoras />;
      case 'ciclo-planillas':
        return <CicloPlanillas />;
      case 'lista-planillas':
        return <ListaPlanillas />;
      case 'reporte-pago':
        return <ReportePago />;
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
      <Sider collapsible className="side-menu">
        <div className="logo">
          <h1 style={{ color: 'white', textAlign: 'center', padding: '10px' }}>Menú</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(item) => handleMenuClick(item.key)}
        >
          <Menu.Item key="gestion-usuarios" icon={<UserOutlined />}>
            Gestión de Usuarios
          </Menu.Item>
          <Menu.Item key="gestion-empleados" icon={<TeamOutlined />}>
            Gestión de Empleados
          </Menu.Item>
          <Menu.Item key="deducciones" icon={<SettingOutlined />}>
            Deducciones
          </Menu.Item>
          <Menu.Item key="ingreso-horas" icon={<ScheduleOutlined />}>
            Ingreso de Horas
          </Menu.Item>
          <Menu.SubMenu key="planillas" icon={<CalculatorOutlined />} title="Planillas">
            <Menu.Item key="ciclo-planillas">Ciclo de Planillas</Menu.Item>
            <Menu.Item key="lista-planillas">Lista de Planillas</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="reporte-pago" icon={<FileTextOutlined />}>
            Reporte y Pago
          </Menu.Item>
          <Menu.Item key="logout" icon={<PoweroffOutlined />}>
            Cerrar Sesión
          </Menu.Item>
        </Menu>
      </Sider>

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

export default SideMenu;//
