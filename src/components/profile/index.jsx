import React from 'react'
import NormProgress from './progressBar/NormProgress'
import Username from './username'
import study from '../../assets/icons/study.png'
import taxi from '../../assets/icons/taxi.png'
import games from '../../assets/icons/games.png'
import Average from './progressBar/Average'
import dataFromDB from '../../database/data'
import score from '../../components/profile/progressBar/NormProgress'
import { AppContainer, GreyContainer } from './style'
import { useState } from 'react'


export default function ProfileApp() {

    const [data, setData] = useState([...dataFromDB])
    
    return (
        <>
            {
                data.map((user, index)=>{
                    let url= `https://picsum.photos/id/${user.id*4}/150/150`
                    return(
                        <AppContainer key={user.id}>
                        <Username userImage={url} name={user.username} />
                        <GreyContainer>
                            <div>
                            <NormProgress course='java' setData={setData} data={data} index={index} user={user} icon={games}  />
                            <NormProgress course="python" setData={setData} data={data} index={index} user={user} icon={study}  />
                            <NormProgress course="javascript" setData={setData} data={data} index={index} user={user} icon={taxi}  />
                            </div>
                            <Average percent={(user.java+user.python+user.javascript)/3} />
                            {/* <Average percent={(score+score+score)/3} /> */}
                        </GreyContainer>
                        
                        </AppContainer>
                    )
                })
            }
            
        </>
        
    )
}
