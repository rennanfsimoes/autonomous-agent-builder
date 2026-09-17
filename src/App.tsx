import React, { useState } from 'react';
import { Terminal, Brain, Search, Code, Cpu } from 'lucide-react';
import { AgentWorkflow } from './components/AgentWorkflow';

function App() {
  const [isSimulating, setIsSimulating] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-zinc-950 font-sans">
      <header className="w-full max-w-5xl mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3 text-emerald-400">
          <Terminal size={32} />
          <h1 className="text-2xl font-bold tracking-tight">Autonomous Agent Builder</h1>
        </div>
        <button 
          onClick={() => setIsSimulating(!isSimulating)}
          className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
            isSimulating ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30'
          }`}
        >
          {isSimulating ? 'STOP SIMULATION' : 'INITIATE AGENT'}
        </button>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Tools Configuration Panel */}
        <div className="col-span-1 border border-zinc-800 rounded-xl p-5 bg-zinc-900/50">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
            <Cpu size={16} /> Tool Registry
          </h2>
          <div className="space-y-3">
            {[
              { name: 'WebSearchAPI', icon: Search, desc: 'Internet grounding capabilities' },
              { name: 'CodeInterpreter', icon: Code, desc: 'Secure sandbox execution' },
              { name: 'LogicEngine', icon: Brain, desc: 'Complex reasoning & math' }
            ].map((tool) => (
              <div key={tool.name} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                <tool.icon size={18} className="text-zinc-300 mt-0.5" />
                <div>
                  <h3 className="font-mono text-sm text-zinc-200">{tool.name}</h3>
                  <p className="text-xs text-zinc-500">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Trace & Chat Panel */}
        <div className="col-span-1 lg:col-span-2 border border-zinc-800 rounded-xl p-5 bg-zinc-900/50 min-h-[500px] flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
            <Terminal size={16} /> Execution Trace
          </h2>
          <div className="flex-1 bg-zinc-950 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-y-auto">
            {isSimulating ? (
              <AgentWorkflow />
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-600">
                Awaiting initialization command...
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
