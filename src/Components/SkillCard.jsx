import { useState } from 'react';

const SkillCard = ({ category, icon, skills }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="col-xl-6 col-md-6 h-100">
      <div className="drop-down">
        <div className="inner-container" onClick={handleToggleVisibility}>
          <i className={icon + ' skill-icon'}></i>
          <h5>{category}</h5>
          <i
            className={`bx bx-chevron-down ${isVisible ? 'active' : ''}`}
          ></i>
        </div>
      </div>
      <div className={`skills-set-container mb-2 ${isVisible ? 'show' : ''}`}>
        {skills.map((skill, index) => (
          <div className="list" key={index}>
            <i className={skill.icon}></i>
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
