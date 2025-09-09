import React from "react";
import getSkills, { SkillCategory } from "../_info/Skill";
import View from "../_components/_util/View";

const SkillSection: React.FC = () => {
  const skillCategories: SkillCategory[] = getSkills();

  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-rows-1 lg:grid-rows-2 gap-6 mb-8">
        {skillCategories.map((category, categoryIndex) => (
          <View key={categoryIndex} className="p-6">
            <div className="text-center mb-5">
              <h3 className="text-xl font-semibold text-primary-text mb-1">
                {category.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <a
                  key={skillIndex}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tertiary-bg hover:bg-gray-200 rounded-full px-2 py-1 text-sm font-medium text-secondary-text hover:text-gray-900 transition-all duration-200 cursor-pointer group hover:shadow-sm"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200 inline-block mr-1">
                    <skill.icon size={13} />
                  </span>
                  {skill.name}
                </a>
              ))}
            </div>
          </View>
        ))}
      </div>
    </section>
  );
};
export default SkillSection;
