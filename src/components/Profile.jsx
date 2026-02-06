import React from 'react'
import photo from "./../img/profile.png"
import react_icon from "./../img/react.svg"

const Profile = () => {
  
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrap">
          <div className="profile__info_right">
            <h3 className="profile__info_right_title">
              Привет, меня зовут
            </h3>
            <div className="profile__info_right_desc">
              <p className="profile__info_right_desc_name">
                {`< Пак Дмитрий />`}
              </p>
              <p className="profile__info_right_desc_p">
                Front-end разработчик
              </p>
              <div className="profile__info_right_desc_exp">
                <span className='profile__info_right_desc_exp_time_span'> 0 </span>
                <p className="profile__info_right_desc_exp_time">
                  Лет опыта
                </p>
                <span className='profile__info_right_desc_exp_project_span'> 2 </span>
                 <p className="profile__info_right_desc_exp_project">
                   Проекты сделаны
                </p>
              </div>
            </div>
          </div>
          <div className="profile__info_left">
            <div className="profile__info_left_react">
              <img src={react_icon} alt="" />
              
            </div>
            <div className="profile__info_left_img">
              <img src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile