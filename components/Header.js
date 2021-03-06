//importing Link
import Link from 'next/link'

//preparing for inline styling
const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contacts">
          <a style={linkStyle}>Contacts</a>
        </Link>
    </div>
)

export default Header