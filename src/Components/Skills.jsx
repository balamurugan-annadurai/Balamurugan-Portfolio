import { useState } from 'react';
import { skillsData } from '../utils/skillData';
import SkillCard from './SkillCard';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="skills container" id="skills">
      <p className="text-center m-0">Explore My</p>
      <h2 className="text-center skills-title">Skills</h2>
      <div className="skills-main-container">
        <div className="row g-0">
          {skillsData.map((data, index) => (
            <SkillCard
              key={index}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={handleToggleSection}
              category={data.category}
              icon={data.icon}
              skills={data.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
