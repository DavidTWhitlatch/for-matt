import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './BookEdit.css'

export default function BookEdit(props) {
  const { handleBookEdit, books } = props
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '',
    genre: ''
  })

  useEffect(() => {
    const preFillFormData = () => {
      const { name, value } = books.filter(book => book.id === Number(id))
      setFormData({
        ...formData,
        [name]: value })
    }
    if (books.length > 0) {
      preFillFormData()
    }
  },[books, id,formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleBookEdit(id, formData);
    }}>
      <h3>Edit Book</h3>
      <label>
        Title:
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          type="textarea"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Cover Art:
        <input
          type="text"
          name='image'
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  )
}
