import React, { useState, useEffect } from 'react';

const MOCK_TRACE = [
  "> System: Initializing Autonomous Agent Core v1.0.0...",
  "> System: Loading tool schemas [WebSearchAPI, CodeInterpreter, LogicEngine]...",
  "> Agent: Ready. Awaiting user objective.",
  "\n[USER INPUT]: Find the current market trend for AI Agents and write a small python script to plot the data.",
  "\n> Agent: Analyzing objective...",
  "> Agent: Generating plan...",
  "  1. Use WebSearchAPI to find 'AI Agent market trends 2026'.",
  "  2. Use CodeInterpreter to write and execute a matplotlib script.",
  "\n> Agent: Executing Step 1...",
  "> Tool [WebSearchAPI]: Input: 'AI Agent market trends 2026'",
  "> Tool [WebSearchAPI]: Status: Success. Retrieved 3 key data points.",
  "\n> Agent: Synthesizing search results...",
  "> Agent: Executing Step 2...",
  "> Tool [CodeInterpreter]: Input: 'import matplotlib.pyplot as plt...'",
  "> Tool [CodeInterpreter]: Status: Success. Output: 'plot_generated.png'",
  "\n> Agent: Objective achieved. Finalizing response..."
];

export function AgentWorkflow() {
  const [trace, setTrace] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < MOCK_TRACE.length) {
      const timer = setTimeout(() => {
        setTrace((prev) => [...prev, MOCK_TRACE[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 800 + 400); // Random delay between 400ms and 1200ms
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-1.5 whitespace-pre-wrap">
      {trace.map((line, idx) => (
        <span 
          key={idx} 
          className={`${line.includes('Tool [') ? 'text-amber-300' : line.includes('USER INPUT') ? 'text-purple-400 font-bold' : line.includes('Agent:') ? 'text-emerald-400' : 'text-zinc-500'}`}
        >
          {line}
        </span>
      ))}
      {currentIndex < MOCK_TRACE.length && (
        <span className="animate-pulse text-emerald-500">_</span>
      )}
    </div>
  );
}
