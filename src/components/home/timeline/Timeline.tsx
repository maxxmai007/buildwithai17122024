import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { timelineEvents } from './TimelineData';
import { TimelinePoint } from './TimelinePoint';

export function Timeline() {
  return (
    <div className="relative w-full h-[200px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={timelineEvents}
          margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
        >
          {/* Curved line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#timelineGradient)"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={true}
            animationDuration={2000}
          />
          
          {/* Custom X-axis */}
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={({ x, y, payload }) => (
              <g transform={`translate(${x},${y})`}>
                <text
                  x={0}
                  y={25}
                  textAnchor="middle"
                  fill="#D4B788"
                  className="text-sm font-medium"
                  opacity={0.8}
                >
                  {payload.value}
                </text>
              </g>
            )}
          />
          
          <YAxis hide={true} domain={[0, 100]} />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D4B788" stopOpacity={0.6} />
              <stop offset="50%" stopColor="#D4B788" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#D4B788" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          
          {/* Interactive points */}
          {timelineEvents.map((event, index) => (
            <TimelinePoint
              key={event.date}
              event={event}
              cx={`${index * (100 / (timelineEvents.length - 1))}%`}
              cy={`${100 - event.value}%`}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}