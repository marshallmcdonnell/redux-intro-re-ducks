import expect from "expect.js";
import reducer from "./reducers";
import actions from "./actions";

describe( "counter reducer", function( ) {
    describe( "counter", function( ) {
        const increment = actions.increment( );
        const initialState = { count: 4 };

        const result = reducer( initialState, increment );

        it( "should increment to 5", function( ) {
            expect( result ).to.be( 5 ) ;
        } );
    } );
} );