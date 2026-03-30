"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import styles from "./Technologies.module.css"

interface Technology {
  name: string
  icon: string
  category: string
}

const Technologies = () => {
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

  const technologies: Technology[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "HTML/CSS", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", category: "Frontend" },
    { name: "Tailwind CSS", icon: "🌊", category: "Frontend" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express", icon: "🚂", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "C++", icon: "⚙️", category: "Backend" },
    { name: "REST API", icon: "🔌", category: "Backend" },
    { name: "Socket.io", icon: "🔄", category: "Backend" },

    // Database
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Database" },
    { name: "Supabase", icon: "⚡", category: "Database" },

    // Tools
    { name: "Git", icon: "📊", category: "Tools" },
    { name: "Linux", icon: "🐧", category: "Tools" },
    { name: "VS Code", icon: "📝", category: "Tools" },

    // AI & ML
    { name: "TensorFlow", icon: "🧠", category: "AI & ML" },
    { name: "PyTorch", icon: "🔥", category: "AI & ML" },
    { name: "Ai Agent", icon: "🤖", category: "AI & ML"},
    { name: "OpenAI", icon: "🧠", category: "AI & ML" },
    { name: "LangChain", icon: "🔗", category: "AI & ML" },
    { name: "Hugging Face", icon: "🤗", category: "AI & ML" },
    { name: "Machine Learning", icon: "🤖", category: "AI & ML" },
    { name: "Data Science", icon: "📊", category: "AI & ML" },
    { name: "NLP", icon: "💬", category: "AI & ML" },
    { name: "Computer Vision", icon: "👁️", category: "AI & ML" },
    { name: "Deep Learning", icon: "🔮", category: "AI & ML" },

    // Cloud
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Google Cloud", icon: "☁️", category: "Cloud" },
    { name: "Vercel", icon: "▲", category: "Cloud" },
    { name: "Netlify", icon: "🌐", category: "Cloud" },
  ]

  // Group technologies by category
  const categories = Array.from(new Set(technologies.map((tech) => tech.category)))

  return (
    <section id="technologies" className={`section ${styles.technologies}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="section-subtitle">
          I&apos;m proficient in a wide range of technologies across the full stack development spectrum. Here are the tools
          and frameworks I use to build powerful applications.
        </p>

        <div className={styles.categoriesContainer}>
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.techGrid}>
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`${styles.techItem} ${isVisible ? styles.visible : ""}`}
                      style={{ "--i": techIndex } as React.CSSProperties}
                    >
                      <div className={styles.techIcon}>{tech.icon}</div>
                      <p className={styles.techName}>{tech.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
