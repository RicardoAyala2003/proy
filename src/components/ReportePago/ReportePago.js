import React from 'react';
import { Card, Typography, Space } from 'antd';
import './ReportePago.css';

const { Title, Paragraph } = Typography;

const ReportePago = () => {
  return (
    <div className="reporte-pago-container">
      <Card className="reporte-pago-card">
        <Typography>
          <Title level={3} className="reporte-pago-title">Reporte y Pago</Title>
          <Space direction="vertical" size={16} className="reporte-pago-text">
            <Paragraph>
              <strong>No se generarán reportes ni habrá integración con sistemas de pago externos.</strong>
            </Paragraph>
            <Paragraph>
              El cálculo final será visualizado por el usuario, quien podrá procesar la planilla manualmente.
            </Paragraph>
            <Paragraph>
              Una vez aprobada la planilla, se podría generar un <strong>“payslip”</strong> que llegará al correo de cada empleado.
            </Paragraph>
            <Paragraph>
              Verificar ejemplo de payslip.
            </Paragraph>
          </Space>
        </Typography>
      </Card>
    </div>
  );
};

export default ReportePago;
