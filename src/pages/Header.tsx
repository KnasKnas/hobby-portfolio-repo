import styled from 'styled-components';


const HeaderComponent = styled.div`
    display: grid;
    grid-template-areas:
    "logo lenker meny"
    "logo . . ";
    /* grid-template-rows: repeat(2, 200px);
    grid-template-columns: repeat(2, 100px); */
`

const Element = styled.div`
    grid-area: logo;
    align-self: center;
`


const Header = (): JSX.Element => {
    return (
        <HeaderComponent>
            <Element>
                Logo?
            </Element>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>
        </HeaderComponent>
    )

}

export default Header