"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import styles from "./Skills.module.css"

type SkillCategory = "frontend" | "backend" | "database" | "tools" | "ai" | "cloud"

interface Skill {
  name: string
  icon: string
  level: number
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const skills: Record<SkillCategory, Skill[]> = {
    frontend: [
      { name: "Next.js", icon: "▲", level: 90 },
      { name: "React", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "�", level: 88 },
      { name: "TypeScript", icon: "�", level: 85 },
      { name: "HTML/CSS", icon: "🎨", level: 92 },
      { name: "Tailwind CSS", icon: "🌊", level: 85 },
    ],
    backend: [
      { name: "Python", icon: "�", level: 92 },
      { name: "Django REST Framework", icon: "🔌", level: 90 },
      { name: "Flask", icon: "🧪", level: 85 },
      { name: "FastAPI", icon: "⚡", level: 82 },
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "C++", icon: "⚙️", level: 80 },
      { name: "REST API", icon: "🔗", level: 90 },
    ],
    database: [
      { name: "MongoDB", icon: "🍃", level: 88 },
      { name: "MySQL", icon: "🐬", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 85 },
      { name: "Firebase", icon: "🔥", level: 82 },
      { name: "Supabase", icon: "⚡", level: 78 },
    ],
    tools: [
      { name: "Git & GitHub", icon: "📊", level: 92 },
      { name: "Postman", icon: "�", level: 88 },
      { name: "VS Code", icon: "📝", level: 95 },
      { name: "Linux", icon: "🐧", level: 85 },
      { name: "JSON", icon: "📄", level: 90 },
    ],
    ai: [
      { name: "Generative AI", icon: "✨", level: 88 },
      { name: "OpenAI API", icon: "🤖", level: 90 },
      { name: "Chatbot Development", icon: "💬", level: 88 },
      { name: "AI Agents", icon: "🤖", level: 85 },
      { name: "LLMs", icon: "�", level: 85 },
      { name: "Machine Learning", icon: "📊", level: 80 },
      { name: "NLP", icon: "�", level: 78 },
    ],
    cloud: [
      { name: "Vercel", icon: "▲", level: 90 },
      { name: "Netlify", icon: "🌐", level: 85 },
      { name: "Azure", icon: "☁️", level: 75 },
      { name: "WordPress Integration", icon: "📝", level: 85 },
      { name: "Netlify", icon: "🌐", level: 80 },
      { name: "Heroku", icon: "🟣", level: 80 },
    ],
  }

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          I&apos;ve acquired a diverse set of skills throughout my journey as a developer. Here&apos;s a comprehensive overview of
          my technical expertise.
        </p>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "frontend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "backend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("backend")}
          >
            Backend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "database" ? styles.active : ""}`}
            onClick={() => setActiveCategory("database")}
          >
            Database
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "tools" ? styles.active : ""}`}
            onClick={() => setActiveCategory("tools")}
          >
            Tools
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "ai" ? styles.active : ""}`}
            onClick={() => setActiveCategory("ai")}
          >
            AI & ML
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "cloud" ? styles.active : ""}`}
            onClick={() => setActiveCategory("cloud")}
          >
            Cloud
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillBarWrapper}>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
