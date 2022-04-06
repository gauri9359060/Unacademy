import React from 'react'
import Banner from './Banner'
import IconicCourse from './IconicCourse'
import PlusCourse from './PlusCourse'
import styles from './styles.module.css'
const CourseComp = () => {
  return (
      <div>
    <div className={styles.section1}>
              <div style={{ height: "4em" }}></div>
      <Banner/>
      </div>
      <IconicCourse/>
      <PlusCourse/>
    </div>
  )
}

export default CourseComp
