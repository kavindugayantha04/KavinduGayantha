import { useEffect, useState } from 'react'

const DEFAULT_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'certifications',
  'contact',
]

export function useActiveSection(sectionIds = DEFAULT_IDS) {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const pickFromScroll = () => {
      const hero = document.getElementById('home')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        if (rect.bottom > 120) {
          setActiveId('home')
          return true
        }
      }
      return false
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (pickFromScroll()) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-18% 0px -52% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    const onScroll = () => {
      pickFromScroll()
    }

    elements.forEach((el) => observer.observe(el))
    window.addEventListener('scroll', onScroll, { passive: true })
    pickFromScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds])

  return activeId
}
