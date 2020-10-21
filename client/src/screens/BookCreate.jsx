import React, { useState } from 'react'

export default function BookCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '',
    genre: ''
  })
  // const [genreId, setGenreId] = useState('')
  const { handleBookCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  // const handleGenre = (e) => {
  //   const { value } = e.target;
  //   setGenreId(value);
  // }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleBookCreate(formData);
    }}>
      <h3>Add Book</h3>
      <label>
        Title:
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label> Author:
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>Description
        <input
          type="textarea"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>Cover image
        <input
          type="text"
          name='image'
          alt={formData.title}
          value={formData.image}
          onChange={handleChange}
        />
        </label>
      <button>Create</button>
    </form>
  )
}