import React from 'react'
import './perks.css'
function Perks() {
  let perkToWorkWithUs = [{
    icon: "https://i.pinimg.com/originals/2c/2c/f6/2c2cf60e98e4a0bd717f8d8c61ea1116.png", Name: "Flexible Working Hours", desc: "We are a work oriented company where work is our priority. According to our research, flexible working hours are one of the factors which lessen your stress from work."
  }, {
    icon: "https://cdn2.iconfinder.com/data/icons/award-and-reward/128/Crystal-trophy-blue-award-certificate-512.png", Name: "Company Activities", desc: "Fun is an integral part at Hyperlink InfoSystem. We celebrate together, play together and work together at the same time. We arrange fun activities at office frequently to loosen up your stress."
  }, {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3cpyT_RzLDfC-_4hWDt3HKZoe_1XXsT0A3mEeoddXOplWSJO7T1r7gwXK7cAO2Yayzs&usqp=CAU", Name: "Transparency From Top To Bottom", desc: "We at Hyperlink InfoSystem preserve complete transparency through each hierarchy. Everyone has a right to put their point of view and freedom to speak."
  }, {
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/rupees-salary-2-1133492.png", Name: " Competitive Salaries", desc: "Hyperlink InfoSystem values a true talent and everyone gets their fair part of salary. We believe in performance so there is no bar for right skills."
  },
   {
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/making-employees-feel-valued-5367293-4483334.png?f=webp", Name:"Awesome Co-Worker", desc: "Everyone at Hyperlink InfoSystem maintains cordial relationships with peers. Though we have different departments but we are a big team."
  },
   {
    icon: "https://toppng.com/uploads/preview/career-icon-career-growth-icon-blue-11553484786i06pmgnasz.png", Name: "Growth Opportunity", desc: "Growth is never ending at Hyperlink InfoSystem. Whether it is about monetary or skills & talent or personal growth, everything is taken care of. The company has a goal to Grow together"
  }]
  return (
    <div id='perks-main-container'>
      <h2>Perks to Work with Conscientious Tech</h2>
      <div id='perks-div-container'>

        {
          perkToWorkWithUs.map((items, i) => {
            return (
              <div className='perks-inner-div' id='perks-first-div' key={i}>
                <img src={items.icon} alt="icon" width="200px"/>
                <p className='perk-name'>0{i+1}. {items.Name}</p>
                <p className='perk-desc'>{items.desc}</p>
              </div>

            )


          })
        }
      </div>



    </div>
  )
}

export default Perks
