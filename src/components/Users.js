import React from 'react';
import { Card,Avatar } from '@mui/material';
import {useGlobalContext} from '../Context';
import {Link} from 'react-router-dom';
const Users = () => {
    const {users,makeName}= useGlobalContext()
  return (
    <div className="users-wrapper">
    {
      users.map((d,index)=>{
        return(
          <>
          <Link to={`/user/${index}`}>
            <Card variant="outlined" key={index} className="userWrapper">
                <div className="img-wrapper">
                    <Avatar
                        alt="Remy Sharp"
                        src={d.picture.medium}
                        sx={{ width: 100, height: 100 }}
                        />
                </div>
                <div>
                    <h5 className="user-name">{makeName(d.name)}</h5>
                    <span className="user-gender">{d.gender}</span>
                </div>
            </Card>
            </Link>
          </>
        )
      })
    }
  </div>

  )
}
export default Users