import React, { useState } from 'react';
import { Form, Select, Input, Button, Card, message } from 'antd';
import './CicloPlanillas.css';

const { Option } = Select;

const CicloPlanillas = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Ciclo de planilla configurado correctamente.');
      console.log('Datos enviados:', values);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Por favor completa todos los campos.');
    console.log('Error:', errorInfo);
  };

  return (
    <div className="ciclo-planillas-container">
      <Card
        title={<h2>Configuración de Ciclo de Planillas</h2>}
        className="ciclo-planillas-card"
      >
        <Form
          name="cicloPlanillas"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="tipoCiclo"
            label="Tipo de Ciclo"
            rules={[{ required: true, message: 'Selecciona el tipo de ciclo.' }]}
          >
            <Select placeholder="Selecciona el ciclo de planilla">
              <Option value="mensual">Mensual</Option>
              <Option value="quincenal">Quincenal</Option>
              <Option value="semanal">Semanal</Option>
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
            <Button type="primary" htmlType="submit" loading={loading} block>
              Guardar Configuración
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CicloPlanillas;
