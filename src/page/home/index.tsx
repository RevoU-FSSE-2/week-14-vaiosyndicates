import { useEffect, useState } from 'react'
import axios from "axios";
import Table from '../../component/Table'
import { Button } from 'antd';
import { lib } from '../../lib';
import { useGlobalContext } from '../../context';
import { useNavigate} from 'react-router-dom';

interface CategoryType {
  id?: string;
  is_active?: boolean;
  name?: string;
  created_at?: string;
  updated_at?: string;
}

const Home = () => {
  const urls = lib.url
  const { token } = useGlobalContext()
  const navigate = useNavigate();

  const [list, setList] = useState<CategoryType[]>([]);
  const [load, setLoad] = useState<boolean>(true)


  useEffect(() => {
    if(load == true) {
      getList()
    }
  })

  const getList = async () => {
    // console.log(token)
    try {
      const response = await axios.get(`${urls}/category`, { 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if(response.status == 200) {
        console.log(response.data.data)
        setList(response.data.data);
        setLoad(false)
      }
    } catch (err) {
      if (err instanceof Error) {
        setLoad(false)
        console.log(err.message);
      } else {
        setLoad(false)
        console.log('Unexpected error', err);
      }
    }

  }

  const addData = () => {
    // setOpen(true);
    navigate('/category/add')
  }

  const handleDel = async (id: string) => {
    try {
      const response = await axios.get(`${urls}/category/${id}`, { 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      
      if(response.status == 201 ) {
        try {
          
          const responseDel = await axios.delete(`${urls}/category/${id}`, { 
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });

          if(responseDel.status == 204) {
            getList()
          }

        } catch (error) {
          if (error instanceof Error) {
            setLoad(false)
            console.log(error.message);
          } else {
            setLoad(false)
            console.log('Unexpected error', error);
          }
        }
      } else {
        console.log(response.status)
      }
      console.log(response)
    } catch (error) {
      if (error instanceof Error) {
        setLoad(false)
        console.log(error.message);
      } else {
        setLoad(false)
        console.log('Unexpected error', error);
      }
    }
  }

  const handleUpdate = (id: string) => {
    console.log(id)
    navigate(`/category/edit/${id}`)
  }


  
  return (
    <div className='container mx-auto'>
      <Table list={list} handleDel={handleDel} handleUpdate={handleUpdate} />
      {/* <Modal open={open} handleOK={handleOK} confirmLoading={confirmLoading} handleCancel={handleCancel} category={category} name={name} setCategory={setCategory} setName={setName} /> */}
      <Button type={'primary'} htmlType={"button"}  className='btn-register' onClick={addData}>Add Data</Button>
    </div>
  )
}

export default Home