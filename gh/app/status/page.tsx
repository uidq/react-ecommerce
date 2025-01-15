"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, AlertTriangle, Clock, Activity } from 'lucide-react';

const StatusDashboard = () => {
  const [services] = useState([
    {
      name: 'Website Frontend',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Website'
    },
    {
      name: 'API Services',
      status: 'degraded',
      uptime: '98.45%',
      lastIncident: '2 hours ago',
      type: 'API'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: '3 days ago',
      type: 'Infrastructure'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Infrastructure'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '95.50%',
      lastIncident: 'Ongoing',
      type: 'Service'
    }
  ]);

  const getStatusIcon = (status: any) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'incident':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusText = (status: any) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'incident':
        return 'Major Outage';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-[#0a0a0a]">
      <div className="border-b bg-[#0a0a0a]">
        <div className="bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                System Status
              </h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-2 h-2 text-green-500" />
                <p className="text-xl text-gray-400">
                  All systems are operational
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-1 bg-[#111111] shadow-lg hover:border-zinc-600 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <CardTitle className="text-gray-200">{service.name}</CardTitle>
                    <p className="text-sm text-gray-400">{service.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-200">
                    {getStatusText(service.status)}
                  </p>
                  <p className="text-sm text-gray-400">
                    Uptime: {service.uptime}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Last incident: {service.lastIncident}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusDashboard;