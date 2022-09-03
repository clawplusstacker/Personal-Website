import React from 'react'
import styles from './experiencesection.module.css'
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import jg1 from '../../../Images/jg1.jpg'
import ExpChooser from '../../ExpChooser/ExpChooser'
import { useState } from 'react'
import github from '../../../Images/githubIcon.png'

export default function ExperienceSection() {

  const [active, setActive] = useState(0)

  function moveGrad(){
    if(active == 0){
      return {
        marginRight : '70%',
      }
    }else if (active == 2){
      return {
        marginLeft : '70%',
      }
    }else return {}
  }


  return (
    <div className={styles.mainBannerContainer}>

      <div className={styles.chosenContainer}>

        <div className={styles.chosenText}>

          <h1>Experience</h1>
          <h2>Exp Name (Date 2020 - Date 2024)</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat.
              "Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat.
          </p>
          <h3>Skills Used:</h3>
          <p>Test Test Test Test Test Test</p>
          <p>Test Test Test Test Test Test</p>
          <p>Test Test Test Test Test Test</p>

        </div>

        <Carousel 
              className={styles.car} 
              arrows 
              prevArrow={<ArrowLeftOutlined />}
              nextArrow={<ArrowRightOutlined />}
          >

            <img src={jg1}/>
            <img src={jg1}/>
            <img src={jg1}/>

          </Carousel>

        </div>

        <div className={styles.expRow}>

          <div className={styles.gradient} style={moveGrad()}/>

          <ExpChooser 
            style={{marginRight: '70%'}} 
            onClick={() => setActive(0)}
            title={"Jahnel Group"}
            image={<img src={github}/>}
          />
          <ExpChooser 
            onClick={() => setActive(1)}
            title={"iComputers"}
            image={<img src={github}/>}
          />

          <ExpChooser 
            style={{marginLeft: '70%'}} 
            onClick={() => setActive(2)}
            title={"St. Mary's School"}
            image={<img src={github}/>}
          />
        </div>

    </div>
  )
}
