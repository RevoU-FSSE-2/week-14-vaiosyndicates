import { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import Card from '../../component/Card'
import { Input } from 'antd';
import { useGlobalContext } from '../../context';
import { lib } from '../../lib';
import axios from 'axios';


const initState = {
  name: '',
  email: ''
}

const Profile = () => {
  const urls = lib.url
  const { token } = useGlobalContext()
  const [load, setLoad] = useState<boolean>(true)
  const [initialValues, setInitialValues] = useState(initState);

  useEffect(() => {
    if(load == true) {
      fetchUser()
    }
  })

  const fetchUser = async () => {
    const response = await axios.get(`${urls}/user/profile`, { 
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if(response.status == 201) {
      setInitialValues(response.data.data)
      setLoad(false)
    }
  }

  return (
    <div className='container mx-auto'>
      <div className="min-h-screen dark:bg-slate-800">
        <div className="flex">
          <Navbar urlMenu={'/'} urlProfile={'/profile'} />
        </div>
        <div className="flex gap-y-5 mt-24">
          <div className="flex flex-col items-center justify-center flex-profile">
            <Card title={`PROFILE`}>
              <form>
                  <div>
                      <h4 className='form-title'>Email</h4>
                      <Input name={'email'}
                          value={initialValues.email} 
                      />
                  </div>
                  <div>
                      <h4 className='form-title'>Name</h4>
                      <Input name={'name'}
                          type='text'
                          value={initialValues.name}
                      />
                  </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile