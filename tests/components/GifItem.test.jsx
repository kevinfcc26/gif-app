import { render } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'hola';
    const url = 'hettps://one-punch.com/saitama.jpj';
    test('Debe de hacer match con el snapshot', ()=>{
        const { container } = render( <GiftItem title={ title } url={ url }/> )
        expect( container).toMatchSnapshot();
    })
 });