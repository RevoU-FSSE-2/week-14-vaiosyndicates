import { Button, Space, Table as Tables } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface CategoryType {
  id?: string ;
  is_active?: boolean;
  name?: string;
  created_at?: string;
  updated_at?: string;
}

interface CategoryWrapper {
  list: CategoryType[];
  handleDel:(c: string) => void;
  handleUpdate:(c: string) => void;
}

const Table = ({list, handleDel, handleUpdate}: CategoryWrapper) => {
  // console.log(list)

  // const handleDelete = (id: string): void => {
  //   console.log(id)
  // }

  const columns: ColumnsType<CategoryType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Is Active',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (list) => <a>{`${list.is_active}`}</a>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Created At',
      key: 'created_at',
      dataIndex: 'created_at',
    },
    {
      title: 'Updated At',
      key: 'updated_at',
      dataIndex: 'updated_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (list) => (
        
        <Space size="middle">
          <Button type={'primary'} htmlType={"submit"} onClick={() => handleUpdate(list.id)}   className='bg-indigo-400'>Edit</Button>
          <Button type={'primary'} htmlType={"submit"} onClick={() => handleDel(list.id)}   className='bg-indigo-500'>Delete</Button>
        </Space>
      ),
    },
  ];
  
  
  if(list.length > 0) {
    return (
      <Tables columns={columns} dataSource={list} />
    )
  } else {
    return (
      <Tables columns={columns} />
    )
  }

}

export default Table;