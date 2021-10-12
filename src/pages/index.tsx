import styled from 'styled-components';
import GalaxyBackground from '../components/Three/GalaxyBackground';

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 90vh;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/cyrano-dev-9a50d.appspot.com/o/images%2Fbe_happy.png?alt=media&token=c22b6e1e-3cdb-4d5d-bba5-41e96e882441');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

function Home() {
    return (
        <div>
            <GalaxyBackground />
        </div>
    );
}

export default Home;
