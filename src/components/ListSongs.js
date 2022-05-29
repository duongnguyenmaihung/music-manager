import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [list, updateList] = useState(Songs);

  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };

  // const handleDelete = (idSong) => {
  //   const newsId = song.id;
  //   console.log(newsId);
  //   this.state(prevState => ({
  //     news: prevState.news.filter(song => song.id !== newsId ) 
  //   }));
  // }
  const handleRemoveItem = index => {
    // assigning the list to temp variable
    const temp = [...DataSongs];

    // removing the element using splice
    temp.splice(index, 1);

    // updating the list
    updateList(temp);
    console.log(temp);
  }

 

  useEffect(() => {
    setidSong(song.id)
  }, [song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
            <th className="w-[10%]">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
              <td className="text-center">
                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <i className="fa fa-trash"></i>
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}