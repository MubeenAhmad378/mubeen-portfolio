import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.greeting}>Hello, I am Mubeen Ahmad.</h3>
              <div className={styles.decorativeLine}></div>
            </div>
            
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
                Hello, I am Mubeen Ahmad.
              </p>
              <p className={styles.bio}>
               With strong proficiency in JavaScript and PHP, and hands-on experience with frameworks such as React, Next.js, Laravel, and Node.js, I am well-equipped to handle full-stack web development tasks. I specialize in building scalable web applications, developing RESTful APIs, and integrating modern technologies to deliver efficient, secure, and business-focused solutions.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>Mubeen Ahmad</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>mubeen.166912@gmail.com</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Lahore, Pakistan</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Education:</span>
                <span className={styles.value}>BS Software Engineering, GCUF</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>My Journey</h4>

              <div className={styles.timelineItems}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Senior Software Engineer - Elite Techlogix</h5>
                    <p className={styles.timelinePeriod}>Present</p>
                    <p>Leading development of scalable web applications and APIs, guiding architecture decisions, and collaborating across teams to deliver reliable, business-focused solutions.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Associate Software Engineer -  Meemsoft</h5>
                    <p className={styles.timelinePeriod}>Jan 2024 - Sep 2025</p>
                    <p>Developed RESTful API endpoints using Laravel for web and client applications, reducing average response time by approximately 300ms. Optimized database schemas, indexing, and Eloquent queries, resulting in a 25% improvement in overall query performance.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>B.S. Computer Science - Superior University Gold Campus</h5>
                    <p className={styles.timelinePeriod}>August 2022 - June 2026</p>
                    <p>Dean’s List (Fall 2024), Superior University Gold Campus. Vice President, ACM Student Chapter. Organized FPSC 2024 technical event and actively participated in the ICPC Programming Contest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
