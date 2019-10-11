import Lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import mkdirp from 'mkdirp'
import { resolve } from 'path'

mkdirp(resolve(__dirname, '../../live'))

export const db = new Lowdb(new FileSync(resolve(__dirname, '../../live/db.json')))

// Seed an DB with default values
db.defaults({
  books: [
    {
      "id": 1,
      "name": "It",
      "isbn": "5555555551",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Stephen King",
      "language": "English",
      "picture": "it.jpg",
      "star": 4,
      "year": 1986,
      "path": "it"
    },
    {
      "id": 2,
      "name": "Harry Potter: The Philosopher's Stone",
      "isbn": "5555555552",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "J. K. Rowling",
      "language": "English",
      "picture": "harry_potter.jpg",
      "star": 4,
      "year": 2000,
      "path": "harry-potter"
    },
    {
      "id": 3,
      "name": "Eleanor Oliphant Is Completely Fine: A Novel",
      "isbn": "5555555553",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Gail Honeyman",
      "language": "Spanish",
      "picture": "eleanor.jpg",
      "star": 3,
      "year": 2015,
      "path": "eleanor"
    },
    {
      "id": 4,
      "name": "Where the Crawdads Sing",
      "isbn": "5555555554",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Delia Owens",
      "language": "French",
      "picture": "crawdads.jpg",
      "star": 2,
      "year": 2018,
      "path": "where-crawdads"
    },
    {
      "id": 5,
      "name": "Educated: A Memoir",
      "isbn": "5555555555",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Tara Westover",
      "language": "French",
      "picture": "educated.jpg",
      "star": 2,
      "year": 2019,
      "path": "educated"
    },
    {
      "id": 6,
      "name": "A Brief History Of Time",
      "isbn": "5555555556",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Tara Westover",
      "language": "English",
      "picture": "brief.jpg",
      "star": 5,
      "year": 2005,
      "path": "brief-history"
    },
    {
      "id": 7,
      "name": "Dog man",
      "isbn": "5555555557",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Tara Westover",
      "language": "English",
      "picture": "dog.jpg",
      "star": 5,
      "year": 2015,
      "path": "dog-man"
    },
    {
      "id": 8,
      "name": "It's Not Supposed to Be This Way",
      "isbn": "5555555558",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Tara Westover",
      "language": "English",
      "picture": "be_way.jpg",
      "star": 5,
      "year": 2010,
      "path": "supposed-this-way"
    },
    {
      "id": 9,
      "name": "The Gifts of Imperfection",
      "isbn": "5555555559",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Brené Brown",
      "language": "Spanish",
      "picture": "gift.jpg",
      "star": 1,
      "year": 2000,
      "path": "gift"
    },
    {
      "id": 10,
      "name": "Fahrenheit 511",
      "isbn": "55555555510",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Ray Bradbury",
      "language": "Spanish",
      "picture": "fahrenheit.jpg",
      "star": 3,
      "year": 2004,
      "path": "fahrenheit-511"
    },
    {
      "id": 11,
      "name": "Sapiens",
      "isbn": "55555555511",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Yuval Noah Harari",
      "language": "English",
      "picture": "sapiens.jpg",
      "star": 1,
      "year": 2000,
      "path": "sapiens"
    },
    {
      "id": 12,
      "name": "Medical",
      "isbn": "55555555512",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae molestie lectus. Nullam porttitor at augue et lobortis. Maecenas et viverra justo. Duis ac commodo magna. Pellentesque non molestie eros. Nulla nec nisi vestibulum, egestas augue sed, hendrerit augue. Phasellus libero lorem, ultrices eget dictum vitae, tincidunt ut massa. Etiam vitae mauris sodales mi interdum bibendum sit amet quis velit",
      "author": "Medical Medium Liver Rescue",
      "language": "English",
      "picture": "medical.jpg",
      "star": 4,
      "year": 1999,
      "path": "medical"
    }
  ],
}).write()
