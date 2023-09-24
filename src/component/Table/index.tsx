import { Button, Space, Table as Tables } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface CategoryType {
  id?: string ;
  is_active?: boolean;
  name?: string;
  created_at?: string;
  updated_at?: string;
}

interface LoadingType {
  loading?: boolean;
}

interface CategoryWrapper {
  list: CategoryType[];
  handleDel:(x: string, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleUpdate:(c: string) => void;
  handleAdd:() => void;
}

interface TableType extends CategoryWrapper {
  loader: LoadingType
}




const Table = ({list, handleDel, handleUpdate, handleAdd, loader}: TableType) => {
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
      render: (_,v) => <a>{`${v.is_active}`}</a>
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
          <Button type={'primary'} htmlType={"submit"} onClick={() => handleUpdate(list.id)}   className='bg-gray-600'>Edit</Button>
          <Button type={'primary'} htmlType={"submit"} onClick={(event) => handleDel(list.id, event)}   className={`bg-gray-600 ${list.id}`} loading={loader.loading} >Delete</Button>
        </Space>
      ),
    },
  ];
  
  
  return (
    <>
      <Button type={'primary'} htmlType={"button"} className='btn-add-cat bg-gray-500' onClick={handleAdd}>Add Data</Button>
      <Tables columns={columns}  dataSource={list.length > 0 ? list : []} />
    </>
  )

}

export default Table;