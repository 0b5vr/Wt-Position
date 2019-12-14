const fs = require( 'fs' );
const path = require( 'path' );
const JSDOM = require( 'jsdom' ).JSDOM;

const files = fs.readdirSync( path.resolve( __dirname, 'glyphs' ) );
files.forEach( ( fileName ) => {
  const svgPath = path.resolve( __dirname, 'glyphs', fileName );
  const file = fs.readFileSync( svgPath, { encoding: 'utf8' } );

  const jsdom = new JSDOM( file );
  const rects = jsdom.window.document.getElementsByTagName( 'rect' );

  Array.from( rects ).forEach( ( rect ) => {
    if ( rect.style.fill === 'none' ) {
      rect.parentNode.removeChild( rect );
    }
  } );

  fs.writeFileSync( svgPath, jsdom.window.document.body.innerHTML );
} );
