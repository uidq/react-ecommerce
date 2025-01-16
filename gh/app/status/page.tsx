"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, AlertTriangle, Clock, Activity, Server, Shield, Cloud } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AnimatedGradientText from '@/components/animated-text';

const StatusDashboard = () => {
  const generateUptimeData = (baseUptime: any) => {
    return Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      uptime: baseUptime + (Math.random() * 2 - 1)
    }));
  };

  const [services] = useState([
    {
      name: 'Website Frontend',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Website',
      color: 'text-blue-500',
      lineColor: '#3b82f6',
      uptimeData: generateUptimeData(99.99)
    },
    {
      name: 'API Services',
      status: 'degraded',
      uptime: '98.45%',
      lastIncident: '2 hours ago',
      type: 'API',
      color: 'text-purple-500',
      lineColor: '#a855f7',
      uptimeData: generateUptimeData(98.45)
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: '3 days ago',
      type: 'Infrastructure',
      color: 'text-green-500',
      lineColor: '#22c55e',
      uptimeData: generateUptimeData(99.95)
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'No incidents reported',
      type: 'Infrastructure',
      color: 'text-emerald-500',
      lineColor: '#10b981',
      uptimeData: generateUptimeData(99.99)
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '95.50%',
      lastIncident: 'Ongoing',
      type: 'Service',
      color: 'text-pink-500',
      lineColor: '#ec4899',
      uptimeData: generateUptimeData(95.50)
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

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg shadow-lg">
          <p className="text-white">{`Uptime: ${payload[0].value.toFixed(2)}%`}</p>
          <p className="text-zinc-400">{`Hour: ${payload[0].payload.hour}:00`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-4 mb-6">
            <Server className="h-8 w-8 text-blue-500 animate-pulse" />
            <Shield className="h-8 w-8 text-purple-500 animate-pulse delay-75" />
            <Cloud className="h-8 w-8 text-green-500 animate-pulse delay-150" />
          </div>
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
                    <div className={`p-2 rounded-lg bg-zinc-900 ${service.color} transition-all duration-300 group-hover:scale-110`}>
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
                  <p className="text-zinc-400 text-lg mb-4">
                    Last incident: {service.lastIncident}
                  </p>
                  <div className="h-32 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={service.uptimeData}>
                        <XAxis 
                          dataKey="hour" 
                          stroke="#71717a"
                          tickFormatter={(hour) => `${hour}h`}
                        />
                        <YAxis 
                          domain={[90, 100]} 
                          stroke="#71717a"
                          tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line 
                          type="monotone" 
                          dataKey="uptime" 
                          stroke={service.lineColor}
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
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