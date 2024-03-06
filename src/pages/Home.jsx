export default function Home() {
  return (
    <>
      <div id="sidebar">
       
      <h2>PcIntegrum</h2>
        <nav>
          <ul>
            <li>
              <a href={`/register`}>Registrarse</a>
            </li>
            <li>
              <a href={`/login`}>Loguearse</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}