import React from 'react'
import './Books.css'
import { Link } from 'react-router-dom'

export default function Books(props) {
  const { books } = props
  return (
    <div className='books'>
      <ul className='col-1'>
        <div className='page title'>
        </div>

        <div className='create'>
          <Link to='/books/new'><button>Create</button></Link>
        </div>
      </ul>
      <table>
        <tbody className='collection'>
          {
            books.map(book => (
              <tr key={book.id}>
                <td>
                  <Link to={`/books/${book.id}`}><img className='img' src={book.image} alt={book.title} /></Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
