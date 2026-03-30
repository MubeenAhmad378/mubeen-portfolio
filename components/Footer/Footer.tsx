import Link from "next/link"
import styles from "./Footer.module.css"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <span>Mubeen</span>Ahmad
            </Link>
            <p>
              Senior Software Engineer focused on building reliable, scalable, and high-quality digital products.
            </p>
            <div className={styles.social}>
              <Link
                href="https://github.com/MubeenAhmad378?tab=overview&from=2026-03-01&to=2026-03-26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mubeen-ahmad123/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:mubeen.166912@gmail.com" aria-label="Email">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="#services">Web Development</Link>
              </li>
              <li>
                <Link href="#services">Mobile App Development</Link>
              </li>
              <li>
                <Link href="#services">AI & Machine Learning</Link>
              </li>
              <li>
                <Link href="#services">Data Science</Link>
              </li>
              <li>
                <Link href="#services">UI/UX Design</Link>
              </li>
              <li>
                <Link href="#services">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>Lahore, Pakistan</p>
            <p>mubeen.166912@gmail.com</p>
            <p>+923026738378</p>
            <Link href="#contact" className={styles.contactBtn}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Mubeen Ahmad. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
