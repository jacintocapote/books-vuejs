import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BookCard from '@/components/Books/BookCard.vue'

describe('BookCard.vue', () => {
  it('Render a Card Book', () => {
    const name = 'It'
    const intro = "When children in town begin to disappear, a group of young kids is faced with their biggest fears as they square off against evil clown, Pennywise. Based on the Stephen King novel."
    const wrapper = shallowMount(BookCard, {
      propsData: {
        book: {
          id: 1,
          path: "book/it",
          name: "It",
          isbn: "9788497593793",
          intro: "When children in town begin to disappear, a group of young kids is faced with their biggest fears as they square off against evil clown, Pennywise. Based on the Stephen King novel.",
          description: "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears and phobias of its victims to disguise itself while hunting its prey.",
          author: "Stephen King",
          language: "English",
          picture: "it.jpg",
          star: 4,
          year: 1986
        }
      }
    })
    // Check basic information is showed.
    expect(wrapper.html()).to.include(name)
    expect(wrapper.text()).to.include(intro)
  })
})
