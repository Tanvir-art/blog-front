import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Serial Number',
        selector: row => row._id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Owner',
        selector: row => row.owner,
    },
    {
        name: 'Profile',
        selector: row => row.profile,
    },
];
const Feature = () => {
    const [records, setRecords] = useState([]);
    useEffect(()=> {
        fetch('https://b8a11-server-side-tanvir-art.vercel.app/blogs')
        .then(res => res.json())
        .then(data=> {
            data.sort((a, b) => {
                const wordsA = a.long_desc.split(' ').length;
                const wordsB = b.long_desc.split(' ').length;
                return wordsB - wordsA;
              });
            setRecords(data)
        })
    })
  return (
    <div>
      <h2>feature</h2>
      <div>
        <DataTable
         columns={columns} 
         data={records}
         pagination
         >
        </DataTable>
      </div>
    </div>
  )
}

export default Feature
