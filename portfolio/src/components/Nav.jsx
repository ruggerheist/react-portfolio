export default function Nav({setpage}) {
    return (
        <nav>
            <ul>
                <li onClick={() => setpage('About')}> About ME </li>
                <li onClick={() => setpage('Portfolio')}> Portfolio </li>
                <li onClick={() => setpage('Contact')}> Contact </li>
                <li onClick={() => setpage('Resume')}> Resume </li>
            </ul>
        </nav>
        
    )
}