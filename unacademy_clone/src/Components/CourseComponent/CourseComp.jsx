import React from 'react'
import Banner from './Banner'
import Curosel1 from './Curosel1'
import Educators from './Educators'
import IconicCourse from './IconicCourse'
import LiteCourse from './LiteCourse'
import LiveClasses from './LiveClasses'
import PlusCourse from './PlusCourse'
import styles from './styles.module.css'
import Syllabus from './Syllabus'
const CourseComp = () => {
  return (
      <div>
    <div className={styles.section1}>
              <div style={{ height: "4em" }}></div>
      <Banner/>
      </div>
      <IconicCourse/>
      <Curosel1/>
      <PlusCourse/>
      <LiteCourse/>
      <LiveClasses/>
      <Educators/>
      <Syllabus/>
    </div>
  )
}

export default CourseComp
