import React, { useState } from 'react';
import { Backpack } from 'lucide-react';
import { skillsData, skillCategories } from '../data/skillsData';
import { PixelBadge } from '../components/common/PixelBadge';
import { soundManager } from '../utils/soundEffects';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const activeSkill = selectedSkill || filteredSkills[0] || skillsData[0];

  const handleSelectSkill = (skill) => {
    soundManager.playBlip();
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#00e5ff]/40 text-[#00e5ff] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <Backpack className="w-3.5 h-3.5" />
          <span>INVENTORY SLOTS</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          SKILL TREE & INVENTORY
        </h2>
        <p className="font-mono text-xs text-slate-400 mt-2 max-w-md mx-auto">
          &gt; Select an item slot to view weapon stats, protocol telemetry & bonuses.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playSelect();
                setActiveCategory(cat.id);
              }}
              className={`
                px-3 py-1.5 font-pixel text-[9.5px] tracking-wide border-2 transition-all cursor-pointer shadow-[2px_2px_0px_#000]
                ${
                  isActive
                    ? 'bg-[#00e5ff] text-black border-black font-bold -translate-y-0.5'
                    : 'bg-[#101524] text-slate-400 border-[#1f2a44] hover:text-white hover:border-[#00e5ff]/60'
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Item Slots + Detailed Item Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Inventory Slots Matrix */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => handleSelectSkill(skill)}
                className={`
                  relative p-3 bg-[#0c101d] border-2 cursor-pointer transition-all duration-150
                  shadow-[3px_3px_0px_#000] group
                  ${
                    isSelected
                      ? 'border-[#00e5ff] bg-[#121a30] -translate-y-1 shadow-[0_0_12px_rgba(0,229,255,0.25)]'
                      : 'border-[#1b253f] hover:border-slate-400 hover:bg-[#101527]'
                  }
                `}
              >
                {/* Stepped Pixel Corners */}
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00e5ff]" />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00e5ff]" />

                {/* Level / Rarity Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel text-[7.5px] text-[#ffb703]">
                    {skill.level}
                  </span>
                  <span
                    className="w-2 h-2"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>

                {/* Item Name */}
                <h3 className="font-pixel text-[10px] text-white tracking-wide truncate mb-1">
                  {skill.name}
                </h3>

                {/* Rarity Label */}
                <span className="font-mono text-[9px] text-slate-400 block uppercase">
                  {skill.rarity} ITEM
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: RPG Item Inspector / Tooltip Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-20 bg-[#0c0f1b] border-2 border-[#00e5ff] shadow-[6px_6px_0px_#000] p-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-[#1c263f] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5"
                  style={{ backgroundColor: activeSkill?.color || '#00e5ff' }}
                />
                <h3 className="font-pixel text-xs text-white uppercase">
                  {activeSkill?.name || 'Skill Slot'}
                </h3>
              </div>
              <PixelBadge
                variant={
                  activeSkill?.rarity === 'Legendary'
                    ? 'legendary'
                    : activeSkill?.rarity === 'Epic'
                    ? 'epic'
                    : 'rare'
                }
                size="xs"
              >
                {activeSkill?.rarity || 'Common'}
              </PixelBadge>
            </div>

            {/* Level & Class */}
            <div className="bg-[#12182b] border border-[#202d4d] p-2.5 mb-4 font-mono text-xs space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>Rank Level:</span>
                <span className="text-[#39ff14] font-bold">{activeSkill?.level || 'Lvl 1'}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Category:</span>
                <span className="text-[#00e5ff] uppercase font-semibold">
                  {activeSkill?.category || 'general'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <h4 className="font-pixel text-[8.5px] text-slate-400 mb-1.5 uppercase">
                ITEM LORE & USAGE:
              </h4>
              <p className="font-mono text-xs text-slate-200 leading-relaxed bg-[#070912] p-3 border border-[#162038]">
                {activeSkill?.description || 'Inspect slot telemetry.'}
              </p>
            </div>

            {/* Stat Modifiers */}
            <div>
              <h4 className="font-pixel text-[8.5px] text-[#ffb703] mb-1.5 uppercase">
                STAT BONUSES & PERKS:
              </h4>
              <div className="bg-[#101914] border border-[#1e452f] p-2.5 font-mono text-xs text-[#39ff14] font-medium">
                ⚡ {activeSkill?.stats || '+10 Proficiency'}
              </div>
            </div>

            {/* Subtext */}
            <p className="font-mono text-[10px] text-slate-500 mt-4 text-center">
              (Click any inventory item to equip & inspect)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
