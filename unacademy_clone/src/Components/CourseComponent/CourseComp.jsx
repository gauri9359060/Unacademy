import React, { useContext } from 'react'
import Banner from './Banner'
import BestLectures from './BestLectures'
import ComingSoon from './ComingSoon'
import Curosel1 from './Curosel1'
import Educators from './Educators'
import IconicCourse from './IconicCourse'
import LiteCourse from './LiteCourse'
import LiveClasses from './LiveClasses'
import PackageContainer from './PackageContainer'
import PlusCourse from './PlusCourse'
import RecentlyStarted from './RecentStarted'
import styles from './styles.module.css'
import Syllabus from './Syllabus'
import Footer from '../explorepage/Footer'
import NavBarTwo from '../Navbar/NavbarTwo'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from '../../Context/AuthContextProvider'
import LastBanner from './LastBanner'
const CourseComp = () => {
  const { auth } = useContext(AuthContext)
  return (
      <div>
      {auth ? <NavBarTwo /> : <Navbar />}
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
      <ComingSoon/>
      <RecentlyStarted/>
      <BestLectures/>
      {/* <PackageContainer/>
      <LastBanner/> */}
      <Footer />
    </div>
  )
}

export default CourseComp
