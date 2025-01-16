"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, AlertTriangle, Clock, Activity, Server, Shield, Cloud } from 'lucide-react';
import AnimatedGradientText from '@/components/animated-text';

const StatusDashboard = () => {
  const [services] = useState([
    {
      name: 'Website Frontend',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Website',
      color: 'text-blue-500'
    },
    {
      name: 'API Services',
      status: 'degraded',
      uptime: '98.45%',
      lastIncident: '2 hours ago',
      type: 'API',
      color: 'text-purple-500'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: '3 days ago',
      type: 'Infrastructure',
      color: 'text-green-500'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Infrastructure',
      color: 'text-emerald-500'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '95.50%',
      lastIncident: 'Ongoing',
      type: 'Service',
      color: 'text-pink-500'
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
    <div className="min-h-screen bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <AnimatedGradientText as="h1" className="text-6xl">System Status</AnimatedGradientText>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Activity className="w-6 h-6 text-green-500" />
            <p className="text-2xl text-zinc-400">
              All systems are operational
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <Card className="bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-xl hover:transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-zinc-900 ${service.color} transition-all duration-300 group-hover:scale-110 border-1`}>
                      {getStatusIcon(service.status)}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{service.name}</CardTitle>
                      <p className="text-zinc-400">{service.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white">
                      {getStatusText(service.status)}
                    </p>
                    <p className="text-zinc-400">
                      Uptime: {service.uptime}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-lg">
                    Last incident: {service.lastIncident}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusDashboard;