import './Nav.css';

function Nav() {
  let navBtn = 'Log Out'
    return (
        <>
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">BananaWorld</a></li>
          <li><a href="#">UfoWorld</a></li>
          <li><button className='btn'><a href="#">{navBtn}</a></button></li>
        </ul>
      </nav>
        </>
    )
}

export default Nav;